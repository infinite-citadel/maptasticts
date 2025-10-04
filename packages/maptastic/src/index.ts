import { match } from "ts-pattern";
import { Key } from "ts-key-enum";
import numeric from "numeric";

export type Point = [number, number];

export type Layer = {
  id: string;
  targetPoints: Point[];
  visible: boolean;
  width: number;
  height: number;
  element: HTMLElement;
  sourcePoints: Point[];
};

type Layout = Pick<Layer, "sourcePoints" | "targetPoints" | "id">[];

export type MaptasticConfig = {
  labels?: boolean;
  crosshairs?: boolean;
  screenbounds?: boolean;
  autoSave?: boolean;
  autoLoad?: boolean;
  layers?: Array<string | HTMLElement>;
  onChange?: () => void;
  localStorageKey?: string;
};

const clonePoints = (points: Point[]) => {
  const clone: [number, number][] = [];
  points.forEach((point) => {
    const [p1, p2] = point;
    clone.push([p1, p2]);
  });
  return clone;
};

// Compute linear distance.
const distanceTo = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const pointInTriangle = (point: Point, a: Point, b: Point, c: Point) => {
  var s =
    a[1] * c[0] -
    a[0] * c[1] +
    (c[1] - a[1]) * point[0] +
    (a[0] - c[0]) * point[1];
  var t =
    a[0] * b[1] -
    a[1] * b[0] +
    (a[1] - b[1]) * point[0] +
    (b[0] - a[0]) * point[1];

  if (s < 0 != t < 0) {
    return false;
  }

  var A =
    -b[1] * c[0] + a[1] * (c[0] - b[0]) + a[0] * (b[1] - c[1]) + b[0] * c[1];
  if (A < 0.0) {
    s = -s;
    t = -t;
    A = -A;
  }

  return s > 0 && t > 0 && s + t < A;
};

// determine if a point is inside a layer quad.
const pointInLayer = (point: Point, layer?: Layer) => {
  if (!layer) {
    return false;
  }
  const [t1, t2, t3, t4] = layer.targetPoints;
  if (!t1 || !t2 || !t3 || !t4) {
    return false;
  }
  return (
    pointInTriangle(point, t1, t2, t3) || pointInTriangle(point, t4, t1, t3)
  );
};

export default class Maptastic {
  showLayerNames: boolean = true;
  showCrosshairs: boolean = false;
  showScreenBounds: boolean = false;
  autoSave: boolean = true;
  autoLoad: boolean = true;
  layoutChangeListener: () => void = () => { };
  localStorageKey: string = "maptastic.layers";
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  layerList: Array<string | HTMLElement> = [];
  layers: Layer[] = [];
  configActive: boolean;
  dragging: Boolean;
  dragOffset: [number, number] | null;

  selectedLayer: Layer | null;
  selectedPoint: Point | null;
  selectionRadius: number;
  hoveringPoint: Point | null;
  hoveringLayer: Layer | null;
  dragOperation: "move";
  isLayerSoloed: boolean;

  mousePosition: [number, number] | null;
  mouseDownPoint: [number, number] | null;

  constructor(config: MaptasticConfig | string | HTMLElement) {
    if (typeof config === "object" && !(config instanceof HTMLElement)) {
      this.showLayerNames = config.labels ?? true;
      this.showCrosshairs = config.crosshairs ?? false;
      this.showScreenBounds = config.screenbounds ?? false;
      this.autoSave = config.autoSave ?? true;
      this.autoLoad = config.autoLoad ?? true;
      this.layerList = config.layers ?? [];
      this.layoutChangeListener = config.onChange ?? (() => { });
      this.localStorageKey = config.localStorageKey ?? "maptastic.layers";
    } else {
      this.layerList = [config];
    }

    this.canvas = null;
    this.context = null;

    this.configActive = false;

    this.dragging = false;
    this.dragOffset = null;

    this.selectedLayer = null;
    this.selectedPoint = null;
    this.selectionRadius = 20;
    this.hoveringPoint = null;
    this.hoveringLayer = null;
    this.dragOperation = "move";
    this.isLayerSoloed = false;

    this.mousePosition = null;
    this.mouseDownPoint = null;

    this.init();

    this.layerList.forEach((layer) => {
      this.addLayer(layer);
    });

    if (this.autoLoad) {
      this.loadSettings();
    }
  }

  notifyChangeListener() {
    this.layoutChangeListener();
  }

  private draw() {
    if (!this.configActive || !this.canvas || !this.context) {
      return;
    }

    const { canvas, context } = this;
    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.clearRect(0, 0, canvas.width, canvas.height);

    this.layers.forEach((layer) => {
      if (layer.visible) {
        layer.element.style.visibility = "visible";

        // Draw layer rectangles.
        context.beginPath();
        if (layer.id === this.hoveringLayer?.id) {
          context.strokeStyle = "red";
        } else if (layer.id === this.selectedLayer?.id) {
          context.strokeStyle = "blue";
        } else {
          context.strokeStyle = "white";
        }

        if (!layer.targetPoints[0] || !layer.targetPoints[3]) {
          return;
        }

        const [x, y] = layer.targetPoints[0];

        context.moveTo(x, y);
        layer.targetPoints.forEach(([x, y]) => {
          context.lineTo(x, y);
        });

        context.lineTo(layer.targetPoints[3][0], layer.targetPoints[3][1]);

        context.closePath();
        context.stroke();

        // Draw corner points.
        let centerPoint: [number, number] = [0, 0];

        layer.targetPoints.forEach((point) => {
          if (point === this.hoveringPoint) {
            context.strokeStyle = "red";
          } else if (point === this.selectedPoint) {
            context.strokeStyle = "blue";
          } else {
            context.strokeStyle = "white";
          }

          const [x, y] = point;

          centerPoint[0] += x;
          centerPoint[1] += y;

          context.beginPath();
          context.arc(x, y, this.selectionRadius / 2, 0, 2 * Math.PI, false);
          context.stroke();
        });

        // Find the average of the corner locations for an approximate center.
        centerPoint[0] /= 4;
        centerPoint[1] /= 4;

        if (this.showLayerNames) {
          // Draw the element ID in the center of the quad for reference.
          const label = layer.element.id.toUpperCase();
          context.font = "16px sans-serif";
          context.textAlign = "center";
          var metrics = context.measureText(label);
          const size: [number, number] = [metrics.width + 8, 16 + 16];

          context.fillStyle = "white";

          context.fillRect(
            centerPoint[0] - size[0] / 2,
            centerPoint[1] - size[1] + 8,
            size[0],
            size[1],
          );
          context.fillStyle = "black";
          context.fillText(label, centerPoint[0], centerPoint[1]);
        }
      } else {
        layer.element.style.visibility = "hidden";
      }
    });

    // Draw mouse crosshairs
    if (this.showCrosshairs && this.mousePosition) {
      console.log("showCrosshairs");
      context.strokeStyle = "yellow";
      context.lineWidth = 1;

      context.beginPath();

      context.moveTo(this.mousePosition[0], 0);
      context.lineTo(this.mousePosition[0], this.canvas.height);

      context.moveTo(0, this.mousePosition[1]);
      context.lineTo(canvas.width, this.mousePosition[1]);

      context.stroke();
    }

    if (this.showScreenBounds) {
      context.fillStyle = "black";
      context.lineWidth = 4;
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.strokeStyle = "#909090";
      context.beginPath();
      const stepX = canvas.width / 10;
      const stepY = canvas.height / 10;

      for (let i = 0; i < 10; i++) {
        context.moveTo(i * stepX, 0);
        context.lineTo(i * stepX, canvas.height);

        context.moveTo(0, i * stepY);
        context.lineTo(canvas.width, i * stepY);
      }
      context.stroke();

      context.strokeStyle = "white";
      context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

      const fontSize = Math.round(stepY * 0.6);
      context.font = fontSize + "px mono,sans-serif";
      context.fillRect(
        stepX * 2 + 2,
        stepY * 3 + 2,
        canvas.width - stepX * 4 - 4,
        canvas.height - stepY * 6 - 4,
      );
      context.fillStyle = "white";
      context.fillText(
        canvas.width + " x " + canvas.height,
        canvas.width / 2,
        canvas.height / 2 + fontSize * 0.75,
      );
      context.fillText(
        "display size",
        canvas.width / 2,
        canvas.height / 2 - fontSize * 0.75,
      );
    }
    this.context = context;
  }

  resize() {
    if (!this.canvas) {
      return;
    }
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.draw();
  }

  mouseMove = (event: MouseEvent) => {
    if (!this.configActive || !this.canvas) {
      return;
    }

    event.preventDefault();

    const [mouseX, mouseY] = this.mousePosition ?? [0, 0];

    const mouseDelta: [number, number] = [
      event.clientX - mouseX,
      event.clientY - mouseY,
    ];

    this.mousePosition = [event.clientX, event.clientY];

    if (this.dragging) {
      const scale = event.shiftKey ? 0.1 : 1;

      if (this.selectedPoint) {
        this.selectedPoint[0] += mouseDelta[0] * scale;
        this.selectedPoint[1] += mouseDelta[1] * scale;
      } else if (this.selectedLayer) {
        // Alt-drag to rotate and scale
        if (event.altKey && event.shiftKey) {
          this.rotateLayer(this.selectedLayer, mouseDelta[0] * (0.01 * scale));
        } else if (event.altKey) {
          this.scaleLayer(
            this.selectedLayer,
            mouseDelta[1] * (-0.005 * scale) + 1.0,
          );
        } else {
          this.selectedLayer.targetPoints = this.selectedLayer.targetPoints.map(
            ([x, y], i) => {
              return [x + mouseDelta[0] * scale, y + mouseDelta[1] * scale];
            },
          );
        }
      }

      this.updateTransform();
      if (this.autoSave) {
        this.saveSettings();
      }
      this.draw();
      this.notifyChangeListener();
    } else {
      var dirty = false;

      this.canvas.style.cursor = "default";
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      var previousState = this.hoveringPoint != null;
      var previousLayer = this.hoveringLayer != null;

      this.hoveringPoint = null;

      this.layers.forEach((layer) => { });

      for (var i = 0; i < this.layers.length; i++) {
        const layer = this.layers[i];
        if (!layer) {
          continue;
        }
        if (layer.visible) {
          for (var p = 0; p < layer.targetPoints.length; p++) {
            const point = layer.targetPoints[p];
            if (!point) {
              continue;
            }
            if (
              distanceTo(point[0], point[1], mouseX, mouseY) <
              this.selectionRadius
            ) {
              this.canvas.style.cursor = "pointer";
              this.hoveringPoint = point;
              break;
            }
          }
        }
      }

      this.hoveringLayer = null;
      for (var i = 0; i < this.layers.length; i++) {
        const layer = this.layers[i];
        if (layer && layer.visible && pointInLayer(this.mousePosition, layer)) {
          this.hoveringLayer = layer;
          break;
        }
      }

      if (
        this.showCrosshairs ||
        previousState != (this.hoveringPoint != null) ||
        previousLayer != (this.hoveringLayer != null)
      ) {
        this.draw();
      }
    }
  };
  mouseUp = (event: MouseEvent) => {
    if (!this.configActive) {
      return;
    }
    event.preventDefault();

    this.dragging = false;
  };

  mouseDown = (event: MouseEvent) => {
    if (!this.configActive || this.showScreenBounds) {
      return;
    }
    event.preventDefault();

    this.hoveringPoint = null;

    if (this.hoveringLayer) {
      this.selectedLayer = this.hoveringLayer;
      this.dragging = true;
    } else {
      this.selectedLayer = null;
    }

    this.selectedPoint = null;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.mouseDownPoint = [mouseX, mouseY];

    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      if (!layer) {
        continue;
      }
      for (let p = 0; p < layer.targetPoints.length; p++) {
        const point = layer.targetPoints[p];
        if (!point) {
          continue;
        }
        if (
          distanceTo(point[0], point[1], mouseX, mouseY) < this.selectionRadius
        ) {
          this.selectedLayer = layer;
          this.selectedPoint = point;
          this.dragging = true;
          this.dragOffset = [
            event.clientX - point[0],
            event.clientY - point[1],
          ];
          break;
        }
      }
    }
    this.draw();
    return false;
  };

  keyDown = (event: KeyboardEvent) => {
    if (!this.configActive) {
      if (event.key === " " && event.shiftKey) {
        this.setConfigEnabled(true);
        return;
      } else {
        return;
      }
    }

    var increment = event.shiftKey ? 10 : 1;
    var dirty = false;
    const delta: [number, number] = [0, 0];

    match(event)
      .with({ key: " ", shiftKey: true }, () => {
        this.setConfigEnabled(false);
      })
      .with({ key: Key.ArrowLeft }, () => {
        delta[0] -= increment;
      })
      .with({ key: Key.ArrowUp }, () => {
        delta[1] -= increment;
      })
      .with({ key: Key.ArrowRight }, () => {
        delta[0] += increment;
      })
      .with({ key: Key.ArrowDown }, () => {
        delta[1] += increment;
      })
      .with({ key: "c" }, () => {
        this.showCrosshairs = !this.showCrosshairs;
        dirty = true;
      })
      .with({ key: "s" }, () => {
        if (!this.isLayerSoloed) {
          if (this.selectedLayer !== null) {
            this.layers = this.layers.map((layer) => {
              if (layer.id === this.selectedLayer?.id) {
                return { ...layer, visible: true };
              }
              return { ...layer, visible: false };
            });
            this.selectedLayer.visible = true;
            dirty = true;
            this.isLayerSoloed = true;
          }
        } else {
          this.layers = this.layers.map((layer) => {
            return { ...layer, visible: true };
          });
          this.isLayerSoloed = false;
          dirty = true;
        }
      })
      .with({ key: "b" }, () => {
        this.showScreenBounds = !this.showScreenBounds;
        this.draw();
      })
      .with({ key: "h" }, () => {
        if (this.selectedLayer) {
          this.swapLayerPoints(this.selectedLayer.sourcePoints, 0, 1);
          this.swapLayerPoints(this.selectedLayer.sourcePoints, 3, 2);
          this.updateTransform();
          this.draw();
        }
      })
      .with({ key: "v" }, () => {
        if (this.selectedLayer) {
          this.swapLayerPoints(this.selectedLayer.sourcePoints, 0, 3);
          this.swapLayerPoints(this.selectedLayer.sourcePoints, 1, 2);
          this.updateTransform();
          this.draw();
        }
      })
      .with({ key: "r" }, () => {
        if (this.selectedLayer) {
          this.rotateLayer(this.selectedLayer, Math.PI / 2);
          //rotateLayer(selectedLayer, 0.002);
          this.updateTransform();
          this.draw();
        }
      })
      .otherwise(({ key }) => {
        console.log("No mapping for key", key);
      });

    // if a layer or point is selected, add the delta amounts (set above via arrow keys)
    if (!this.showScreenBounds) {
      if (this.selectedPoint) {
        this.selectedPoint[0] += delta[0];
        this.selectedPoint[1] += delta[1];
        dirty = true;
      } else if (this.selectedLayer) {
        if (event.altKey == true) {
          this.rotateLayer(this.selectedLayer, delta[0] * 0.01);
          this.scaleLayer(this.selectedLayer, delta[1] * -0.005 + 1.0);
        } else {
          this.selectedLayer = {
            ...this.selectedLayer,
            targetPoints: this.selectedLayer.targetPoints.map(([x, y]) => {
              return [x + delta[0], y + delta[1]];
            }),
          };
        }
        dirty = true;
      }
    }

    // update the transform and redraw if needed
    if (dirty) {
      this.updateTransform();
      this.draw();
      if (this.autoSave) {
        this.saveSettings();
      }
      this.notifyChangeListener();
    }
  };

  init() {
    this.canvas = document.createElement("canvas");

    this.canvas.style.display = "none";
    this.canvas.style.position = "fixed";
    this.canvas.style.top = "0px";
    this.canvas.style.left = "0px";
    this.canvas.style.zIndex = "1000000";

    this.context = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize);

    // UI events
    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("mouseup", this.mouseUp);
    window.addEventListener("mousedown", this.mouseDown);
    window.addEventListener("keydown", this.keyDown);

    this.resize();
  }

  updateTransform() {
    this.layers.forEach((layer, l) => {
      let a = [];
      let b = [];
      for (let i = 0, n = layer.sourcePoints.length; i < n; ++i) {
        var s = layer.sourcePoints[i],
          t = layer.targetPoints[i];
        if (!s || !t) {
          continue;
        }
        a.push([s[0], s[1], 1, 0, 0, 0, -s[0] * t[0], -s[1] * t[0]]);
        b.push(t[0]);
        a.push([0, 0, 0, s[0], s[1], 1, -s[0] * t[1], -s[1] * t[1]]);
        b.push(t[1]);
      }

      const X = numeric.solve(a, b);

      const matrix = [
        X[0],
        X[3],
        0,
        X[6],
        X[1],
        X[4],
        0,
        X[7],
        0,
        0,
        1,
        0,
        X[2],
        X[5],
        0,
        1,
      ];

      if (this.layers[l]) {
        this.layers[l].element.style.setProperty(
          "transform",
          `matrix3d(${matrix.join(",")})`,
        );
        this.layers[l].element.style.setProperty(
          "transform-origin",
          "0px 0px 0px",
        );
        this.layers[l].element.style.setProperty(
          "transform-style",
          "preserve-3d",
        );
      }
    });
  }

  swapLayerPoints(layerPoints: Point[], index1: number, index2: number) {
    const firstPoint = layerPoints[index1];
    const secondPoint = layerPoints[index1];
    if (!firstPoint || !secondPoint) {
      return;
    }
    const tx = firstPoint[0];
    const ty = firstPoint[1];
    if (layerPoints[index1] && layerPoints[index2]) {
      layerPoints[index1] = [...layerPoints[index2]];
      layerPoints[index2] = [tx, ty];
    }
  }

  rotateLayer(layer: Layer, angle: number) {
    var s = Math.sin(angle);
    var c = Math.cos(angle);

    let centerPoint: [number, number] = [0, 0];
    layer.targetPoints.forEach(([x, y]) => {
      centerPoint[0] += x;
      centerPoint[1] += y;
    });

    centerPoint[0] /= 4;
    centerPoint[1] /= 4;

    layer.targetPoints.forEach(([x, y], p) => {
      var px = x - centerPoint[0];
      var py = y - centerPoint[1];

      if (layer.targetPoints[p]) {
        layer.targetPoints[p][0] = px * c - py * s + centerPoint[0];
        layer.targetPoints[p][1] = px * s + py * c + centerPoint[1];
      }
    });
  }

  scaleLayer(layer: Layer, scale: number) {
    let centerPoint: [number, number] = [0, 0];
    layer.targetPoints.forEach(([x, y]) => {
      centerPoint[0] += x;
      centerPoint[1] += y;
    });

    centerPoint[0] /= 4;
    centerPoint[1] /= 4;

    layer.targetPoints.forEach(([x, y], p) => {
      var px = x - centerPoint[0];
      var py = y - centerPoint[1];

      if (layer.targetPoints[p]) {
        layer.targetPoints[p][0] = px * scale + centerPoint[0];
        layer.targetPoints[p][1] = py * scale + centerPoint[1];
      }
    });
  }

  addLayer(target: string | HTMLElement, targetPoints?: Point[]) {
    let element: HTMLElement | null = null;

    if (typeof target == "string") {
      element = document.getElementById(target);
      if (!element) {
        throw "Maptastic: No element found with id: " + target;
      }
    } else if (target instanceof HTMLElement) {
      element = target;
    }

    if (!element) {
      throw "Maptastic: No element provided";
    }

    var exists = false;
    this.layers.forEach((layer, n) => {
      if (layer.element.id == element.id && targetPoints) {
        layer.targetPoints = clonePoints(targetPoints);
        this.layers[n] = layer;
        exists = true;
      }
    });

    console.log(element);

    const offsetX = element.offsetLeft;
    const offsetY = element.offsetTop;

    element.style.position = "fixed";
    element.style.display = "block";
    element.style.top = "0px";
    element.style.left = "0px";
    element.style.padding = "0px";
    element.style.margin = "0px";

    const layer: Layer = {
      id: element.id,
      visible: true,
      element: element,
      width: element.clientWidth,
      height: element.clientHeight,
      sourcePoints: [],
      targetPoints: [],
    };

    layer.sourcePoints.push(
      [0, 0],
      [layer.width, 0],
      [layer.width, layer.height],
      [0, layer.height],
    );

    if (targetPoints) {
      layer.targetPoints = clonePoints(targetPoints);
    } else {
      layer.targetPoints.push(
        [0, 0],
        [layer.width, 0],
        [layer.width, layer.height],
        [0, layer.height],
      );
      layer.targetPoints = layer.targetPoints.map(([x, y]) => {
        return [x + offsetX, y + offsetY];
      });
    }

    this.layers.push(layer);

    this.updateTransform();
  }

  getLayout(layers: Layer[]) {
    return layers.map((layer) => {
      return {
        id: layer.element.id,
        targetPoints: clonePoints(layer.targetPoints),
        sourcePoints: clonePoints(layer.sourcePoints),
        element: layer.element,
      };
    });
  }

  setLayout(layout: Layout) {
    layout.forEach((layoutLayer) => {
      var exists = false;
      for (var n = 0; n < this.layers.length; n++) {
        const layer = this.layers[n];
        if (layer && layer.element.id == layoutLayer.id) {
          console.log("Setting points.");
          layer.targetPoints = clonePoints(layoutLayer.targetPoints);
          layer.sourcePoints = clonePoints(layoutLayer.sourcePoints);
          exists = true;
          this.layers[n] = layer;
        }
      }

      if (!exists) {
        var element = document.getElementById(layoutLayer.id);
        if (element) {
          this.addLayer(element, layoutLayer.targetPoints);
        } else {
          console.log("Maptastic: Can't find element: " + layoutLayer.id);
        }
      } else {
        console.log(
          "Maptastic: Element '" + layoutLayer.id + "' is already mapped.",
        );
      }
    });
    this.updateTransform();
    this.draw();
  }

  setConfigEnabled(enabled: boolean) {
    this.configActive = enabled;
    if (this.canvas) {
      this.canvas.style.display = enabled ? "block" : "none";
    }

    if (!enabled) {
      this.selectedPoint = null;
      this.selectedLayer = null;
      this.dragging = false;
      this.showScreenBounds = false;
    } else {
      this.draw();
    }
  }

  saveSettings() {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.getLayout(this.layers)),
    );
  }

  clearSettings() {
    localStorage.removeItem(this.localStorageKey);
  }

  loadSettings() {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      const data = JSON.parse(storedData);

      for (var i = 0; i < data.length; i++) {
        for (var n = 0; n < this.layers.length; n++) {
          const layer = this.layers[n];
          if (!layer) {
            continue;
          }
          if (layer.element.id == data[i].id) {
            layer.targetPoints = clonePoints(data[i].targetPoints);
            layer.sourcePoints = clonePoints(data[i].sourcePoints);
          }
          this.layers[n] = layer;
        }
      }
      this.updateTransform();
    }
  }
}
