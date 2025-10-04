// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"gXJUK":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "47f455d51fcc916e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fILKw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _src = require("maptastic/src");
var _srcDefault = parcelHelpers.interopDefault(_src);
const map = new (0, _srcDefault.default)({
    layers: [
        "simple-1",
        "simple-2"
    ]
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"erqMY","maptastic/src":"6lcCP"}],"erqMY":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6lcCP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tsPattern = require("ts-pattern");
var _tsKeyEnum = require("ts-key-enum");
var _numeric = require("numeric");
var _numericDefault = parcelHelpers.interopDefault(_numeric);
const styleObjectToString = (obj)=>{
    return Object.entries(obj).map(([prop, value])=>`${prop}: ${value};`).join(" ");
};
const clonePoints = (points)=>{
    const clone = [];
    points.forEach((point)=>{
        const [p1, p2] = point;
        clone.push([
            p1,
            p2
        ]);
    });
    return clone;
};
// Compute linear distance.
const distanceTo = (x1, y1, x2, y2)=>{
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
const pointInTriangle = (point, a, b, c)=>{
    var s = a[1] * c[0] - a[0] * c[1] + (c[1] - a[1]) * point[0] + (a[0] - c[0]) * point[1];
    var t = a[0] * b[1] - a[1] * b[0] + (a[1] - b[1]) * point[0] + (b[0] - a[0]) * point[1];
    if (s < 0 != t < 0) return false;
    var A = -b[1] * c[0] + a[1] * (c[0] - b[0]) + a[0] * (b[1] - c[1]) + b[0] * c[1];
    if (A < 0.0) {
        s = -s;
        t = -t;
        A = -A;
    }
    return s > 0 && t > 0 && s + t < A;
};
// determine if a point is inside a layer quad.
const pointInLayer = (point, layer)=>{
    if (!layer) return false;
    const [t1, t2, t3, t4] = layer.targetPoints;
    if (!t1 || !t2 || !t3 || !t4) return false;
    return pointInTriangle(point, t1, t2, t3) || pointInTriangle(point, t4, t1, t3);
};
class Maptastic {
    constructor(config){
        this.showLayerNames = true;
        this.showCrosshairs = false;
        this.showScreenBounds = false;
        this.autoSave = true;
        this.autoLoad = true;
        this.layoutChangeListener = ()=>{};
        this.localStorageKey = "maptastic.layers";
        this.layerList = [];
        this.layers = [];
        this.mouseMove = (event)=>{
            if (!this.configActive || !this.canvas) return;
            event.preventDefault();
            const [mouseX, mouseY] = this.mousePosition ?? [
                0,
                0
            ];
            const mouseDelta = [
                event.clientX - mouseX,
                event.clientY - mouseY
            ];
            this.mousePosition = [
                event.clientX,
                event.clientY
            ];
            if (this.dragging) {
                const scale = event.shiftKey ? 0.1 : 1;
                if (this.selectedPoint) {
                    this.selectedPoint[0] += mouseDelta[0] * scale;
                    this.selectedPoint[1] += mouseDelta[1] * scale;
                } else if (this.selectedLayer) {
                    // Alt-drag to rotate and scale
                    if (event.altKey && event.shiftKey) this.rotateLayer(this.selectedLayer, mouseDelta[0] * (0.01 * scale));
                    else if (event.altKey) this.scaleLayer(this.selectedLayer, mouseDelta[1] * (-0.005 * scale) + 1.0);
                    else this.selectedLayer.targetPoints = this.selectedLayer.targetPoints.map(([x, y], i)=>{
                        return [
                            x + mouseDelta[0] * scale,
                            y + mouseDelta[1] * scale
                        ];
                    });
                }
                this.updateTransform();
                if (this.autoSave) this.saveSettings();
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
                this.layers.forEach((layer)=>{});
                for(var i = 0; i < this.layers.length; i++){
                    const layer = this.layers[i];
                    if (!layer) continue;
                    if (layer.visible) for(var p = 0; p < layer.targetPoints.length; p++){
                        const point = layer.targetPoints[p];
                        if (!point) continue;
                        if (distanceTo(point[0], point[1], mouseX, mouseY) < this.selectionRadius) {
                            this.canvas.style.cursor = "pointer";
                            this.hoveringPoint = point;
                            break;
                        }
                    }
                }
                this.hoveringLayer = null;
                for(var i = 0; i < this.layers.length; i++){
                    const layer = this.layers[i];
                    if (layer && layer.visible && pointInLayer(this.mousePosition, layer)) {
                        this.hoveringLayer = layer;
                        break;
                    }
                }
                if (this.showCrosshairs || previousState != (this.hoveringPoint != null) || previousLayer != (this.hoveringLayer != null)) this.draw();
            }
        };
        this.mouseUp = (event)=>{
            if (!this.configActive) return;
            event.preventDefault();
            this.dragging = false;
        };
        this.mouseDown = (event)=>{
            if (!this.configActive || this.showScreenBounds) return;
            event.preventDefault();
            this.hoveringPoint = null;
            if (this.hoveringLayer) {
                this.selectedLayer = this.hoveringLayer;
                this.dragging = true;
            } else this.selectedLayer = null;
            this.selectedPoint = null;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            this.mouseDownPoint = [
                mouseX,
                mouseY
            ];
            for(let i = 0; i < this.layers.length; i++){
                const layer = this.layers[i];
                if (!layer) continue;
                for(let p = 0; p < layer.targetPoints.length; p++){
                    const point = layer.targetPoints[p];
                    if (!point) continue;
                    if (distanceTo(point[0], point[1], mouseX, mouseY) < this.selectionRadius) {
                        this.selectedLayer = layer;
                        this.selectedPoint = point;
                        this.dragging = true;
                        this.dragOffset = [
                            event.clientX - point[0],
                            event.clientY - point[1]
                        ];
                        break;
                    }
                }
            }
            this.draw();
            return false;
        };
        this.keyDown = (event)=>{
            if (!this.configActive) {
                if (event.key === " " && event.shiftKey) {
                    this.setConfigEnabled(true);
                    return;
                } else return;
            }
            var increment = event.shiftKey ? 10 : 1;
            var dirty = false;
            const delta = [
                0,
                0
            ];
            (0, _tsPattern.match)(event).with({
                key: " ",
                shiftKey: true
            }, ()=>{
                this.setConfigEnabled(false);
            }).with({
                key: (0, _tsKeyEnum.Key).ArrowLeft
            }, ()=>{
                delta[0] -= increment;
            }).with({
                key: (0, _tsKeyEnum.Key).ArrowUp
            }, ()=>{
                delta[1] -= increment;
            }).with({
                key: (0, _tsKeyEnum.Key).ArrowRight
            }, ()=>{
                delta[0] += increment;
            }).with({
                key: (0, _tsKeyEnum.Key).ArrowDown
            }, ()=>{
                delta[1] += increment;
            }).with({
                key: "c"
            }, ()=>{
                this.showCrosshairs = !this.showCrosshairs;
                dirty = true;
            }).with({
                key: "s"
            }, ()=>{
                if (!this.isLayerSoloed) {
                    if (this.selectedLayer !== null) {
                        this.layers = this.layers.map((layer)=>{
                            if (layer.id === this.selectedLayer?.id) return {
                                ...layer,
                                visible: true
                            };
                            return {
                                ...layer,
                                visible: false
                            };
                        });
                        this.selectedLayer.visible = true;
                        dirty = true;
                        this.isLayerSoloed = true;
                    }
                } else {
                    this.layers = this.layers.map((layer)=>{
                        return {
                            ...layer,
                            visible: true
                        };
                    });
                    this.isLayerSoloed = false;
                    dirty = true;
                }
            }).with({
                key: "b"
            }, ()=>{
                this.showScreenBounds = !this.showScreenBounds;
                this.draw();
            }).with({
                key: "h"
            }, ()=>{
                if (this.selectedLayer) {
                    this.swapLayerPoints(this.selectedLayer.sourcePoints, 0, 1);
                    this.swapLayerPoints(this.selectedLayer.sourcePoints, 3, 2);
                    this.updateTransform();
                    this.draw();
                }
            }).with({
                key: "v"
            }, ()=>{
                if (this.selectedLayer) {
                    this.swapLayerPoints(this.selectedLayer.sourcePoints, 0, 3);
                    this.swapLayerPoints(this.selectedLayer.sourcePoints, 1, 2);
                    this.updateTransform();
                    this.draw();
                }
            }).with({
                key: "r"
            }, ()=>{
                if (this.selectedLayer) {
                    this.rotateLayer(this.selectedLayer, Math.PI / 2);
                    //rotateLayer(selectedLayer, 0.002);
                    this.updateTransform();
                    this.draw();
                }
            }).otherwise(({ key })=>{
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
                    } else this.selectedLayer = {
                        ...this.selectedLayer,
                        targetPoints: this.selectedLayer.targetPoints.map(([x, y])=>{
                            return [
                                x + delta[0],
                                y + delta[1]
                            ];
                        })
                    };
                    dirty = true;
                }
            }
            // update the transform and redraw if needed
            if (dirty) {
                this.updateTransform();
                this.draw();
                if (this.autoSave) this.saveSettings();
                this.notifyChangeListener();
            }
        };
        if (typeof config === "object" && !(config instanceof HTMLElement)) {
            this.showLayerNames = config.labels ?? true;
            this.showCrosshairs = config.crosshairs ?? false;
            this.showScreenBounds = config.screenbounds ?? false;
            this.autoSave = config.autoSave ?? true;
            this.autoLoad = config.autoLoad ?? true;
            this.layerList = config.layers ?? [];
            this.layoutChangeListener = config.onChange ?? (()=>{});
            this.localStorageKey = config.localStorageKey ?? "maptastic.layers";
        } else this.layerList = [
            config
        ];
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
        this.layerList.forEach((layer)=>{
            this.addLayer(layer);
        });
        if (this.autoLoad) this.loadSettings();
    }
    notifyChangeListener() {
        this.layoutChangeListener();
    }
    draw() {
        if (!this.configActive || !this.canvas || !this.context) return;
        const { canvas, context } = this;
        context.strokeStyle = "red";
        context.lineWidth = 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.layers.forEach((layer)=>{
            if (layer.visible) {
                layer.element.style.visibility = "visible";
                // Draw layer rectangles.
                context.beginPath();
                if (layer.id === this.hoveringLayer?.id) context.strokeStyle = "red";
                else if (layer.id === this.selectedLayer?.id) context.strokeStyle = "blue";
                else context.strokeStyle = "white";
                if (!layer.targetPoints[0] || !layer.targetPoints[3]) return;
                const [x, y] = layer.targetPoints[0];
                context.moveTo(x, y);
                layer.targetPoints.forEach(([x, y])=>{
                    context.lineTo(x, y);
                });
                context.lineTo(layer.targetPoints[3][0], layer.targetPoints[3][1]);
                context.closePath();
                context.stroke();
                // Draw corner points.
                let centerPoint = [
                    0,
                    0
                ];
                layer.targetPoints.forEach((point)=>{
                    if (point === this.hoveringPoint) context.strokeStyle = "red";
                    else if (point === this.selectedPoint) context.strokeStyle = "blue";
                    else context.strokeStyle = "white";
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
                    const size = [
                        metrics.width + 8,
                        32
                    ];
                    context.fillStyle = "white";
                    context.fillRect(centerPoint[0] - size[0] / 2, centerPoint[1] - size[1] + 8, size[0], size[1]);
                    context.fillStyle = "black";
                    context.fillText(label, centerPoint[0], centerPoint[1]);
                }
            } else layer.element.style.visibility = "hidden";
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
            for(let i = 0; i < 10; i++){
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
            context.fillRect(stepX * 2 + 2, stepY * 3 + 2, canvas.width - stepX * 4 - 4, canvas.height - stepY * 6 - 4);
            context.fillStyle = "white";
            context.fillText(canvas.width + " x " + canvas.height, canvas.width / 2, canvas.height / 2 + fontSize * 0.75);
            context.fillText("display size", canvas.width / 2, canvas.height / 2 - fontSize * 0.75);
        }
        this.context = context;
    }
    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.draw();
    }
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
        this.layers.forEach((layer, l)=>{
            let a = [];
            let b = [];
            for(let i = 0, n = layer.sourcePoints.length; i < n; ++i){
                var s = layer.sourcePoints[i], t = layer.targetPoints[i];
                if (!s || !t) continue;
                a.push([
                    s[0],
                    s[1],
                    1,
                    0,
                    0,
                    0,
                    -s[0] * t[0],
                    -s[1] * t[0]
                ]);
                b.push(t[0]);
                a.push([
                    0,
                    0,
                    0,
                    s[0],
                    s[1],
                    1,
                    -s[0] * t[1],
                    -s[1] * t[1]
                ]);
                b.push(t[1]);
            }
            const X = (0, _numericDefault.default).solve(a, b);
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
                1
            ];
            console.log(matrix);
            if (this.layers[l]) {
                this.layers[l].element.style.setProperty("transform", `matrix3d(${matrix.join(",")})`);
                this.layers[l].element.style.setProperty("transform-origin", "0px 0px 0px");
                this.layers[l].element.style.setProperty("transform-style", "preserve-3d");
            }
        });
    }
    swapLayerPoints(layerPoints, index1, index2) {
        const firstPoint = layerPoints[index1];
        const secondPoint = layerPoints[index1];
        if (!firstPoint || !secondPoint) return;
        const tx = firstPoint[0];
        const ty = firstPoint[1];
        if (layerPoints[index1] && layerPoints[index2]) {
            layerPoints[index1] = [
                ...layerPoints[index2]
            ];
            layerPoints[index2] = [
                tx,
                ty
            ];
        }
    }
    rotateLayer(layer, angle) {
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        let centerPoint = [
            0,
            0
        ];
        layer.targetPoints.forEach(([x, y])=>{
            centerPoint[0] += x;
            centerPoint[1] += y;
        });
        centerPoint[0] /= 4;
        centerPoint[1] /= 4;
        layer.targetPoints.forEach(([x, y], p)=>{
            var px = x - centerPoint[0];
            var py = y - centerPoint[1];
            if (layer.targetPoints[p]) {
                layer.targetPoints[p][0] = px * c - py * s + centerPoint[0];
                layer.targetPoints[p][1] = px * s + py * c + centerPoint[1];
            }
        });
    }
    scaleLayer(layer, scale) {
        let centerPoint = [
            0,
            0
        ];
        layer.targetPoints.forEach(([x, y])=>{
            centerPoint[0] += x;
            centerPoint[1] += y;
        });
        centerPoint[0] /= 4;
        centerPoint[1] /= 4;
        layer.targetPoints.forEach(([x, y], p)=>{
            var px = x - centerPoint[0];
            var py = y - centerPoint[1];
            if (layer.targetPoints[p]) {
                layer.targetPoints[p][0] = px * scale + centerPoint[0];
                layer.targetPoints[p][1] = py * scale + centerPoint[1];
            }
        });
    }
    addLayer(target, targetPoints) {
        let element = null;
        if (typeof target == "string") {
            element = document.getElementById(target);
            if (!element) throw "Maptastic: No element found with id: " + target;
        } else if (target instanceof HTMLElement) element = target;
        if (!element) throw "Maptastic: No element provided";
        var exists = false;
        this.layers.forEach((layer, n)=>{
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
        const layer = {
            id: element.id,
            visible: true,
            element: element,
            width: element.clientWidth,
            height: element.clientHeight,
            sourcePoints: [],
            targetPoints: []
        };
        layer.sourcePoints.push([
            0,
            0
        ], [
            layer.width,
            0
        ], [
            layer.width,
            layer.height
        ], [
            0,
            layer.height
        ]);
        if (targetPoints) layer.targetPoints = clonePoints(targetPoints);
        else {
            layer.targetPoints.push([
                0,
                0
            ], [
                layer.width,
                0
            ], [
                layer.width,
                layer.height
            ], [
                0,
                layer.height
            ]);
            layer.targetPoints = layer.targetPoints.map(([x, y])=>{
                return [
                    x + offsetX,
                    y + offsetY
                ];
            });
        }
        this.layers.push(layer);
        this.updateTransform();
    }
    getLayout(layers) {
        return layers.map((layer)=>{
            return {
                id: layer.element.id,
                targetPoints: clonePoints(layer.targetPoints),
                sourcePoints: clonePoints(layer.sourcePoints),
                element: layer.element
            };
        });
    }
    setLayout(layout) {
        layout.forEach((layoutLayer)=>{
            var exists = false;
            for(var n = 0; n < this.layers.length; n++){
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
                if (element) this.addLayer(element, layoutLayer.targetPoints);
                else console.log("Maptastic: Can't find element: " + layoutLayer.id);
            } else console.log("Maptastic: Element '" + layoutLayer.id + "' is already mapped.");
        });
        this.updateTransform();
        this.draw();
    }
    setConfigEnabled(enabled) {
        this.configActive = enabled;
        if (this.canvas) this.canvas.style.display = enabled ? "block" : "none";
        if (!enabled) {
            this.selectedPoint = null;
            this.selectedLayer = null;
            this.dragging = false;
            this.showScreenBounds = false;
        } else this.draw();
    }
    saveSettings() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.getLayout(this.layers)));
    }
    clearSettings() {
        localStorage.removeItem(this.localStorageKey);
    }
    loadSettings() {
        const storedData = localStorage.getItem(this.localStorageKey);
        if (storedData) {
            const data = JSON.parse(storedData);
            for(var i = 0; i < data.length; i++)for(var n = 0; n < this.layers.length; n++){
                const layer = this.layers[n];
                if (!layer) continue;
                if (layer.element.id == data[i].id) {
                    layer.targetPoints = clonePoints(data[i].targetPoints);
                    layer.sourcePoints = clonePoints(data[i].sourcePoints);
                }
                this.layers[n] = layer;
            }
            this.updateTransform();
        }
    }
}
exports.default = Maptastic;

},{"ts-pattern":"9WK0G","ts-key-enum":"2o2Xo","numeric":"kNYK8","@parcel/transformer-js/src/esmodule-helpers.js":"erqMY"}],"9WK0G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NonExhaustiveError", ()=>W);
parcelHelpers.export(exports, "P", ()=>N);
parcelHelpers.export(exports, "Pattern", ()=>N);
parcelHelpers.export(exports, "isMatching", ()=>a);
parcelHelpers.export(exports, "match", ()=>z);
const t = Symbol.for("@ts-pattern/matcher"), e = Symbol.for("@ts-pattern/isVariadic"), n = "@ts-pattern/anonymous-select-key", r = (t)=>Boolean(t && "object" == typeof t), i = (e)=>e && !!e[t], o = (n, s, c)=>{
    if (i(n)) {
        const e = n[t](), { matched: r, selections: i } = e.match(s);
        return r && i && Object.keys(i).forEach((t)=>c(t, i[t])), r;
    }
    if (r(n)) {
        if (!r(s)) return !1;
        if (Array.isArray(n)) {
            if (!Array.isArray(s)) return !1;
            let t = [], r = [], a = [];
            for (const o of n.keys()){
                const s = n[o];
                i(s) && s[e] ? a.push(s) : a.length ? r.push(s) : t.push(s);
            }
            if (a.length) {
                if (a.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                if (s.length < t.length + r.length) return !1;
                const e = s.slice(0, t.length), n = 0 === r.length ? [] : s.slice(-r.length), i = s.slice(t.length, 0 === r.length ? Infinity : -r.length);
                return t.every((t, n)=>o(t, e[n], c)) && r.every((t, e)=>o(t, n[e], c)) && (0 === a.length || o(a[0], i, c));
            }
            return n.length === s.length && n.every((t, e)=>o(t, s[e], c));
        }
        return Reflect.ownKeys(n).every((e)=>{
            const r = n[e];
            var a;
            return (e in s || i(a = r) && "optional" === a[t]().matcherType) && o(r, s[e], c);
        });
    }
    return Object.is(s, n);
}, s = (e)=>{
    var n, o, a;
    return r(e) ? i(e) ? null != (n = null == (o = (a = e[t]()).getSelectionKeys) ? void 0 : o.call(a)) ? n : [] : Array.isArray(e) ? c(e, s) : c(Object.values(e), s) : [];
}, c = (t, e)=>t.reduce((t, n)=>t.concat(e(n)), []);
function a(...t) {
    if (1 === t.length) {
        const [e] = t;
        return (t)=>o(e, t, ()=>{});
    }
    if (2 === t.length) {
        const [e, n] = t;
        return o(e, n, ()=>{});
    }
    throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${t.length}.`);
}
function u(t) {
    return Object.assign(t, {
        optional: ()=>l(t),
        and: (e)=>m(t, e),
        or: (e)=>d(t, e),
        select: (e)=>void 0 === e ? y(t) : y(e, t)
    });
}
function h(t) {
    return Object.assign(((t)=>Object.assign(t, {
            [Symbol.iterator] () {
                let n = 0;
                const r = [
                    {
                        value: Object.assign(t, {
                            [e]: !0
                        }),
                        done: !1
                    },
                    {
                        done: !0,
                        value: void 0
                    }
                ];
                return {
                    next: ()=>{
                        var t;
                        return null != (t = r[n++]) ? t : r.at(-1);
                    }
                };
            }
        }))(t), {
        optional: ()=>h(l(t)),
        select: (e)=>h(void 0 === e ? y(t) : y(e, t))
    });
}
function l(e) {
    return u({
        [t]: ()=>({
                match: (t)=>{
                    let n = {};
                    const r = (t, e)=>{
                        n[t] = e;
                    };
                    return void 0 === t ? (s(e).forEach((t)=>r(t, void 0)), {
                        matched: !0,
                        selections: n
                    }) : {
                        matched: o(e, t, r),
                        selections: n
                    };
                },
                getSelectionKeys: ()=>s(e),
                matcherType: "optional"
            })
    });
}
const f = (t, e)=>{
    for (const n of t)if (!e(n)) return !1;
    return !0;
}, g = (t, e)=>{
    for (const [n, r] of t.entries())if (!e(r, n)) return !1;
    return !0;
};
function m(...e) {
    return u({
        [t]: ()=>({
                match: (t)=>{
                    let n = {};
                    const r = (t, e)=>{
                        n[t] = e;
                    };
                    return {
                        matched: e.every((e)=>o(e, t, r)),
                        selections: n
                    };
                },
                getSelectionKeys: ()=>c(e, s),
                matcherType: "and"
            })
    });
}
function d(...e) {
    return u({
        [t]: ()=>({
                match: (t)=>{
                    let n = {};
                    const r = (t, e)=>{
                        n[t] = e;
                    };
                    return c(e, s).forEach((t)=>r(t, void 0)), {
                        matched: e.some((e)=>o(e, t, r)),
                        selections: n
                    };
                },
                getSelectionKeys: ()=>c(e, s),
                matcherType: "or"
            })
    });
}
function p(e) {
    return {
        [t]: ()=>({
                match: (t)=>({
                        matched: Boolean(e(t))
                    })
            })
    };
}
function y(...e) {
    const r = "string" == typeof e[0] ? e[0] : void 0, i = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
    return u({
        [t]: ()=>({
                match: (t)=>{
                    let e = {
                        [null != r ? r : n]: t
                    };
                    return {
                        matched: void 0 === i || o(i, t, (t, n)=>{
                            e[t] = n;
                        }),
                        selections: e
                    };
                },
                getSelectionKeys: ()=>[
                        null != r ? r : n
                    ].concat(void 0 === i ? [] : s(i))
            })
    });
}
function v(t) {
    return "number" == typeof t;
}
function b(t) {
    return "string" == typeof t;
}
function w(t) {
    return "bigint" == typeof t;
}
const S = u(p(function(t) {
    return !0;
})), O = S, j = (t)=>Object.assign(u(t), {
        startsWith: (e)=>{
            var n;
            return j(m(t, (n = e, p((t)=>b(t) && t.startsWith(n)))));
        },
        endsWith: (e)=>{
            var n;
            return j(m(t, (n = e, p((t)=>b(t) && t.endsWith(n)))));
        },
        minLength: (e)=>j(m(t, ((t)=>p((e)=>b(e) && e.length >= t))(e))),
        length: (e)=>j(m(t, ((t)=>p((e)=>b(e) && e.length === t))(e))),
        maxLength: (e)=>j(m(t, ((t)=>p((e)=>b(e) && e.length <= t))(e))),
        includes: (e)=>{
            var n;
            return j(m(t, (n = e, p((t)=>b(t) && t.includes(n)))));
        },
        regex: (e)=>{
            var n;
            return j(m(t, (n = e, p((t)=>b(t) && Boolean(t.match(n))))));
        }
    }), K = j(p(b)), x = (t)=>Object.assign(u(t), {
        between: (e, n)=>x(m(t, ((t, e)=>p((n)=>v(n) && t <= n && e >= n))(e, n))),
        lt: (e)=>x(m(t, ((t)=>p((e)=>v(e) && e < t))(e))),
        gt: (e)=>x(m(t, ((t)=>p((e)=>v(e) && e > t))(e))),
        lte: (e)=>x(m(t, ((t)=>p((e)=>v(e) && e <= t))(e))),
        gte: (e)=>x(m(t, ((t)=>p((e)=>v(e) && e >= t))(e))),
        int: ()=>x(m(t, p((t)=>v(t) && Number.isInteger(t)))),
        finite: ()=>x(m(t, p((t)=>v(t) && Number.isFinite(t)))),
        positive: ()=>x(m(t, p((t)=>v(t) && t > 0))),
        negative: ()=>x(m(t, p((t)=>v(t) && t < 0)))
    }), E = x(p(v)), A = (t)=>Object.assign(u(t), {
        between: (e, n)=>A(m(t, ((t, e)=>p((n)=>w(n) && t <= n && e >= n))(e, n))),
        lt: (e)=>A(m(t, ((t)=>p((e)=>w(e) && e < t))(e))),
        gt: (e)=>A(m(t, ((t)=>p((e)=>w(e) && e > t))(e))),
        lte: (e)=>A(m(t, ((t)=>p((e)=>w(e) && e <= t))(e))),
        gte: (e)=>A(m(t, ((t)=>p((e)=>w(e) && e >= t))(e))),
        positive: ()=>A(m(t, p((t)=>w(t) && t > 0))),
        negative: ()=>A(m(t, p((t)=>w(t) && t < 0)))
    }), P = A(p(w)), T = u(p(function(t) {
    return "boolean" == typeof t;
})), B = u(p(function(t) {
    return "symbol" == typeof t;
})), _ = u(p(function(t) {
    return null == t;
})), k = u(p(function(t) {
    return null != t;
}));
var N = {
    __proto__: null,
    matcher: t,
    optional: l,
    array: function(...e) {
        return h({
            [t]: ()=>({
                    match: (t)=>{
                        if (!Array.isArray(t)) return {
                            matched: !1
                        };
                        if (0 === e.length) return {
                            matched: !0
                        };
                        const n = e[0];
                        let r = {};
                        if (0 === t.length) return s(n).forEach((t)=>{
                            r[t] = [];
                        }), {
                            matched: !0,
                            selections: r
                        };
                        const i = (t, e)=>{
                            r[t] = (r[t] || []).concat([
                                e
                            ]);
                        };
                        return {
                            matched: t.every((t)=>o(n, t, i)),
                            selections: r
                        };
                    },
                    getSelectionKeys: ()=>0 === e.length ? [] : s(e[0])
                })
        });
    },
    set: function(...e) {
        return u({
            [t]: ()=>({
                    match: (t)=>{
                        if (!(t instanceof Set)) return {
                            matched: !1
                        };
                        let n = {};
                        if (0 === t.size) return {
                            matched: !0,
                            selections: n
                        };
                        if (0 === e.length) return {
                            matched: !0
                        };
                        const r = (t, e)=>{
                            n[t] = (n[t] || []).concat([
                                e
                            ]);
                        }, i = e[0];
                        return {
                            matched: f(t, (t)=>o(i, t, r)),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>0 === e.length ? [] : s(e[0])
                })
        });
    },
    map: function(...e) {
        return u({
            [t]: ()=>({
                    match: (t)=>{
                        if (!(t instanceof Map)) return {
                            matched: !1
                        };
                        let n = {};
                        if (0 === t.size) return {
                            matched: !0,
                            selections: n
                        };
                        const r = (t, e)=>{
                            n[t] = (n[t] || []).concat([
                                e
                            ]);
                        };
                        if (0 === e.length) return {
                            matched: !0
                        };
                        var i;
                        if (1 === e.length) throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == (i = e[0]) ? void 0 : i.toString()}`);
                        const [s, c] = e;
                        return {
                            matched: g(t, (t, e)=>{
                                const n = o(s, e, r), i = o(c, t, r);
                                return n && i;
                            }),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>0 === e.length ? [] : [
                            ...s(e[0]),
                            ...s(e[1])
                        ]
                })
        });
    },
    intersection: m,
    union: d,
    not: function(e) {
        return u({
            [t]: ()=>({
                    match: (t)=>({
                            matched: !o(e, t, ()=>{})
                        }),
                    getSelectionKeys: ()=>[],
                    matcherType: "not"
                })
        });
    },
    when: p,
    select: y,
    any: S,
    _: O,
    string: K,
    number: E,
    bigint: P,
    boolean: T,
    symbol: B,
    nullish: _,
    nonNullable: k,
    instanceOf: function(t) {
        return u(p(function(t) {
            return (e)=>e instanceof t;
        }(t)));
    },
    shape: function(t) {
        return u(p(a(t)));
    }
};
class W extends Error {
    constructor(t){
        let e;
        try {
            e = JSON.stringify(t);
        } catch (n) {
            e = t;
        }
        super(`Pattern matching error: no pattern matches value ${e}`), this.input = void 0, this.input = t;
    }
}
const $ = {
    matched: !1,
    value: void 0
};
function z(t) {
    return new I(t, $);
}
class I {
    constructor(t, e){
        this.input = void 0, this.state = void 0, this.input = t, this.state = e;
    }
    with(...t) {
        if (this.state.matched) return this;
        const e = t[t.length - 1], r = [
            t[0]
        ];
        let i;
        3 === t.length && "function" == typeof t[1] ? i = t[1] : t.length > 2 && r.push(...t.slice(1, t.length - 1));
        let s = !1, c = {};
        const a = (t, e)=>{
            s = !0, c[t] = e;
        }, u = !r.some((t)=>o(t, this.input, a)) || i && !Boolean(i(this.input)) ? $ : {
            matched: !0,
            value: e(s ? n in c ? c[n] : c : this.input, this.input)
        };
        return new I(this.input, u);
    }
    when(t, e) {
        if (this.state.matched) return this;
        const n = Boolean(t(this.input));
        return new I(this.input, n ? {
            matched: !0,
            value: e(this.input, this.input)
        } : $);
    }
    otherwise(t) {
        return this.state.matched ? this.state.value : t(this.input);
    }
    exhaustive(t = L) {
        return this.state.matched ? this.state.value : t(this.input);
    }
    run() {
        return this.exhaustive();
    }
    returnType() {
        return this;
    }
    narrow() {
        return this;
    }
}
function L(t) {
    throw new W(t);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"erqMY"}],"2o2Xo":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * An enum that includes all non-printable string values one can expect from $event.key.
 * For example, this enum includes values like "CapsLock", "Backspace", and "AudioVolumeMute",
 * but does not include values like "a", "A", "#", "é", or "¿".
 * Auto generated from MDN: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Speech_recognition_keys
 */ var Key;
(function(Key) {
    /**
     * The user agent wasn't able to map the event's virtual keycode to a
     * specific key value.
     * This can happen due to hardware or software constraints, or because of
     * constraints around the platform on which the user agent is running.
     */ Key["Unidentified"] = "Unidentified";
    /** The Alt (Alternative) key. */ Key["Alt"] = "Alt";
    /**
     * The AltGr or AltGraph (Alternate Graphics) key.
     * Enables the ISO Level 3 shift modifier (where Shift is the
     * level 2 modifier).
     */ Key["AltGraph"] = "AltGraph";
    /**
     * The Caps Lock key. Toggles the capital character lock on and
     * off for subsequent input.
     */ Key["CapsLock"] = "CapsLock";
    /**
     * The Control, Ctrl, or Ctl key. Allows
     * typing control characters.
     */ Key["Control"] = "Control";
    /**
     * The Fn (Function modifier) key. Used to allow generating
     * function key (F1–F15, for instance) characters on
     * keyboards without a dedicated function key area. Often handled in
     * hardware so that events aren't generated for this key.
     */ Key["Fn"] = "Fn";
    /**
     * The FnLock or F-Lock (Function Lock) key.Toggles
     * the function key mode described by "Fn" on and off. Often
     * handled in hardware so that events aren't generated for this key.
     */ Key["FnLock"] = "FnLock";
    /** The Hyper key. */ Key["Hyper"] = "Hyper";
    /**
     * The Meta key. Allows issuing special command inputs. This is
     * the Windows logo key, or the Command or
     * ⌘ key on Mac keyboards.
     */ Key["Meta"] = "Meta";
    /**
     * The NumLock (Number Lock) key. Toggles the numeric keypad
     * between number entry some other mode (often directional arrows).
     */ Key["NumLock"] = "NumLock";
    /**
     * The Scroll Lock key. Toggles between scrolling and cursor
     * movement modes.
     */ Key["ScrollLock"] = "ScrollLock";
    /**
     * The Shift key. Modifies keystrokes to allow typing upper (or
     * other) case letters, and to support typing punctuation and other special
     * characters.
     */ Key["Shift"] = "Shift";
    /** The Super key. */ Key["Super"] = "Super";
    /** The Symbol modifier key (found on certain virtual keyboards). */ Key["Symbol"] = "Symbol";
    /** The Symbol Lock key. */ Key["SymbolLock"] = "SymbolLock";
    /**
     * The Enter or ↵ key (sometimes labeled
     * Return).
     */ Key["Enter"] = "Enter";
    /** The Horizontal Tab key, Tab. */ Key["Tab"] = "Tab";
    /** The down arrow key. */ Key["ArrowDown"] = "ArrowDown";
    /** The left arrow key. */ Key["ArrowLeft"] = "ArrowLeft";
    /** The right arrow key. */ Key["ArrowRight"] = "ArrowRight";
    /** The up arrow key. */ Key["ArrowUp"] = "ArrowUp";
    /** The End key. Moves to the end of content. */ Key["End"] = "End";
    /** The Home key. Moves to the start of content. */ Key["Home"] = "Home";
    /**
     * The Page Down (or PgDn) key. Scrolls down or
     * displays the next page of content.
     */ Key["PageDown"] = "PageDown";
    /**
     * The Page Up (or PgUp) key. Scrolls up or displays
     * the previous page of content.
     */ Key["PageUp"] = "PageUp";
    /**
     * The Backspace key. This key is labeled Delete on
     * Mac keyboards.
     */ Key["Backspace"] = "Backspace";
    /** The Clear key. Removes the currently selected input. */ Key["Clear"] = "Clear";
    /** The Copy key (on certain extended keyboards). */ Key["Copy"] = "Copy";
    /** The Cursor Select key, CrSel. */ Key["CrSel"] = "CrSel";
    /** The Cut key (on certain extended keyboards). */ Key["Cut"] = "Cut";
    /** The Delete key, Del. */ Key["Delete"] = "Delete";
    /**
     * Erase to End of Field. Deletes all characters from the current cursor
     * position to the end of the current field.
     */ Key["EraseEof"] = "EraseEof";
    /** The ExSel (Extend Selection) key. */ Key["ExSel"] = "ExSel";
    /**
     * The Insert key, Ins. Toggles between inserting and
     * overwriting text.
     */ Key["Insert"] = "Insert";
    /** Paste from the clipboard. */ Key["Paste"] = "Paste";
    /** Redo the last action. */ Key["Redo"] = "Redo";
    /** Undo the last action. */ Key["Undo"] = "Undo";
    /**
     * The Accept, Commit, or OK key or
     * button. Accepts the currently selected option or input method sequence
     * conversion.
     */ Key["Accept"] = "Accept";
    /** The Again key. Redoes or repeats a previous action. */ Key["Again"] = "Again";
    /** The Attn (Attention) key. */ Key["Attn"] = "Attn";
    /** The Cancel key. */ Key["Cancel"] = "Cancel";
    /**
     * Shows the context menu. Typically found between the
     * Windows (or OS) key and the Control key
     * on the right side of the keyboard.
     */ Key["ContextMenu"] = "ContextMenu";
    /**
     * The Esc (Escape) key. Typically used as an exit, cancel, or
     * "escape this operation" button. Historically, the Escape character was
     * used to signal the start of a special control sequence of characters
     * called an "escape sequence."
     */ Key["Escape"] = "Escape";
    /** The Execute key. */ Key["Execute"] = "Execute";
    /**
     * The Find key. Opens an interface (typically a dialog box) for
     * performing a find/search operation.
     */ Key["Find"] = "Find";
    /** The Finish key. */ Key["Finish"] = "Finish";
    /**
     * The Help key. Opens or toggles the display of help
     * information.
     */ Key["Help"] = "Help";
    /**
     * The Pause key. Pauses the current application or state, if
     * applicable.
     * Note: This shouldn't be confused with the
     * "MediaPause" key value, which is used for media
     * controllers, rather than to control applications and processes.
     */ Key["Pause"] = "Pause";
    /**
     * The Play key. Resumes a previously paused application, if
     * applicable.
     * Note: This shouldn't be confused with the
     * "MediaPlay" key value, which is used for media
     * controllers, rather than to control applications and processes.
     */ Key["Play"] = "Play";
    /** The Props (Properties) key. */ Key["Props"] = "Props";
    /** The Select key. */ Key["Select"] = "Select";
    /** The ZoomIn key. */ Key["ZoomIn"] = "ZoomIn";
    /** The ZoomOut key. */ Key["ZoomOut"] = "ZoomOut";
    /**
     * The Brightness Down key. Typically used to reduce the brightness of the
     * display.
     */ Key["BrightnessDown"] = "BrightnessDown";
    /**
     * The Brightness Up key. Typically increases the brightness of the
     * display.
     */ Key["BrightnessUp"] = "BrightnessUp";
    /**
     * The Eject key. Ejects removable media (or toggles an optical
     * storage device tray open and closed).
     */ Key["Eject"] = "Eject";
    /** The LogOff key. */ Key["LogOff"] = "LogOff";
    /**
     * The Power button or key, to toggle power on and off.
     * Note: Not all systems pass this key through to the
     * user agent.
     */ Key["Power"] = "Power";
    /**
     * The PowerOff or PowerDown key. Shuts off the
     * system.
     */ Key["PowerOff"] = "PowerOff";
    /**
     * The PrintScreen or PrtScr key. Sometimes
     * SnapShot. Captures the screen and prints it or saves it to
     * disk.
     */ Key["PrintScreen"] = "PrintScreen";
    /**
     * The Hibernate key. This saves the state of the computer to
     * disk and then shuts down; the computer can be returned to its previous
     * state by restoring the saved state information.
     */ Key["Hibernate"] = "Hibernate";
    /**
     * The Standby key. (Also known as Suspend or
     * Sleep.) This turns off the display and puts the computer in a
     * low power consumption mode, without completely powering off.
     */ Key["Standby"] = "Standby";
    /**
     * The WakeUp key. Used to wake the computer from the
     * hibernation or standby modes.
     */ Key["WakeUp"] = "WakeUp";
    /**
     * The All Candidates key, which starts multi-candidate mode, in
     * which multiple candidates are displayed for the ongoing input.
     */ Key["AllCandidates"] = "AllCandidates";
    /** The Alphanumeric key. */ Key["Alphanumeric"] = "Alphanumeric";
    /**
     * The Code Input key, which enables code input mode, which lets
     * the user enter characters by typing their code points (their Unicode
     * character numbers, typically).
     */ Key["CodeInput"] = "CodeInput";
    /** The Compose key. */ Key["Compose"] = "Compose";
    /**
     * The Convert key, which instructs the IME to convert the
     * current input method sequence into the resulting character.
     */ Key["Convert"] = "Convert";
    /**
     * A dead "combining" key; that is, a key which is used in tandem with
     * other keys to generate accented and other modified characters. If
     * pressed by itself, it doesn't generate a character.
     * If you wish to identify which specific dead key was pressed (in cases
     * where more than one exists), you can do so by examining the
     * KeyboardEvent's associated
     * compositionupdate event's
     * data property.
     */ Key["Dead"] = "Dead";
    /**
     * The Final (Final Mode) key is used on some Asian keyboards to
     * enter final mode when using IMEs.
     */ Key["FinalMode"] = "FinalMode";
    /**
     * Switches to the first character group on an
     * ISO/IEC 9995 keyboard. Each key may have multiple groups of characters, each in its own
     * column. Pressing this key instructs the device to interpret keypresses
     * as coming from the first column on subsequent keystrokes.
     */ Key["GroupFirst"] = "GroupFirst";
    /**
     * Switches to the last character group on an
     * ISO/IEC 9995 keyboard.
     */ Key["GroupLast"] = "GroupLast";
    /**
     * Switches to the next character group on an
     * ISO/IEC 9995 keyboard.
     */ Key["GroupNext"] = "GroupNext";
    /**
     * Switches to the previous character group on an
     * ISO/IEC 9995 keyboard.
     */ Key["GroupPrevious"] = "GroupPrevious";
    /** The Mode Change key. Toggles or cycles among input modes of IMEs. */ Key["ModeChange"] = "ModeChange";
    /**
     * The Next Candidate function key. Selects the next possible match for the
     * ongoing input.
     */ Key["NextCandidate"] = "NextCandidate";
    /**
     * The NonConvert ("Don't convert") key. This accepts the
     * current input method sequence without running conversion when using an
     * IME.
     */ Key["NonConvert"] = "NonConvert";
    /**
     * The Previous Candidate key. Selects the previous possible match for the
     * ongoing input.
     */ Key["PreviousCandidate"] = "PreviousCandidate";
    /** The Process key. Instructs the IME to process the conversion. */ Key["Process"] = "Process";
    /**
     * The Single Candidate key. Enables single candidate mode (as opposed to
     * multi-candidate mode); in this mode, only one candidate is displayed at
     * a time.
     */ Key["SingleCandidate"] = "SingleCandidate";
    /**
     * The Hangul (Korean character set) mode key, which toggles
     * between Hangul and English entry modes.
     */ Key["HangulMode"] = "HangulMode";
    /**
     * Selects the Hanja mode, for converting Hangul characters to the more
     * specific Hanja characters.
     */ Key["HanjaMode"] = "HanjaMode";
    /**
     * Selects the Junja mode, in which Korean is represented using single-byte
     * Latin characters.
     */ Key["JunjaMode"] = "JunjaMode";
    /**
     * The Eisu key. This key's purpose is defined by the IME, but
     * may be used to close the IME.
     */ Key["Eisu"] = "Eisu";
    /** The Hankaku (half-width characters) key. */ Key["Hankaku"] = "Hankaku";
    /** The Hiragana key; selects Kana characters mode. */ Key["Hiragana"] = "Hiragana";
    /** Toggles between the Hiragana and Katakana writing systems. */ Key["HiraganaKatakana"] = "HiraganaKatakana";
    /** The Kana Mode (Kana Lock) key. */ Key["KanaMode"] = "KanaMode";
    /**
     * The Kanji Mode key. Enables entering Japanese text using the
     * ideographic characters of Chinese origin.
     */ Key["KanjiMode"] = "KanjiMode";
    /** The Katakana key. */ Key["Katakana"] = "Katakana";
    /** The Romaji key; selects the Roman character set. */ Key["Romaji"] = "Romaji";
    /** The Zenkaku (full width) characters key. */ Key["Zenkaku"] = "Zenkaku";
    /** The Zenkaku/Hankaku (full width/half width) toggle key. */ Key["ZenkakuHanaku"] = "ZenkakuHanaku";
    /** The first general-purpose function key, F1. */ Key["F1"] = "F1";
    /** The F2 key. */ Key["F2"] = "F2";
    /** The F3 key. */ Key["F3"] = "F3";
    /** The F4 key. */ Key["F4"] = "F4";
    /** The F5 key. */ Key["F5"] = "F5";
    /** The F6 key. */ Key["F6"] = "F6";
    /** The F7 key. */ Key["F7"] = "F7";
    /** The F8 key. */ Key["F8"] = "F8";
    /** The F9 key. */ Key["F9"] = "F9";
    /** The F10 key. */ Key["F10"] = "F10";
    /** The F11 key. */ Key["F11"] = "F11";
    /** The F12 key. */ Key["F12"] = "F12";
    /** The F13 key. */ Key["F13"] = "F13";
    /** The F14 key. */ Key["F14"] = "F14";
    /** The F15 key. */ Key["F15"] = "F15";
    /** The F16 key. */ Key["F16"] = "F16";
    /** The F17 key. */ Key["F17"] = "F17";
    /** The F18 key. */ Key["F18"] = "F18";
    /** The F19 key. */ Key["F19"] = "F19";
    /** The F20 key. */ Key["F20"] = "F20";
    /** The first general-purpose virtual function key. */ Key["Soft1"] = "Soft1";
    /** The second general-purpose virtual function key. */ Key["Soft2"] = "Soft2";
    /** The third general-purpose virtual function key. */ Key["Soft3"] = "Soft3";
    /** The fourth general-purpose virtual function key. */ Key["Soft4"] = "Soft4";
    /**
     * Presents a list of recently-used applications which lets the user change
     * apps quickly.
     */ Key["AppSwitch"] = "AppSwitch";
    /** The Call key. Dials the number which has been entered. */ Key["Call"] = "Call";
    /** The Camera key. Activates the camera. */ Key["Camera"] = "Camera";
    /** The Focus key. Focuses the camera. */ Key["CameraFocus"] = "CameraFocus";
    /** The End Call or Hang Up button. */ Key["EndCall"] = "EndCall";
    /** The Back button. */ Key["GoBack"] = "GoBack";
    /**
     * The Home button. Returns the user to the phone's main screen
     * (usually an application launcher).
     */ Key["GoHome"] = "GoHome";
    /**
     * The Headset Hook key. This is typically actually a button on
     * the headset which is used to hang up calls and play or pause media.
     */ Key["HeadsetHook"] = "HeadsetHook";
    /** The Redial button. Redials the last-called number. */ Key["LastNumberRedial"] = "LastNumberRedial";
    /** The Notification key. */ Key["Notification"] = "Notification";
    /**
     * A button which cycles among the notification modes: silent, vibrate,
     * ring, and so forth.
     */ Key["MannerMode"] = "MannerMode";
    /** The Voice Dial key. Initiates voice dialing. */ Key["VoiceDial"] = "VoiceDial";
    /** Switches to the previous channel. */ Key["ChannelDown"] = "ChannelDown";
    /** Switches to the next channel. */ Key["ChannelUp"] = "ChannelUp";
    /** Starts, continues, or increases the speed of fast forwarding the media. */ Key["MediaFastForward"] = "MediaFastForward";
    /**
     * Pauses the currently playing media.
     * Note: Some older applications use
     * "Pause", but this is not correct.
     */ Key["MediaPause"] = "MediaPause";
    /**
     * Starts or continues playing media at normal speed, if not already doing
     * so. Has no effect otherwise.
     */ Key["MediaPlay"] = "MediaPlay";
    /** Toggles between playing and pausing the current media. */ Key["MediaPlayPause"] = "MediaPlayPause";
    /** Starts or resumes recording media. */ Key["MediaRecord"] = "MediaRecord";
    /** Starts, continues, or increases the speed of rewinding the media. */ Key["MediaRewind"] = "MediaRewind";
    /**
     * Stops the current media activity (such as playing, recording, pausing,
     * forwarding, or rewinding). Has no effect if the media is currently
     * stopped already.
     */ Key["MediaStop"] = "MediaStop";
    /** Seeks to the next media or program track. */ Key["MediaTrackNext"] = "MediaTrackNext";
    /** Seeks to the previous media or program track. */ Key["MediaTrackPrevious"] = "MediaTrackPrevious";
    /** Adjusts audio balance toward the left. */ Key["AudioBalanceLeft"] = "AudioBalanceLeft";
    /** Adjusts audio balance toward the right. */ Key["AudioBalanceRight"] = "AudioBalanceRight";
    /** Decreases the amount of bass. */ Key["AudioBassDown"] = "AudioBassDown";
    /**
     * Reduces bass boosting or cycles downward through bass boost modes or
     * states.
     */ Key["AudioBassBoostDown"] = "AudioBassBoostDown";
    /** Toggles bass boosting on and off. */ Key["AudioBassBoostToggle"] = "AudioBassBoostToggle";
    /**
     * Increases the amount of bass boosting, or cycles upward through a set of
     * bass boost modes or states.
     */ Key["AudioBassBoostUp"] = "AudioBassBoostUp";
    /** Increases the amount of bass. */ Key["AudioBassUp"] = "AudioBassUp";
    /** Adjusts the audio fader toward the front. */ Key["AudioFaderFront"] = "AudioFaderFront";
    /** Adjusts the audio fader toward the rear. */ Key["AudioFaderRear"] = "AudioFaderRear";
    /** Selects the next available surround sound mode. */ Key["AudioSurroundModeNext"] = "AudioSurroundModeNext";
    /** Decreases the amount of treble. */ Key["AudioTrebleDown"] = "AudioTrebleDown";
    /** Increases the amount of treble. */ Key["AudioTrebleUp"] = "AudioTrebleUp";
    /** Decreases the audio volume. */ Key["AudioVolumeDown"] = "AudioVolumeDown";
    /** Mutes the audio. */ Key["AudioVolumeMute"] = "AudioVolumeMute";
    /** Increases the audio volume. */ Key["AudioVolumeUp"] = "AudioVolumeUp";
    /** Toggles the microphone on and off. */ Key["MicrophoneToggle"] = "MicrophoneToggle";
    /** Decreases the microphone's input volume. */ Key["MicrophoneVolumeDown"] = "MicrophoneVolumeDown";
    /** Mutes the microphone input. */ Key["MicrophoneVolumeMute"] = "MicrophoneVolumeMute";
    /** Increases the microphone's input volume. */ Key["MicrophoneVolumeUp"] = "MicrophoneVolumeUp";
    /** Switches into TV viewing mode. */ Key["TV"] = "TV";
    /** Toggles 3D TV mode on and off. */ Key["TV3DMode"] = "TV3DMode";
    /** Toggles between antenna and cable inputs. */ Key["TVAntennaCable"] = "TVAntennaCable";
    /** Toggles audio description mode on and off. */ Key["TVAudioDescription"] = "TVAudioDescription";
    /**
     * Decreases the audio description's mixing volume; reduces the volume of
     * the audio descriptions relative to the program sound.
     */ Key["TVAudioDescriptionMixDown"] = "TVAudioDescriptionMixDown";
    /**
     * Increases the audio description's mixing volume; increases the volume of
     * the audio descriptions relative to the program sound.
     */ Key["TVAudioDescriptionMixUp"] = "TVAudioDescriptionMixUp";
    /**
     * Displays or hides the media contents available for playback (this may be
     * a channel guide showing the currently airing programs, or a list of
     * media files to play).
     */ Key["TVContentsMenu"] = "TVContentsMenu";
    /** Displays or hides the TV's data service menu. */ Key["TVDataService"] = "TVDataService";
    /** Cycles the input mode on an external TV. */ Key["TVInput"] = "TVInput";
    /** Switches to the input "Component 1." */ Key["TVInputComponent1"] = "TVInputComponent1";
    /** Switches to the input "Component 2." */ Key["TVInputComponent2"] = "TVInputComponent2";
    /** Switches to the input "Composite 1." */ Key["TVInputComposite1"] = "TVInputComposite1";
    /** Switches to the input "Composite 2." */ Key["TVInputComposite2"] = "TVInputComposite2";
    /** Switches to the input "HDMI 1." */ Key["TVInputHDMI1"] = "TVInputHDMI1";
    /** Switches to the input "HDMI 2." */ Key["TVInputHDMI2"] = "TVInputHDMI2";
    /** Switches to the input "HDMI 3." */ Key["TVInputHDMI3"] = "TVInputHDMI3";
    /** Switches to the input "HDMI 4." */ Key["TVInputHDMI4"] = "TVInputHDMI4";
    /** Switches to the input "VGA 1." */ Key["TVInputVGA1"] = "TVInputVGA1";
    /** The Media Context menu key. */ Key["TVMediaContext"] = "TVMediaContext";
    /** Toggle the TV's network connection on and off. */ Key["TVNetwork"] = "TVNetwork";
    /** Put the TV into number entry mode. */ Key["TVNumberEntry"] = "TVNumberEntry";
    /** The device's power button. */ Key["TVPower"] = "TVPower";
    /** Radio button. */ Key["TVRadioService"] = "TVRadioService";
    /** Satellite button. */ Key["TVSatellite"] = "TVSatellite";
    /** Broadcast Satellite button. */ Key["TVSatelliteBS"] = "TVSatelliteBS";
    /** Communication Satellite button. */ Key["TVSatelliteCS"] = "TVSatelliteCS";
    /** Toggles among available satellites. */ Key["TVSatelliteToggle"] = "TVSatelliteToggle";
    /**
     * Selects analog terrestrial television service (analog cable or antenna
     * reception).
     */ Key["TVTerrestrialAnalog"] = "TVTerrestrialAnalog";
    /**
     * Selects digital terrestrial television service (digital cable or antenna
     * reception).
     */ Key["TVTerrestrialDigital"] = "TVTerrestrialDigital";
    /** Timer programming button. */ Key["TVTimer"] = "TVTimer";
    /** Changes the input mode on an external audio/video receiver (AVR) unit. */ Key["AVRInput"] = "AVRInput";
    /** Toggles the power on an external AVR unit. */ Key["AVRPower"] = "AVRPower";
    /**
     * General-purpose media function key, color-coded red. This has index
     * 0 among the colored keys.
     */ Key["ColorF0Red"] = "ColorF0Red";
    /**
     * General-purpose media function key, color-coded green. This has index
     * 1 among the colored keys.
     */ Key["ColorF1Green"] = "ColorF1Green";
    /**
     * General-purpose media function key, color-coded yellow. This has index
     * 2 among the colored keys.
     */ Key["ColorF2Yellow"] = "ColorF2Yellow";
    /**
     * General-purpose media function key, color-coded blue. This has index
     * 3 among the colored keys.
     */ Key["ColorF3Blue"] = "ColorF3Blue";
    /**
     * General-purpose media function key, color-coded grey. This has index
     * 4 among the colored keys.
     */ Key["ColorF4Grey"] = "ColorF4Grey";
    /**
     * General-purpose media function key, color-coded brown. This has index
     * 5 among the colored keys.
     */ Key["ColorF5Brown"] = "ColorF5Brown";
    /** Toggles closed captioning on and off. */ Key["ClosedCaptionToggle"] = "ClosedCaptionToggle";
    /**
     * Adjusts the brightness of the device by toggling between two brightness
     * levels or by cycling among multiple brightness levels.
     */ Key["Dimmer"] = "Dimmer";
    /** Cycles among video sources. */ Key["DisplaySwap"] = "DisplaySwap";
    /** Switches the input source to the Digital Video Recorder (DVR). */ Key["DVR"] = "DVR";
    /** The Exit button, which exits the current application or menu. */ Key["Exit"] = "Exit";
    /** Clears the program or content stored in the first favorites list slot. */ Key["FavoriteClear0"] = "FavoriteClear0";
    /** Clears the program or content stored in the second favorites list slot. */ Key["FavoriteClear1"] = "FavoriteClear1";
    /** Clears the program or content stored in the third favorites list slot. */ Key["FavoriteClear2"] = "FavoriteClear2";
    /** Clears the program or content stored in the fourth favorites list slot. */ Key["FavoriteClear3"] = "FavoriteClear3";
    /**
     * Selects (recalls) the program or content stored in the first favorites
     * list slot.
     */ Key["FavoriteRecall0"] = "FavoriteRecall0";
    /**
     * Selects (recalls) the program or content stored in the second favorites
     * list slot.
     */ Key["FavoriteRecall1"] = "FavoriteRecall1";
    /**
     * Selects (recalls) the program or content stored in the third favorites
     * list slot.
     */ Key["FavoriteRecall2"] = "FavoriteRecall2";
    /**
     * Selects (recalls) the program or content stored in the fourth favorites
     * list slot.
     */ Key["FavoriteRecall3"] = "FavoriteRecall3";
    /**
     * Stores the current program or content into the first favorites list
     * slot.
     */ Key["FavoriteStore0"] = "FavoriteStore0";
    /**
     * Stores the current program or content into the second favorites list
     * slot.
     */ Key["FavoriteStore1"] = "FavoriteStore1";
    /**
     * Stores the current program or content into the third favorites list
     * slot.
     */ Key["FavoriteStore2"] = "FavoriteStore2";
    /**
     * Stores the current program or content into the fourth favorites list
     * slot.
     */ Key["FavoriteStore3"] = "FavoriteStore3";
    /** Toggles the display of the program or content guide. */ Key["Guide"] = "Guide";
    /**
     * If the guide is currently displayed, this button tells the guide to
     * display the next day's content.
     */ Key["GuideNextDay"] = "GuideNextDay";
    /**
     * If the guide is currently displayed, this button tells the guide to
     * display the previous day's content.
     */ Key["GuidePreviousDay"] = "GuidePreviousDay";
    /**
     * Toggles the display of information about the currently selected content,
     * program, or media.
     */ Key["Info"] = "Info";
    /**
     * Tells the device to perform an instant replay (typically some form of
     * jumping back a short amount of time then playing it again, possibly but
     * not usually in slow motion).
     */ Key["InstantReplay"] = "InstantReplay";
    /** Opens content linked to the current program, if available and possible. */ Key["Link"] = "Link";
    /** Lists the current program. */ Key["ListProgram"] = "ListProgram";
    /** Toggles a display listing currently available live content or programs. */ Key["LiveContent"] = "LiveContent";
    /** Locks or unlocks the currently selected content or pgoram. */ Key["Lock"] = "Lock";
    /**
     * Presents a list of media applications, such as photo viewers, audio and
     * video players, and games. [1]
     */ Key["MediaApps"] = "MediaApps";
    /** The Audio Track key. */ Key["MediaAudioTrack"] = "MediaAudioTrack";
    /** Jumps back to the last-viewed content, program, or other media. */ Key["MediaLast"] = "MediaLast";
    /** Skips backward to the previous content or program. */ Key["MediaSkipBackward"] = "MediaSkipBackward";
    /** Skips forward to the next content or program. */ Key["MediaSkipForward"] = "MediaSkipForward";
    /** Steps backward to the previous content or program. */ Key["MediaStepBackward"] = "MediaStepBackward";
    /** Steps forward to the next content or program. */ Key["MediaStepForward"] = "MediaStepForward";
    /**
     * Top Menu button. Opens the media's main menu (e.g., for a DVD or Blu-Ray
     * disc).
     */ Key["MediaTopMenu"] = "MediaTopMenu";
    /** Navigates into a submenu or option. */ Key["NavigateIn"] = "NavigateIn";
    /** Navigates to the next item. */ Key["NavigateNext"] = "NavigateNext";
    /** Navigates out of the current screen or menu. */ Key["NavigateOut"] = "NavigateOut";
    /** Navigates to the previous item. */ Key["NavigatePrevious"] = "NavigatePrevious";
    /** Cycles to the next channel in the favorites list. */ Key["NextFavoriteChannel"] = "NextFavoriteChannel";
    /**
     * Cycles to the next saved user profile, if this feature is supported and
     * multiple profiles exist.
     */ Key["NextUserProfile"] = "NextUserProfile";
    /**
     * Opens the user interface for selecting on demand content or programs to
     * watch.
     */ Key["OnDemand"] = "OnDemand";
    /** Starts the process of pairing the remote with a device to be controlled. */ Key["Pairing"] = "Pairing";
    /** A button to move the picture-in-picture view downward. */ Key["PinPDown"] = "PinPDown";
    /** A button to control moving the picture-in-picture view. */ Key["PinPMove"] = "PinPMove";
    /** Toggles display of the picture-in-picture view on and off. */ Key["PinPToggle"] = "PinPToggle";
    /** A button to move the picture-in-picture view upward. */ Key["PinPUp"] = "PinPUp";
    /** Decreases the media playback rate. */ Key["PlaySpeedDown"] = "PlaySpeedDown";
    /** Returns the media playback rate to normal. */ Key["PlaySpeedReset"] = "PlaySpeedReset";
    /** Increases the media playback rate. */ Key["PlaySpeedUp"] = "PlaySpeedUp";
    /** Toggles random media (also known as "shuffle mode") on and off. */ Key["RandomToggle"] = "RandomToggle";
    /**
     * A code sent when the remote control's battery is low. This doesn't
     * actually correspond to a physical key at all.
     */ Key["RcLowBattery"] = "RcLowBattery";
    /** Cycles among the available media recording speeds. */ Key["RecordSpeedNext"] = "RecordSpeedNext";
    /**
     * Toggles radio frequency (RF) input bypass mode on and off. RF bypass
     * mode passes RF input directly to the RF output without any processing or
     * filtering.
     */ Key["RfBypass"] = "RfBypass";
    /**
     * Toggles the channel scan mode on and off. This is a mode which flips
     * through channels automatically until the user stops the scan.
     */ Key["ScanChannelsToggle"] = "ScanChannelsToggle";
    /** Cycles through the available screen display modes. */ Key["ScreenModeNext"] = "ScreenModeNext";
    /** Toggles display of the device's settings screen on and off. */ Key["Settings"] = "Settings";
    /** Toggles split screen display mode on and off. */ Key["SplitScreenToggle"] = "SplitScreenToggle";
    /** Cycles among input modes on an external set-top box (STB). */ Key["STBInput"] = "STBInput";
    /** Toggles on and off an external STB. */ Key["STBPower"] = "STBPower";
    /** Toggles the display of subtitles on and off if they're available. */ Key["Subtitle"] = "Subtitle";
    /**
     * Toggles display of teletext,
     * if available.
     */ Key["Teletext"] = "Teletext";
    /** Cycles through the available video modes. */ Key["VideoModeNext"] = "VideoModeNext";
    /**
     * Causes the device to identify itself in some fashion, such as by
     * flashing a light, briefly changing the brightness of indicator lights,
     * or emitting a tone.
     */ Key["Wink"] = "Wink";
    /**
     * Toggles between fullscreen and scaled content display, or otherwise
     * change the magnification level.
     */ Key["ZoomToggle"] = "ZoomToggle";
    /**
     * Presents a list of possible corrections for a word which was incorrectly
     * identified.
     */ Key["SpeechCorrectionList"] = "SpeechCorrectionList";
    /**
     * Toggles between dictation mode and command/control mode. This lets the
     * speech engine know whether to interpret spoken words as input text or as
     * commands.
     */ Key["SpeechInputToggle"] = "SpeechInputToggle";
    /** Closes the current document or message. Must not exit the application. */ Key["Close"] = "Close";
    /** Creates a new document or message. */ Key["New"] = "New";
    /** Opens an existing document or message. */ Key["Open"] = "Open";
    /** Prints the current document or message. */ Key["Print"] = "Print";
    /** Saves the current document or message. */ Key["Save"] = "Save";
    /** Starts spell checking the current document. */ Key["SpellCheck"] = "SpellCheck";
    /** Opens the user interface to forward a message. */ Key["MailForward"] = "MailForward";
    /** Opens the user interface to reply to a message. */ Key["MailReply"] = "MailReply";
    /** Sends the current message. */ Key["MailSend"] = "MailSend";
    /**
     * The Calculator key, often labeled with an icon. This is often
     * used as a generic application launcher key
     * (APPCOMMAND_LAUNCH_APP2).
     */ Key["LaunchCalculator"] = "LaunchCalculator";
    /** The Calendar key. Often labeled with an icon. */ Key["LaunchCalendar"] = "LaunchCalendar";
    /** The Contacts key. */ Key["LaunchContacts"] = "LaunchContacts";
    /** The Mail key. Often labeled with an icon. */ Key["LaunchMail"] = "LaunchMail";
    /** The Media Player key. */ Key["LaunchMediaPlayer"] = "LaunchMediaPlayer";
    /** The Music Player key. Often labeled with an icon. */ Key["LaunchMusicPlayer"] = "LaunchMusicPlayer";
    /**
     * The My Computer key on Windows keyboards. This is often used
     * as a generic application launcher key
     * (APPCOMMAND_LAUNCH_APP1).
     */ Key["LaunchMyComputer"] = "LaunchMyComputer";
    /**
     * The Phone key. Opens the phone dialer application (if one is
     * present).
     */ Key["LaunchPhone"] = "LaunchPhone";
    /** The Screen Saver key. */ Key["LaunchScreenSaver"] = "LaunchScreenSaver";
    /** The Spreadsheet key. This key may be labeled with an icon. */ Key["LaunchSpreadsheet"] = "LaunchSpreadsheet";
    /**
     * The Web Browser key. This key is frequently labeled with an
     * icon.
     */ Key["LaunchWebBrowser"] = "LaunchWebBrowser";
    /** The WebCam key. Opens the webcam application. */ Key["LaunchWebCam"] = "LaunchWebCam";
    /**
     * The Word Processor key. This may be an icon of a specific
     * word processor application, or a generic document icon.
     */ Key["LaunchWordProcessor"] = "LaunchWordProcessor";
    /** The first generic application launcher button. */ Key["LaunchApplication1"] = "LaunchApplication1";
    /** The second generic application launcher button. */ Key["LaunchApplication2"] = "LaunchApplication2";
    /** The third generic application launcher button. */ Key["LaunchApplication3"] = "LaunchApplication3";
    /** The fourth generic application launcher button. */ Key["LaunchApplication4"] = "LaunchApplication4";
    /** The fifth generic application launcher button. */ Key["LaunchApplication5"] = "LaunchApplication5";
    /** The sixth generic application launcher button. */ Key["LaunchApplication6"] = "LaunchApplication6";
    /** The seventh generic application launcher button. */ Key["LaunchApplication7"] = "LaunchApplication7";
    /** The eighth generic application launcher button. */ Key["LaunchApplication8"] = "LaunchApplication8";
    /** The ninth generic application launcher button. */ Key["LaunchApplication9"] = "LaunchApplication9";
    /** The 10th generic application launcher button. */ Key["LaunchApplication10"] = "LaunchApplication10";
    /** The 11th generic application launcher button. */ Key["LaunchApplication11"] = "LaunchApplication11";
    /** The 12th generic application launcher button. */ Key["LaunchApplication12"] = "LaunchApplication12";
    /** The 13th generic application launcher button. */ Key["LaunchApplication13"] = "LaunchApplication13";
    /** The 14th generic application launcher button. */ Key["LaunchApplication14"] = "LaunchApplication14";
    /** The 15th generic application launcher button. */ Key["LaunchApplication15"] = "LaunchApplication15";
    /** The 16th generic application launcher button. */ Key["LaunchApplication16"] = "LaunchApplication16";
    /**
     * Navigates to the previous content or page in the current Web view's
     * history.
     */ Key["BrowserBack"] = "BrowserBack";
    /** Opens the user's list of bookmarks/favorites. */ Key["BrowserFavorites"] = "BrowserFavorites";
    /** Navigates to the next content or page in the current Web view's history. */ Key["BrowserForward"] = "BrowserForward";
    /** Navigates to the user's preferred home page. */ Key["BrowserHome"] = "BrowserHome";
    /** Refreshes the current page or content. */ Key["BrowserRefresh"] = "BrowserRefresh";
    /**
     * Activates the user's preferred search engine or the search interface
     * within their browser.
     */ Key["BrowserSearch"] = "BrowserSearch";
    /** Stops loading the currently displayed Web view or content. */ Key["BrowserStop"] = "BrowserStop";
    /**
     * The decimal point key (typically . or
     * , depending on the region).
     * In newer browsers, this value to be the character generated by the
     * decimal key (one of those two characters). [1]
     */ Key["Decimal"] = "Decimal";
    /** The 11 key found on certain media numeric keypads. */ Key["Key11"] = "Key11";
    /** The 12 key found on certain media numeric keypads. */ Key["Key12"] = "Key12";
    /** The numeric keypad's multiplication key, *. */ Key["Multiply"] = "Multiply";
    /** The numeric keypad's addition key, +. */ Key["Add"] = "Add";
    /** The numeric keypad's division key, /. */ Key["Divide"] = "Divide";
    /** The numeric keypad's subtraction key, -. */ Key["Subtract"] = "Subtract";
    /**
     * The numeric keypad's places separator character.
     * (In the United States this is a comma, but elsewhere it is frequently
     * a period.)
     */ Key["Separator"] = "Separator";
})(Key = exports.Key || (exports.Key = {}));

},{}],"kNYK8":[function(require,module,exports,__globalThis) {
var global = arguments[3];
"use strict";
var numeric = exports;
if (typeof global !== "undefined") global.numeric = numeric;
numeric.version = "1.2.6";
// 1. Utility functions
numeric.bench = function bench(f, interval) {
    var t1, t2, n, i;
    if (typeof interval === "undefined") interval = 15;
    n = 0.5;
    t1 = new Date();
    while(true){
        n *= 2;
        for(i = n; i > 3; i -= 4){
            f();
            f();
            f();
            f();
        }
        while(i > 0){
            f();
            i--;
        }
        t2 = new Date();
        if (t2 - t1 > interval) break;
    }
    for(i = n; i > 3; i -= 4){
        f();
        f();
        f();
        f();
    }
    while(i > 0){
        f();
        i--;
    }
    t2 = new Date();
    return 1000 * (3 * n - 1) / (t2 - t1);
};
numeric._myIndexOf = function _myIndexOf(w) {
    var n = this.length, k;
    for(k = 0; k < n; ++k)if (this[k] === w) return k;
    return -1;
};
numeric.myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf : numeric._myIndexOf;
numeric.Function = Function;
numeric.precision = 4;
numeric.largeArray = 50;
numeric.prettyPrint = function prettyPrint(x) {
    function fmtnum(x) {
        if (x === 0) return '0';
        if (isNaN(x)) return 'NaN';
        if (x < 0) return '-' + fmtnum(-x);
        if (isFinite(x)) {
            var scale = Math.floor(Math.log(x) / Math.log(10));
            var normalized = x / Math.pow(10, scale);
            var basic = normalized.toPrecision(numeric.precision);
            if (parseFloat(basic) === 10) {
                scale++;
                normalized = 1;
                basic = normalized.toPrecision(numeric.precision);
            }
            return parseFloat(basic).toString() + 'e' + scale.toString();
        }
        return 'Infinity';
    }
    var ret = [];
    function foo(x) {
        var k;
        if (typeof x === "undefined") {
            ret.push(Array(numeric.precision + 8).join(' '));
            return false;
        }
        if (typeof x === "string") {
            ret.push('"' + x + '"');
            return false;
        }
        if (typeof x === "boolean") {
            ret.push(x.toString());
            return false;
        }
        if (typeof x === "number") {
            var a = fmtnum(x);
            var b = x.toPrecision(numeric.precision);
            var c = parseFloat(x.toString()).toString();
            var d = [
                a,
                b,
                c,
                parseFloat(b).toString(),
                parseFloat(c).toString()
            ];
            for(k = 1; k < d.length; k++)if (d[k].length < a.length) a = d[k];
            ret.push(Array(numeric.precision + 8 - a.length).join(' ') + a);
            return false;
        }
        if (x === null) {
            ret.push("null");
            return false;
        }
        if (typeof x === "function") {
            ret.push(x.toString());
            var flag = false;
            for(k in x)if (x.hasOwnProperty(k)) {
                if (flag) ret.push(',\n');
                else ret.push('\n{');
                flag = true;
                ret.push(k);
                ret.push(': \n');
                foo(x[k]);
            }
            if (flag) ret.push('}\n');
            return true;
        }
        if (x instanceof Array) {
            if (x.length > numeric.largeArray) {
                ret.push('...Large Array...');
                return true;
            }
            var flag = false;
            ret.push('[');
            for(k = 0; k < x.length; k++){
                if (k > 0) {
                    ret.push(',');
                    if (flag) ret.push('\n ');
                }
                flag = foo(x[k]);
            }
            ret.push(']');
            return true;
        }
        ret.push('{');
        var flag = false;
        for(k in x)if (x.hasOwnProperty(k)) {
            if (flag) ret.push(',\n');
            flag = true;
            ret.push(k);
            ret.push(': \n');
            foo(x[k]);
        }
        ret.push('}');
        return true;
    }
    foo(x);
    return ret.join('');
};
numeric.parseDate = function parseDate(d) {
    function foo(d) {
        if (typeof d === 'string') return Date.parse(d.replace(/-/g, '/'));
        if (!(d instanceof Array)) throw new Error("parseDate: parameter must be arrays of strings");
        var ret = [], k;
        for(k = 0; k < d.length; k++)ret[k] = foo(d[k]);
        return ret;
    }
    return foo(d);
};
numeric.parseFloat = function parseFloat_(d) {
    function foo(d) {
        if (typeof d === 'string') return parseFloat(d);
        if (!(d instanceof Array)) throw new Error("parseFloat: parameter must be arrays of strings");
        var ret = [], k;
        for(k = 0; k < d.length; k++)ret[k] = foo(d[k]);
        return ret;
    }
    return foo(d);
};
numeric.parseCSV = function parseCSV(t) {
    var foo = t.split('\n');
    var j, k;
    var ret = [];
    var pat = /(([^'",]*)|('[^']*')|("[^"]*")),/g;
    var patnum = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/;
    var stripper = function(n) {
        return n.substr(0, n.length - 1);
    };
    var count = 0;
    for(k = 0; k < foo.length; k++){
        var bar = (foo[k] + ",").match(pat), baz;
        if (bar.length > 0) {
            ret[count] = [];
            for(j = 0; j < bar.length; j++){
                baz = stripper(bar[j]);
                if (patnum.test(baz)) ret[count][j] = parseFloat(baz);
                else ret[count][j] = baz;
            }
            count++;
        }
    }
    return ret;
};
numeric.toCSV = function toCSV(A) {
    var s = numeric.dim(A);
    var i, j, m, n, row, ret;
    m = s[0];
    n = s[1];
    ret = [];
    for(i = 0; i < m; i++){
        row = [];
        for(j = 0; j < m; j++)row[j] = A[i][j].toString();
        ret[i] = row.join(', ');
    }
    return ret.join('\n') + '\n';
};
numeric.getURL = function getURL(url) {
    var client = new XMLHttpRequest();
    client.open("GET", url, false);
    client.send();
    return client;
};
numeric.imageURL = function imageURL(img) {
    function base64(A) {
        var n = A.length, i, x, y, z, p, q, r, s;
        var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var ret = "";
        for(i = 0; i < n; i += 3){
            x = A[i];
            y = A[i + 1];
            z = A[i + 2];
            p = x >> 2;
            q = ((x & 3) << 4) + (y >> 4);
            r = ((y & 15) << 2) + (z >> 6);
            s = z & 63;
            if (i + 1 >= n) r = s = 64;
            else if (i + 2 >= n) s = 64;
            ret += key.charAt(p) + key.charAt(q) + key.charAt(r) + key.charAt(s);
        }
        return ret;
    }
    function crc32Array(a, from, to) {
        if (typeof from === "undefined") from = 0;
        if (typeof to === "undefined") to = a.length;
        var table = [
            0x00000000,
            0x77073096,
            0xEE0E612C,
            0x990951BA,
            0x076DC419,
            0x706AF48F,
            0xE963A535,
            0x9E6495A3,
            0x0EDB8832,
            0x79DCB8A4,
            0xE0D5E91E,
            0x97D2D988,
            0x09B64C2B,
            0x7EB17CBD,
            0xE7B82D07,
            0x90BF1D91,
            0x1DB71064,
            0x6AB020F2,
            0xF3B97148,
            0x84BE41DE,
            0x1ADAD47D,
            0x6DDDE4EB,
            0xF4D4B551,
            0x83D385C7,
            0x136C9856,
            0x646BA8C0,
            0xFD62F97A,
            0x8A65C9EC,
            0x14015C4F,
            0x63066CD9,
            0xFA0F3D63,
            0x8D080DF5,
            0x3B6E20C8,
            0x4C69105E,
            0xD56041E4,
            0xA2677172,
            0x3C03E4D1,
            0x4B04D447,
            0xD20D85FD,
            0xA50AB56B,
            0x35B5A8FA,
            0x42B2986C,
            0xDBBBC9D6,
            0xACBCF940,
            0x32D86CE3,
            0x45DF5C75,
            0xDCD60DCF,
            0xABD13D59,
            0x26D930AC,
            0x51DE003A,
            0xC8D75180,
            0xBFD06116,
            0x21B4F4B5,
            0x56B3C423,
            0xCFBA9599,
            0xB8BDA50F,
            0x2802B89E,
            0x5F058808,
            0xC60CD9B2,
            0xB10BE924,
            0x2F6F7C87,
            0x58684C11,
            0xC1611DAB,
            0xB6662D3D,
            0x76DC4190,
            0x01DB7106,
            0x98D220BC,
            0xEFD5102A,
            0x71B18589,
            0x06B6B51F,
            0x9FBFE4A5,
            0xE8B8D433,
            0x7807C9A2,
            0x0F00F934,
            0x9609A88E,
            0xE10E9818,
            0x7F6A0DBB,
            0x086D3D2D,
            0x91646C97,
            0xE6635C01,
            0x6B6B51F4,
            0x1C6C6162,
            0x856530D8,
            0xF262004E,
            0x6C0695ED,
            0x1B01A57B,
            0x8208F4C1,
            0xF50FC457,
            0x65B0D9C6,
            0x12B7E950,
            0x8BBEB8EA,
            0xFCB9887C,
            0x62DD1DDF,
            0x15DA2D49,
            0x8CD37CF3,
            0xFBD44C65,
            0x4DB26158,
            0x3AB551CE,
            0xA3BC0074,
            0xD4BB30E2,
            0x4ADFA541,
            0x3DD895D7,
            0xA4D1C46D,
            0xD3D6F4FB,
            0x4369E96A,
            0x346ED9FC,
            0xAD678846,
            0xDA60B8D0,
            0x44042D73,
            0x33031DE5,
            0xAA0A4C5F,
            0xDD0D7CC9,
            0x5005713C,
            0x270241AA,
            0xBE0B1010,
            0xC90C2086,
            0x5768B525,
            0x206F85B3,
            0xB966D409,
            0xCE61E49F,
            0x5EDEF90E,
            0x29D9C998,
            0xB0D09822,
            0xC7D7A8B4,
            0x59B33D17,
            0x2EB40D81,
            0xB7BD5C3B,
            0xC0BA6CAD,
            0xEDB88320,
            0x9ABFB3B6,
            0x03B6E20C,
            0x74B1D29A,
            0xEAD54739,
            0x9DD277AF,
            0x04DB2615,
            0x73DC1683,
            0xE3630B12,
            0x94643B84,
            0x0D6D6A3E,
            0x7A6A5AA8,
            0xE40ECF0B,
            0x9309FF9D,
            0x0A00AE27,
            0x7D079EB1,
            0xF00F9344,
            0x8708A3D2,
            0x1E01F268,
            0x6906C2FE,
            0xF762575D,
            0x806567CB,
            0x196C3671,
            0x6E6B06E7,
            0xFED41B76,
            0x89D32BE0,
            0x10DA7A5A,
            0x67DD4ACC,
            0xF9B9DF6F,
            0x8EBEEFF9,
            0x17B7BE43,
            0x60B08ED5,
            0xD6D6A3E8,
            0xA1D1937E,
            0x38D8C2C4,
            0x4FDFF252,
            0xD1BB67F1,
            0xA6BC5767,
            0x3FB506DD,
            0x48B2364B,
            0xD80D2BDA,
            0xAF0A1B4C,
            0x36034AF6,
            0x41047A60,
            0xDF60EFC3,
            0xA867DF55,
            0x316E8EEF,
            0x4669BE79,
            0xCB61B38C,
            0xBC66831A,
            0x256FD2A0,
            0x5268E236,
            0xCC0C7795,
            0xBB0B4703,
            0x220216B9,
            0x5505262F,
            0xC5BA3BBE,
            0xB2BD0B28,
            0x2BB45A92,
            0x5CB36A04,
            0xC2D7FFA7,
            0xB5D0CF31,
            0x2CD99E8B,
            0x5BDEAE1D,
            0x9B64C2B0,
            0xEC63F226,
            0x756AA39C,
            0x026D930A,
            0x9C0906A9,
            0xEB0E363F,
            0x72076785,
            0x05005713,
            0x95BF4A82,
            0xE2B87A14,
            0x7BB12BAE,
            0x0CB61B38,
            0x92D28E9B,
            0xE5D5BE0D,
            0x7CDCEFB7,
            0x0BDBDF21,
            0x86D3D2D4,
            0xF1D4E242,
            0x68DDB3F8,
            0x1FDA836E,
            0x81BE16CD,
            0xF6B9265B,
            0x6FB077E1,
            0x18B74777,
            0x88085AE6,
            0xFF0F6A70,
            0x66063BCA,
            0x11010B5C,
            0x8F659EFF,
            0xF862AE69,
            0x616BFFD3,
            0x166CCF45,
            0xA00AE278,
            0xD70DD2EE,
            0x4E048354,
            0x3903B3C2,
            0xA7672661,
            0xD06016F7,
            0x4969474D,
            0x3E6E77DB,
            0xAED16A4A,
            0xD9D65ADC,
            0x40DF0B66,
            0x37D83BF0,
            0xA9BCAE53,
            0xDEBB9EC5,
            0x47B2CF7F,
            0x30B5FFE9,
            0xBDBDF21C,
            0xCABAC28A,
            0x53B39330,
            0x24B4A3A6,
            0xBAD03605,
            0xCDD70693,
            0x54DE5729,
            0x23D967BF,
            0xB3667A2E,
            0xC4614AB8,
            0x5D681B02,
            0x2A6F2B94,
            0xB40BBE37,
            0xC30C8EA1,
            0x5A05DF1B,
            0x2D02EF8D
        ];
        var crc = -1, y = 0, n = a.length, i;
        for(i = from; i < to; i++){
            y = (crc ^ a[i]) & 0xFF;
            crc = crc >>> 8 ^ table[y];
        }
        return crc ^ -1;
    }
    var h = img[0].length, w = img[0][0].length, s1, s2, next, k, length, a, b, i, j, adler32, crc32;
    var stream = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10,
        0,
        0,
        0,
        13,
        73,
        72,
        68,
        82,
        w >> 24 & 255,
        w >> 16 & 255,
        w >> 8 & 255,
        w & 255,
        h >> 24 & 255,
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255,
        8,
        2,
        0,
        0,
        0,
        -1,
        -2,
        -3,
        -4,
        -5,
        -6,
        -7,
        -8,
        73,
        68,
        65,
        84,
        // RFC 1950 header starts here
        8,
        29 // 42: RFC1950 FLG
    ];
    crc32 = crc32Array(stream, 12, 29);
    stream[29] = crc32 >> 24 & 255;
    stream[30] = crc32 >> 16 & 255;
    stream[31] = crc32 >> 8 & 255;
    stream[32] = crc32 & 255;
    s1 = 1;
    s2 = 0;
    for(i = 0; i < h; i++){
        if (i < h - 1) stream.push(0);
        else stream.push(1);
        a = 3 * w + 1 + (i === 0) & 255;
        b = 3 * w + 1 + (i === 0) >> 8 & 255;
        stream.push(a);
        stream.push(b);
        stream.push(~a & 255);
        stream.push(~b & 255);
        if (i === 0) stream.push(0);
        for(j = 0; j < w; j++)for(k = 0; k < 3; k++){
            a = img[k][i][j];
            if (a > 255) a = 255;
            else if (a < 0) a = 0;
            else a = Math.round(a);
            s1 = (s1 + a) % 65521;
            s2 = (s2 + s1) % 65521;
            stream.push(a);
        }
        stream.push(0);
    }
    adler32 = (s2 << 16) + s1;
    stream.push(adler32 >> 24 & 255);
    stream.push(adler32 >> 16 & 255);
    stream.push(adler32 >> 8 & 255);
    stream.push(adler32 & 255);
    length = stream.length - 41;
    stream[33] = length >> 24 & 255;
    stream[34] = length >> 16 & 255;
    stream[35] = length >> 8 & 255;
    stream[36] = length & 255;
    crc32 = crc32Array(stream, 37);
    stream.push(crc32 >> 24 & 255);
    stream.push(crc32 >> 16 & 255);
    stream.push(crc32 >> 8 & 255);
    stream.push(crc32 & 255);
    stream.push(0);
    stream.push(0);
    stream.push(0);
    stream.push(0);
    //    a = stream.length;
    stream.push(73); // I
    stream.push(69); // E
    stream.push(78); // N
    stream.push(68); // D
    stream.push(174); // CRC1
    stream.push(66); // CRC2
    stream.push(96); // CRC3
    stream.push(130); // CRC4
    return 'data:image/png;base64,' + base64(stream);
};
// 2. Linear algebra with Arrays.
numeric._dim = function _dim(x) {
    var ret = [];
    while(typeof x === "object"){
        ret.push(x.length);
        x = x[0];
    }
    return ret;
};
numeric.dim = function dim(x) {
    var y, z;
    if (typeof x === "object") {
        y = x[0];
        if (typeof y === "object") {
            z = y[0];
            if (typeof z === "object") return numeric._dim(x);
            return [
                x.length,
                y.length
            ];
        }
        return [
            x.length
        ];
    }
    return [];
};
numeric.mapreduce = function mapreduce(body, init) {
    return Function('x', 'accum', '_s', '_k', 'if(typeof accum === "undefined") accum = ' + init + ';\n' + 'if(typeof x === "number") { var xi = x; ' + body + '; return accum; }\n' + 'if(typeof _s === "undefined") _s = numeric.dim(x);\n' + 'if(typeof _k === "undefined") _k = 0;\n' + 'var _n = _s[_k];\n' + 'var i,xi;\n' + 'if(_k < _s.length-1) {\n' + '    for(i=_n-1;i>=0;i--) {\n' + '        accum = arguments.callee(x[i],accum,_s,_k+1);\n' + '    }' + '    return accum;\n' + '}\n' + 'for(i=_n-1;i>=1;i-=2) { \n' + '    xi = x[i];\n' + '    ' + body + ';\n' + '    xi = x[i-1];\n' + '    ' + body + ';\n' + '}\n' + 'if(i === 0) {\n' + '    xi = x[i];\n' + '    ' + body + '\n' + '}\n' + 'return accum;');
};
numeric.mapreduce2 = function mapreduce2(body, setup) {
    return Function('x', "var n = x.length;\nvar i,xi;\n" + setup + ';\n' + 'for(i=n-1;i!==-1;--i) { \n' + '    xi = x[i];\n' + '    ' + body + ';\n' + '}\n' + 'return accum;');
};
numeric.same = function same(x, y) {
    var i, n;
    if (!(x instanceof Array) || !(y instanceof Array)) return false;
    n = x.length;
    if (n !== y.length) return false;
    for(i = 0; i < n; i++){
        if (x[i] === y[i]) continue;
        if (typeof x[i] === "object") {
            if (!same(x[i], y[i])) return false;
        } else return false;
    }
    return true;
};
numeric.rep = function rep(s, v, k) {
    if (typeof k === "undefined") k = 0;
    var n = s[k], ret = Array(n), i;
    if (k === s.length - 1) {
        for(i = n - 2; i >= 0; i -= 2){
            ret[i + 1] = v;
            ret[i] = v;
        }
        if (i === -1) ret[0] = v;
        return ret;
    }
    for(i = n - 1; i >= 0; i--)ret[i] = numeric.rep(s, v, k + 1);
    return ret;
};
numeric.dotMMsmall = function dotMMsmall(x, y) {
    var i, j, k, p, q, r, ret, foo, bar, woo, i0, k0, p0, r0;
    p = x.length;
    q = y.length;
    r = y[0].length;
    ret = Array(p);
    for(i = p - 1; i >= 0; i--){
        foo = Array(r);
        bar = x[i];
        for(k = r - 1; k >= 0; k--){
            woo = bar[q - 1] * y[q - 1][k];
            for(j = q - 2; j >= 1; j -= 2){
                i0 = j - 1;
                woo += bar[j] * y[j][k] + bar[i0] * y[i0][k];
            }
            if (j === 0) woo += bar[0] * y[0][k];
            foo[k] = woo;
        }
        ret[i] = foo;
    }
    return ret;
};
numeric._getCol = function _getCol(A, j, x) {
    var n = A.length, i;
    for(i = n - 1; i > 0; --i){
        x[i] = A[i][j];
        --i;
        x[i] = A[i][j];
    }
    if (i === 0) x[0] = A[0][j];
};
numeric.dotMMbig = function dotMMbig(x, y) {
    var gc = numeric._getCol, p = y.length, v = Array(p);
    var m = x.length, n = y[0].length, A = new Array(m), xj;
    var VV = numeric.dotVV;
    var i, j, k, z;
    --p;
    --m;
    for(i = m; i !== -1; --i)A[i] = Array(n);
    --n;
    for(i = n; i !== -1; --i){
        gc(y, i, v);
        for(j = m; j !== -1; --j){
            z = 0;
            xj = x[j];
            A[j][i] = VV(xj, v);
        }
    }
    return A;
};
numeric.dotMV = function dotMV(x, y) {
    var p = x.length, q = y.length, i;
    var ret = Array(p), dotVV = numeric.dotVV;
    for(i = p - 1; i >= 0; i--)ret[i] = dotVV(x[i], y);
    return ret;
};
numeric.dotVM = function dotVM(x, y) {
    var i, j, k, p, q, r, ret, foo, bar, woo, i0, k0, p0, r0, s1, s2, s3, baz, accum;
    p = x.length;
    q = y[0].length;
    ret = Array(q);
    for(k = q - 1; k >= 0; k--){
        woo = x[p - 1] * y[p - 1][k];
        for(j = p - 2; j >= 1; j -= 2){
            i0 = j - 1;
            woo += x[j] * y[j][k] + x[i0] * y[i0][k];
        }
        if (j === 0) woo += x[0] * y[0][k];
        ret[k] = woo;
    }
    return ret;
};
numeric.dotVV = function dotVV(x, y) {
    var i, n = x.length, i1, ret = x[n - 1] * y[n - 1];
    for(i = n - 2; i >= 1; i -= 2){
        i1 = i - 1;
        ret += x[i] * y[i] + x[i1] * y[i1];
    }
    if (i === 0) ret += x[0] * y[0];
    return ret;
};
numeric.dot = function dot(x, y) {
    var d = numeric.dim;
    switch(d(x).length * 1000 + d(y).length){
        case 2002:
            if (y.length < 10) return numeric.dotMMsmall(x, y);
            else return numeric.dotMMbig(x, y);
        case 2001:
            return numeric.dotMV(x, y);
        case 1002:
            return numeric.dotVM(x, y);
        case 1001:
            return numeric.dotVV(x, y);
        case 1000:
            return numeric.mulVS(x, y);
        case 1:
            return numeric.mulSV(x, y);
        case 0:
            return x * y;
        default:
            throw new Error('numeric.dot only works on vectors and matrices');
    }
};
numeric.diag = function diag(d) {
    var i, i1, j, n = d.length, A = Array(n), Ai;
    for(i = n - 1; i >= 0; i--){
        Ai = Array(n);
        i1 = i + 2;
        for(j = n - 1; j >= i1; j -= 2){
            Ai[j] = 0;
            Ai[j - 1] = 0;
        }
        if (j > i) Ai[j] = 0;
        Ai[i] = d[i];
        for(j = i - 1; j >= 1; j -= 2){
            Ai[j] = 0;
            Ai[j - 1] = 0;
        }
        if (j === 0) Ai[0] = 0;
        A[i] = Ai;
    }
    return A;
};
numeric.getDiag = function(A) {
    var n = Math.min(A.length, A[0].length), i, ret = Array(n);
    for(i = n - 1; i >= 1; --i){
        ret[i] = A[i][i];
        --i;
        ret[i] = A[i][i];
    }
    if (i === 0) ret[0] = A[0][0];
    return ret;
};
numeric.identity = function identity(n) {
    return numeric.diag(numeric.rep([
        n
    ], 1));
};
numeric.pointwise = function pointwise(params, body, setup) {
    if (typeof setup === "undefined") setup = "";
    var fun = [];
    var k;
    var avec = /\[i\]$/, p, thevec = '';
    var haveret = false;
    for(k = 0; k < params.length; k++){
        if (avec.test(params[k])) {
            p = params[k].substring(0, params[k].length - 3);
            thevec = p;
        } else p = params[k];
        if (p === 'ret') haveret = true;
        fun.push(p);
    }
    fun[params.length] = '_s';
    fun[params.length + 1] = '_k';
    fun[params.length + 2] = 'if(typeof _s === "undefined") _s = numeric.dim(' + thevec + ');\n' + 'if(typeof _k === "undefined") _k = 0;\n' + 'var _n = _s[_k];\n' + 'var i' + (haveret ? '' : ', ret = Array(_n)') + ';\n' + 'if(_k < _s.length-1) {\n' + '    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(' + params.join(',') + ',_s,_k+1);\n' + '    return ret;\n' + '}\n' + setup + '\n' + 'for(i=_n-1;i!==-1;--i) {\n' + '    ' + body + '\n' + '}\n' + 'return ret;';
    return Function.apply(null, fun);
};
numeric.pointwise2 = function pointwise2(params, body, setup) {
    if (typeof setup === "undefined") setup = "";
    var fun = [];
    var k;
    var avec = /\[i\]$/, p, thevec = '';
    var haveret = false;
    for(k = 0; k < params.length; k++){
        if (avec.test(params[k])) {
            p = params[k].substring(0, params[k].length - 3);
            thevec = p;
        } else p = params[k];
        if (p === 'ret') haveret = true;
        fun.push(p);
    }
    fun[params.length] = 'var _n = ' + thevec + '.length;\n' + 'var i' + (haveret ? '' : ', ret = Array(_n)') + ';\n' + setup + '\n' + 'for(i=_n-1;i!==-1;--i) {\n' + body + '\n' + '}\n' + 'return ret;';
    return Function.apply(null, fun);
};
numeric._biforeach = function _biforeach(x, y, s, k, f) {
    if (k === s.length - 1) {
        f(x, y);
        return;
    }
    var i, n = s[k];
    for(i = n - 1; i >= 0; i--)_biforeach(typeof x === "object" ? x[i] : x, typeof y === "object" ? y[i] : y, s, k + 1, f);
};
numeric._biforeach2 = function _biforeach2(x, y, s, k, f) {
    if (k === s.length - 1) return f(x, y);
    var i, n = s[k], ret = Array(n);
    for(i = n - 1; i >= 0; --i)ret[i] = _biforeach2(typeof x === "object" ? x[i] : x, typeof y === "object" ? y[i] : y, s, k + 1, f);
    return ret;
};
numeric._foreach = function _foreach(x, s, k, f) {
    if (k === s.length - 1) {
        f(x);
        return;
    }
    var i, n = s[k];
    for(i = n - 1; i >= 0; i--)_foreach(x[i], s, k + 1, f);
};
numeric._foreach2 = function _foreach2(x, s, k, f) {
    if (k === s.length - 1) return f(x);
    var i, n = s[k], ret = Array(n);
    for(i = n - 1; i >= 0; i--)ret[i] = _foreach2(x[i], s, k + 1, f);
    return ret;
};
/*numeric.anyV = numeric.mapreduce('if(xi) return true;','false');
numeric.allV = numeric.mapreduce('if(!xi) return false;','true');
numeric.any = function(x) { if(typeof x.length === "undefined") return x; return numeric.anyV(x); }
numeric.all = function(x) { if(typeof x.length === "undefined") return x; return numeric.allV(x); }*/ numeric.ops2 = {
    add: '+',
    sub: '-',
    mul: '*',
    div: '/',
    mod: '%',
    and: '&&',
    or: '||',
    eq: '===',
    neq: '!==',
    lt: '<',
    gt: '>',
    leq: '<=',
    geq: '>=',
    band: '&',
    bor: '|',
    bxor: '^',
    lshift: '<<',
    rshift: '>>',
    rrshift: '>>>'
};
numeric.opseq = {
    addeq: '+=',
    subeq: '-=',
    muleq: '*=',
    diveq: '/=',
    modeq: '%=',
    lshifteq: '<<=',
    rshifteq: '>>=',
    rrshifteq: '>>>=',
    bandeq: '&=',
    boreq: '|=',
    bxoreq: '^='
};
numeric.mathfuns = [
    'abs',
    'acos',
    'asin',
    'atan',
    'ceil',
    'cos',
    'exp',
    'floor',
    'log',
    'round',
    'sin',
    'sqrt',
    'tan',
    'isNaN',
    'isFinite'
];
numeric.mathfuns2 = [
    'atan2',
    'pow',
    'max',
    'min'
];
numeric.ops1 = {
    neg: '-',
    not: '!',
    bnot: '~',
    clone: ''
};
numeric.mapreducers = {
    any: [
        'if(xi) return true;',
        'var accum = false;'
    ],
    all: [
        'if(!xi) return false;',
        'var accum = true;'
    ],
    sum: [
        'accum += xi;',
        'var accum = 0;'
    ],
    prod: [
        'accum *= xi;',
        'var accum = 1;'
    ],
    norm2Squared: [
        'accum += xi*xi;',
        'var accum = 0;'
    ],
    norminf: [
        'accum = max(accum,abs(xi));',
        'var accum = 0, max = Math.max, abs = Math.abs;'
    ],
    norm1: [
        'accum += abs(xi)',
        'var accum = 0, abs = Math.abs;'
    ],
    sup: [
        'accum = max(accum,xi);',
        'var accum = -Infinity, max = Math.max;'
    ],
    inf: [
        'accum = min(accum,xi);',
        'var accum = Infinity, min = Math.min;'
    ]
};
(function() {
    var i, o;
    for(i = 0; i < numeric.mathfuns2.length; ++i){
        o = numeric.mathfuns2[i];
        numeric.ops2[o] = o;
    }
    for(i in numeric.ops2)if (numeric.ops2.hasOwnProperty(i)) {
        o = numeric.ops2[i];
        var code, codeeq, setup = '';
        if (numeric.myIndexOf.call(numeric.mathfuns2, i) !== -1) {
            setup = 'var ' + o + ' = Math.' + o + ';\n';
            code = function(r, x, y) {
                return r + ' = ' + o + '(' + x + ',' + y + ')';
            };
            codeeq = function(x, y) {
                return x + ' = ' + o + '(' + x + ',' + y + ')';
            };
        } else {
            code = function(r, x, y) {
                return r + ' = ' + x + ' ' + o + ' ' + y;
            };
            if (numeric.opseq.hasOwnProperty(i + 'eq')) codeeq = function(x, y) {
                return x + ' ' + o + '= ' + y;
            };
            else codeeq = function(x, y) {
                return x + ' = ' + x + ' ' + o + ' ' + y;
            };
        }
        numeric[i + 'VV'] = numeric.pointwise2([
            'x[i]',
            'y[i]'
        ], code('ret[i]', 'x[i]', 'y[i]'), setup);
        numeric[i + 'SV'] = numeric.pointwise2([
            'x',
            'y[i]'
        ], code('ret[i]', 'x', 'y[i]'), setup);
        numeric[i + 'VS'] = numeric.pointwise2([
            'x[i]',
            'y'
        ], code('ret[i]', 'x[i]', 'y'), setup);
        numeric[i] = Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric." + i + 'VV, VS = numeric.' + i + 'VS, SV = numeric.' + i + 'SV;\n' + 'var dim = numeric.dim;\n' + 'for(i=1;i!==n;++i) { \n' + '  y = arguments[i];\n' + '  if(typeof x === "object") {\n' + '      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n' + '      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n' + '  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n' + '  else ' + codeeq('x', 'y') + '\n' + '}\nreturn x;\n');
        numeric[o] = numeric[i];
        numeric[i + 'eqV'] = numeric.pointwise2([
            'ret[i]',
            'x[i]'
        ], codeeq('ret[i]', 'x[i]'), setup);
        numeric[i + 'eqS'] = numeric.pointwise2([
            'ret[i]',
            'x'
        ], codeeq('ret[i]', 'x'), setup);
        numeric[i + 'eq'] = Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric." + i + 'eqV, S = numeric.' + i + 'eqS\n' + 'var s = numeric.dim(x);\n' + 'for(i=1;i!==n;++i) { \n' + '  y = arguments[i];\n' + '  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n' + '  else numeric._biforeach(x,y,s,0,S);\n' + '}\nreturn x;\n');
    }
    for(i = 0; i < numeric.mathfuns2.length; ++i){
        o = numeric.mathfuns2[i];
        delete numeric.ops2[o];
    }
    for(i = 0; i < numeric.mathfuns.length; ++i){
        o = numeric.mathfuns[i];
        numeric.ops1[o] = o;
    }
    for(i in numeric.ops1)if (numeric.ops1.hasOwnProperty(i)) {
        setup = '';
        o = numeric.ops1[i];
        if (numeric.myIndexOf.call(numeric.mathfuns, i) !== -1) {
            if (Math.hasOwnProperty(o)) setup = 'var ' + o + ' = Math.' + o + ';\n';
        }
        numeric[i + 'eqV'] = numeric.pointwise2([
            'ret[i]'
        ], 'ret[i] = ' + o + '(ret[i]);', setup);
        numeric[i + 'eq'] = Function('x', 'if(typeof x !== "object") return ' + o + 'x\n' + 'var i;\n' + 'var V = numeric.' + i + 'eqV;\n' + 'var s = numeric.dim(x);\n' + 'numeric._foreach(x,s,0,V);\n' + 'return x;\n');
        numeric[i + 'V'] = numeric.pointwise2([
            'x[i]'
        ], 'ret[i] = ' + o + '(x[i]);', setup);
        numeric[i] = Function('x', 'if(typeof x !== "object") return ' + o + '(x)\n' + 'var i;\n' + 'var V = numeric.' + i + 'V;\n' + 'var s = numeric.dim(x);\n' + 'return numeric._foreach2(x,s,0,V);\n');
    }
    for(i = 0; i < numeric.mathfuns.length; ++i){
        o = numeric.mathfuns[i];
        delete numeric.ops1[o];
    }
    for(i in numeric.mapreducers)if (numeric.mapreducers.hasOwnProperty(i)) {
        o = numeric.mapreducers[i];
        numeric[i + 'V'] = numeric.mapreduce2(o[0], o[1]);
        numeric[i] = Function('x', 's', 'k', o[1] + 'if(typeof x !== "object") {' + '    xi = x;\n' + o[0] + ';\n' + '    return accum;\n' + '}' + 'if(typeof s === "undefined") s = numeric.dim(x);\n' + 'if(typeof k === "undefined") k = 0;\n' + 'if(k === s.length-1) return numeric.' + i + 'V(x);\n' + 'var xi;\n' + 'var n = x.length, i;\n' + 'for(i=n-1;i!==-1;--i) {\n' + '   xi = arguments.callee(x[i]);\n' + o[0] + ';\n' + '}\n' + 'return accum;\n');
    }
})();
numeric.truncVV = numeric.pointwise([
    'x[i]',
    'y[i]'
], 'ret[i] = round(x[i]/y[i])*y[i];', 'var round = Math.round;');
numeric.truncVS = numeric.pointwise([
    'x[i]',
    'y'
], 'ret[i] = round(x[i]/y)*y;', 'var round = Math.round;');
numeric.truncSV = numeric.pointwise([
    'x',
    'y[i]'
], 'ret[i] = round(x/y[i])*y[i];', 'var round = Math.round;');
numeric.trunc = function trunc(x, y) {
    if (typeof x === "object") {
        if (typeof y === "object") return numeric.truncVV(x, y);
        return numeric.truncVS(x, y);
    }
    if (typeof y === "object") return numeric.truncSV(x, y);
    return Math.round(x / y) * y;
};
numeric.inv = function inv(x) {
    var s = numeric.dim(x), abs = Math.abs, m = s[0], n = s[1];
    var A = numeric.clone(x), Ai, Aj;
    var I = numeric.identity(m), Ii, Ij;
    var i, j, k, x;
    for(j = 0; j < n; ++j){
        var i0 = -1;
        var v0 = -1;
        for(i = j; i !== m; ++i){
            k = abs(A[i][j]);
            if (k > v0) {
                i0 = i;
                v0 = k;
            }
        }
        Aj = A[i0];
        A[i0] = A[j];
        A[j] = Aj;
        Ij = I[i0];
        I[i0] = I[j];
        I[j] = Ij;
        x = Aj[j];
        for(k = j; k !== n; ++k)Aj[k] /= x;
        for(k = n - 1; k !== -1; --k)Ij[k] /= x;
        for(i = m - 1; i !== -1; --i)if (i !== j) {
            Ai = A[i];
            Ii = I[i];
            x = Ai[j];
            for(k = j + 1; k !== n; ++k)Ai[k] -= Aj[k] * x;
            for(k = n - 1; k > 0; --k){
                Ii[k] -= Ij[k] * x;
                --k;
                Ii[k] -= Ij[k] * x;
            }
            if (k === 0) Ii[0] -= Ij[0] * x;
        }
    }
    return I;
};
numeric.det = function det(x) {
    var s = numeric.dim(x);
    if (s.length !== 2 || s[0] !== s[1]) throw new Error('numeric: det() only works on square matrices');
    var n = s[0], ret = 1, i, j, k, A = numeric.clone(x), Aj, Ai, alpha, temp, k1, k2, k3;
    for(j = 0; j < n - 1; j++){
        k = j;
        for(i = j + 1; i < n; i++)if (Math.abs(A[i][j]) > Math.abs(A[k][j])) k = i;
        if (k !== j) {
            temp = A[k];
            A[k] = A[j];
            A[j] = temp;
            ret *= -1;
        }
        Aj = A[j];
        for(i = j + 1; i < n; i++){
            Ai = A[i];
            alpha = Ai[j] / Aj[j];
            for(k = j + 1; k < n - 1; k += 2){
                k1 = k + 1;
                Ai[k] -= Aj[k] * alpha;
                Ai[k1] -= Aj[k1] * alpha;
            }
            if (k !== n) Ai[k] -= Aj[k] * alpha;
        }
        if (Aj[j] === 0) return 0;
        ret *= Aj[j];
    }
    return ret * A[j][j];
};
numeric.transpose = function transpose(x) {
    var i, j, m = x.length, n = x[0].length, ret = Array(n), A0, A1, Bj;
    for(j = 0; j < n; j++)ret[j] = Array(m);
    for(i = m - 1; i >= 1; i -= 2){
        A1 = x[i];
        A0 = x[i - 1];
        for(j = n - 1; j >= 1; --j){
            Bj = ret[j];
            Bj[i] = A1[j];
            Bj[i - 1] = A0[j];
            --j;
            Bj = ret[j];
            Bj[i] = A1[j];
            Bj[i - 1] = A0[j];
        }
        if (j === 0) {
            Bj = ret[0];
            Bj[i] = A1[0];
            Bj[i - 1] = A0[0];
        }
    }
    if (i === 0) {
        A0 = x[0];
        for(j = n - 1; j >= 1; --j){
            ret[j][0] = A0[j];
            --j;
            ret[j][0] = A0[j];
        }
        if (j === 0) ret[0][0] = A0[0];
    }
    return ret;
};
numeric.negtranspose = function negtranspose(x) {
    var i, j, m = x.length, n = x[0].length, ret = Array(n), A0, A1, Bj;
    for(j = 0; j < n; j++)ret[j] = Array(m);
    for(i = m - 1; i >= 1; i -= 2){
        A1 = x[i];
        A0 = x[i - 1];
        for(j = n - 1; j >= 1; --j){
            Bj = ret[j];
            Bj[i] = -A1[j];
            Bj[i - 1] = -A0[j];
            --j;
            Bj = ret[j];
            Bj[i] = -A1[j];
            Bj[i - 1] = -A0[j];
        }
        if (j === 0) {
            Bj = ret[0];
            Bj[i] = -A1[0];
            Bj[i - 1] = -A0[0];
        }
    }
    if (i === 0) {
        A0 = x[0];
        for(j = n - 1; j >= 1; --j){
            ret[j][0] = -A0[j];
            --j;
            ret[j][0] = -A0[j];
        }
        if (j === 0) ret[0][0] = -A0[0];
    }
    return ret;
};
numeric._random = function _random(s, k) {
    var i, n = s[k], ret = Array(n), rnd;
    if (k === s.length - 1) {
        rnd = Math.random;
        for(i = n - 1; i >= 1; i -= 2){
            ret[i] = rnd();
            ret[i - 1] = rnd();
        }
        if (i === 0) ret[0] = rnd();
        return ret;
    }
    for(i = n - 1; i >= 0; i--)ret[i] = _random(s, k + 1);
    return ret;
};
numeric.random = function random(s) {
    return numeric._random(s, 0);
};
numeric.norm2 = function norm2(x) {
    return Math.sqrt(numeric.norm2Squared(x));
};
numeric.linspace = function linspace(a, b, n) {
    if (typeof n === "undefined") n = Math.max(Math.round(b - a) + 1, 1);
    if (n < 2) return n === 1 ? [
        a
    ] : [];
    var i, ret = Array(n);
    n--;
    for(i = n; i >= 0; i--)ret[i] = (i * b + (n - i) * a) / n;
    return ret;
};
numeric.getBlock = function getBlock(x, from, to) {
    var s = numeric.dim(x);
    function foo(x, k) {
        var i, a = from[k], n = to[k] - a, ret = Array(n);
        if (k === s.length - 1) {
            for(i = n; i >= 0; i--)ret[i] = x[i + a];
            return ret;
        }
        for(i = n; i >= 0; i--)ret[i] = foo(x[i + a], k + 1);
        return ret;
    }
    return foo(x, 0);
};
numeric.setBlock = function setBlock(x, from, to, B) {
    var s = numeric.dim(x);
    function foo(x, y, k) {
        var i, a = from[k], n = to[k] - a;
        if (k === s.length - 1) for(i = n; i >= 0; i--)x[i + a] = y[i];
        for(i = n; i >= 0; i--)foo(x[i + a], y[i], k + 1);
    }
    foo(x, B, 0);
    return x;
};
numeric.getRange = function getRange(A, I, J) {
    var m = I.length, n = J.length;
    var i, j;
    var B = Array(m), Bi, AI;
    for(i = m - 1; i !== -1; --i){
        B[i] = Array(n);
        Bi = B[i];
        AI = A[I[i]];
        for(j = n - 1; j !== -1; --j)Bi[j] = AI[J[j]];
    }
    return B;
};
numeric.blockMatrix = function blockMatrix(X) {
    var s = numeric.dim(X);
    if (s.length < 4) return numeric.blockMatrix([
        X
    ]);
    var m = s[0], n = s[1], M, N, i, j, Xij;
    M = 0;
    N = 0;
    for(i = 0; i < m; ++i)M += X[i][0].length;
    for(j = 0; j < n; ++j)N += X[0][j][0].length;
    var Z = Array(M);
    for(i = 0; i < M; ++i)Z[i] = Array(N);
    var I = 0, J, ZI, k, l, Xijk;
    for(i = 0; i < m; ++i){
        J = N;
        for(j = n - 1; j !== -1; --j){
            Xij = X[i][j];
            J -= Xij[0].length;
            for(k = Xij.length - 1; k !== -1; --k){
                Xijk = Xij[k];
                ZI = Z[I + k];
                for(l = Xijk.length - 1; l !== -1; --l)ZI[J + l] = Xijk[l];
            }
        }
        I += X[i][0].length;
    }
    return Z;
};
numeric.tensor = function tensor(x, y) {
    if (typeof x === "number" || typeof y === "number") return numeric.mul(x, y);
    var s1 = numeric.dim(x), s2 = numeric.dim(y);
    if (s1.length !== 1 || s2.length !== 1) throw new Error('numeric: tensor product is only defined for vectors');
    var m = s1[0], n = s2[0], A = Array(m), Ai, i, j, xi;
    for(i = m - 1; i >= 0; i--){
        Ai = Array(n);
        xi = x[i];
        for(j = n - 1; j >= 3; --j){
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
        }
        while(j >= 0){
            Ai[j] = xi * y[j];
            --j;
        }
        A[i] = Ai;
    }
    return A;
};
// 3. The Tensor type T
numeric.T = function T1(x, y) {
    this.x = x;
    this.y = y;
};
numeric.t = function t(x, y) {
    return new numeric.T(x, y);
};
numeric.Tbinop = function Tbinop(rr, rc, cr, cc, setup) {
    var io = numeric.indexOf;
    if (typeof setup !== "string") {
        var k;
        setup = '';
        for(k in numeric)if (numeric.hasOwnProperty(k) && (rr.indexOf(k) >= 0 || rc.indexOf(k) >= 0 || cr.indexOf(k) >= 0 || cc.indexOf(k) >= 0) && k.length > 1) setup += 'var ' + k + ' = numeric.' + k + ';\n';
    }
    return Function([
        'y'
    ], "var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n" + setup + '\n' + 'if(x.y) {' + '  if(y.y) {' + '    return new numeric.T(' + cc + ');\n' + '  }\n' + '  return new numeric.T(' + cr + ');\n' + '}\n' + 'if(y.y) {\n' + '  return new numeric.T(' + rc + ');\n' + '}\n' + 'return new numeric.T(' + rr + ');\n');
};
numeric.T.prototype.add = numeric.Tbinop('add(x.x,y.x)', 'add(x.x,y.x),y.y', 'add(x.x,y.x),x.y', 'add(x.x,y.x),add(x.y,y.y)');
numeric.T.prototype.sub = numeric.Tbinop('sub(x.x,y.x)', 'sub(x.x,y.x),neg(y.y)', 'sub(x.x,y.x),x.y', 'sub(x.x,y.x),sub(x.y,y.y)');
numeric.T.prototype.mul = numeric.Tbinop('mul(x.x,y.x)', 'mul(x.x,y.x),mul(x.x,y.y)', 'mul(x.x,y.x),mul(x.y,y.x)', 'sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))');
numeric.T.prototype.reciprocal = function reciprocal() {
    var mul = numeric.mul, div = numeric.div;
    if (this.y) {
        var d = numeric.add(mul(this.x, this.x), mul(this.y, this.y));
        return new numeric.T(div(this.x, d), div(numeric.neg(this.y), d));
    }
    return new T(div(1, this.x));
};
numeric.T.prototype.div = function div(y) {
    if (!(y instanceof numeric.T)) y = new numeric.T(y);
    if (y.y) return this.mul(y.reciprocal());
    var div = numeric.div;
    if (this.y) return new numeric.T(div(this.x, y.x), div(this.y, y.x));
    return new numeric.T(div(this.x, y.x));
};
numeric.T.prototype.dot = numeric.Tbinop('dot(x.x,y.x)', 'dot(x.x,y.x),dot(x.x,y.y)', 'dot(x.x,y.x),dot(x.y,y.x)', 'sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))');
numeric.T.prototype.transpose = function transpose() {
    var t = numeric.transpose, x = this.x, y = this.y;
    if (y) return new numeric.T(t(x), t(y));
    return new numeric.T(t(x));
};
numeric.T.prototype.transjugate = function transjugate() {
    var t = numeric.transpose, x = this.x, y = this.y;
    if (y) return new numeric.T(t(x), numeric.negtranspose(y));
    return new numeric.T(t(x));
};
numeric.Tunop = function Tunop(r, c, s) {
    if (typeof s !== "string") s = '';
    return Function('var x = this;\n' + s + '\n' + 'if(x.y) {' + '  ' + c + ';\n' + '}\n' + r + ';\n');
};
numeric.T.prototype.exp = numeric.Tunop('return new numeric.T(ex)', 'return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))', 'var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;');
numeric.T.prototype.conj = numeric.Tunop('return new numeric.T(x.x);', 'return new numeric.T(x.x,numeric.neg(x.y));');
numeric.T.prototype.neg = numeric.Tunop('return new numeric.T(neg(x.x));', 'return new numeric.T(neg(x.x),neg(x.y));', 'var neg = numeric.neg;');
numeric.T.prototype.sin = numeric.Tunop('return new numeric.T(numeric.sin(x.x))', 'return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));');
numeric.T.prototype.cos = numeric.Tunop('return new numeric.T(numeric.cos(x.x))', 'return x.exp().add(x.neg().exp()).div(2);');
numeric.T.prototype.abs = numeric.Tunop('return new numeric.T(numeric.abs(x.x));', 'return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));', 'var mul = numeric.mul;');
numeric.T.prototype.log = numeric.Tunop('return new numeric.T(numeric.log(x.x));', "var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);");
numeric.T.prototype.norm2 = numeric.Tunop('return numeric.norm2(x.x);', "var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));");
numeric.T.prototype.inv = function inv() {
    var A = this;
    if (typeof A.y === "undefined") return new numeric.T(numeric.inv(A.x));
    var n = A.x.length, i, j, k;
    var Rx = numeric.identity(n), Ry = numeric.rep([
        n,
        n
    ], 0);
    var Ax = numeric.clone(A.x), Ay = numeric.clone(A.y);
    var Aix, Aiy, Ajx, Ajy, Rix, Riy, Rjx, Rjy;
    var i, j, k, d, d1, ax, ay, bx, by, temp;
    for(i = 0; i < n; i++){
        ax = Ax[i][i];
        ay = Ay[i][i];
        d = ax * ax + ay * ay;
        k = i;
        for(j = i + 1; j < n; j++){
            ax = Ax[j][i];
            ay = Ay[j][i];
            d1 = ax * ax + ay * ay;
            if (d1 > d) {
                k = j;
                d = d1;
            }
        }
        if (k !== i) {
            temp = Ax[i];
            Ax[i] = Ax[k];
            Ax[k] = temp;
            temp = Ay[i];
            Ay[i] = Ay[k];
            Ay[k] = temp;
            temp = Rx[i];
            Rx[i] = Rx[k];
            Rx[k] = temp;
            temp = Ry[i];
            Ry[i] = Ry[k];
            Ry[k] = temp;
        }
        Aix = Ax[i];
        Aiy = Ay[i];
        Rix = Rx[i];
        Riy = Ry[i];
        ax = Aix[i];
        ay = Aiy[i];
        for(j = i + 1; j < n; j++){
            bx = Aix[j];
            by = Aiy[j];
            Aix[j] = (bx * ax + by * ay) / d;
            Aiy[j] = (by * ax - bx * ay) / d;
        }
        for(j = 0; j < n; j++){
            bx = Rix[j];
            by = Riy[j];
            Rix[j] = (bx * ax + by * ay) / d;
            Riy[j] = (by * ax - bx * ay) / d;
        }
        for(j = i + 1; j < n; j++){
            Ajx = Ax[j];
            Ajy = Ay[j];
            Rjx = Rx[j];
            Rjy = Ry[j];
            ax = Ajx[i];
            ay = Ajy[i];
            for(k = i + 1; k < n; k++){
                bx = Aix[k];
                by = Aiy[k];
                Ajx[k] -= bx * ax - by * ay;
                Ajy[k] -= by * ax + bx * ay;
            }
            for(k = 0; k < n; k++){
                bx = Rix[k];
                by = Riy[k];
                Rjx[k] -= bx * ax - by * ay;
                Rjy[k] -= by * ax + bx * ay;
            }
        }
    }
    for(i = n - 1; i > 0; i--){
        Rix = Rx[i];
        Riy = Ry[i];
        for(j = i - 1; j >= 0; j--){
            Rjx = Rx[j];
            Rjy = Ry[j];
            ax = Ax[j][i];
            ay = Ay[j][i];
            for(k = n - 1; k >= 0; k--){
                bx = Rix[k];
                by = Riy[k];
                Rjx[k] -= ax * bx - ay * by;
                Rjy[k] -= ax * by + ay * bx;
            }
        }
    }
    return new numeric.T(Rx, Ry);
};
numeric.T.prototype.get = function get(i) {
    var x = this.x, y = this.y, k = 0, ik, n = i.length;
    if (y) {
        while(k < n){
            ik = i[k];
            x = x[ik];
            y = y[ik];
            k++;
        }
        return new numeric.T(x, y);
    }
    while(k < n){
        ik = i[k];
        x = x[ik];
        k++;
    }
    return new numeric.T(x);
};
numeric.T.prototype.set = function set(i, v) {
    var x = this.x, y = this.y, k = 0, ik, n = i.length, vx = v.x, vy = v.y;
    if (n === 0) {
        if (vy) this.y = vy;
        else if (y) this.y = undefined;
        this.x = x;
        return this;
    }
    if (vy) {
        if (y) ;
        else {
            y = numeric.rep(numeric.dim(x), 0);
            this.y = y;
        }
        while(k < n - 1){
            ik = i[k];
            x = x[ik];
            y = y[ik];
            k++;
        }
        ik = i[k];
        x[ik] = vx;
        y[ik] = vy;
        return this;
    }
    if (y) {
        while(k < n - 1){
            ik = i[k];
            x = x[ik];
            y = y[ik];
            k++;
        }
        ik = i[k];
        x[ik] = vx;
        if (vx instanceof Array) y[ik] = numeric.rep(numeric.dim(vx), 0);
        else y[ik] = 0;
        return this;
    }
    while(k < n - 1){
        ik = i[k];
        x = x[ik];
        k++;
    }
    ik = i[k];
    x[ik] = vx;
    return this;
};
numeric.T.prototype.getRows = function getRows(i0, i1) {
    var n = i1 - i0 + 1, j;
    var rx = Array(n), ry, x = this.x, y = this.y;
    for(j = i0; j <= i1; j++)rx[j - i0] = x[j];
    if (y) {
        ry = Array(n);
        for(j = i0; j <= i1; j++)ry[j - i0] = y[j];
        return new numeric.T(rx, ry);
    }
    return new numeric.T(rx);
};
numeric.T.prototype.setRows = function setRows(i0, i1, A) {
    var j;
    var rx = this.x, ry = this.y, x = A.x, y = A.y;
    for(j = i0; j <= i1; j++)rx[j] = x[j - i0];
    if (y) {
        if (!ry) {
            ry = numeric.rep(numeric.dim(rx), 0);
            this.y = ry;
        }
        for(j = i0; j <= i1; j++)ry[j] = y[j - i0];
    } else if (ry) for(j = i0; j <= i1; j++)ry[j] = numeric.rep([
        x[j - i0].length
    ], 0);
    return this;
};
numeric.T.prototype.getRow = function getRow(k) {
    var x = this.x, y = this.y;
    if (y) return new numeric.T(x[k], y[k]);
    return new numeric.T(x[k]);
};
numeric.T.prototype.setRow = function setRow(i, v) {
    var rx = this.x, ry = this.y, x = v.x, y = v.y;
    rx[i] = x;
    if (y) {
        if (!ry) {
            ry = numeric.rep(numeric.dim(rx), 0);
            this.y = ry;
        }
        ry[i] = y;
    } else if (ry) ry = numeric.rep([
        x.length
    ], 0);
    return this;
};
numeric.T.prototype.getBlock = function getBlock(from, to) {
    var x = this.x, y = this.y, b = numeric.getBlock;
    if (y) return new numeric.T(b(x, from, to), b(y, from, to));
    return new numeric.T(b(x, from, to));
};
numeric.T.prototype.setBlock = function setBlock(from, to, A) {
    if (!(A instanceof numeric.T)) A = new numeric.T(A);
    var x = this.x, y = this.y, b = numeric.setBlock, Ax = A.x, Ay = A.y;
    if (Ay) {
        if (!y) {
            this.y = numeric.rep(numeric.dim(this), 0);
            y = this.y;
        }
        b(x, from, to, Ax);
        b(y, from, to, Ay);
        return this;
    }
    b(x, from, to, Ax);
    if (y) b(y, from, to, numeric.rep(numeric.dim(Ax), 0));
};
numeric.T.rep = function rep(s, v) {
    var T1 = numeric.T;
    if (!(v instanceof T1)) v = new T1(v);
    var x = v.x, y = v.y, r = numeric.rep;
    if (y) return new T1(r(s, x), r(s, y));
    return new T1(r(s, x));
};
numeric.T.diag = function diag(d) {
    if (!(d instanceof numeric.T)) d = new numeric.T(d);
    var x = d.x, y = d.y, diag = numeric.diag;
    if (y) return new numeric.T(diag(x), diag(y));
    return new numeric.T(diag(x));
};
numeric.T.eig = function eig() {
    if (this.y) throw new Error('eig: not implemented for complex matrices.');
    return numeric.eig(this.x);
};
numeric.T.identity = function identity(n) {
    return new numeric.T(numeric.identity(n));
};
numeric.T.prototype.getDiag = function getDiag() {
    var n = numeric;
    var x = this.x, y = this.y;
    if (y) return new n.T(n.getDiag(x), n.getDiag(y));
    return new n.T(n.getDiag(x));
};
// 4. Eigenvalues of real matrices
numeric.house = function house(x) {
    var v = numeric.clone(x);
    var s = x[0] >= 0 ? 1 : -1;
    var alpha = s * numeric.norm2(x);
    v[0] += alpha;
    var foo = numeric.norm2(v);
    if (foo === 0) throw new Error('eig: internal error');
    return numeric.div(v, foo);
};
numeric.toUpperHessenberg = function toUpperHessenberg(me) {
    var s = numeric.dim(me);
    if (s.length !== 2 || s[0] !== s[1]) throw new Error('numeric: toUpperHessenberg() only works on square matrices');
    var m = s[0], i, j, k, x, v, A = numeric.clone(me), B, C, Ai, Ci, Q = numeric.identity(m), Qi;
    for(j = 0; j < m - 2; j++){
        x = Array(m - j - 1);
        for(i = j + 1; i < m; i++)x[i - j - 1] = A[i][j];
        if (numeric.norm2(x) > 0) {
            v = numeric.house(x);
            B = numeric.getBlock(A, [
                j + 1,
                j
            ], [
                m - 1,
                m - 1
            ]);
            C = numeric.tensor(v, numeric.dot(v, B));
            for(i = j + 1; i < m; i++){
                Ai = A[i];
                Ci = C[i - j - 1];
                for(k = j; k < m; k++)Ai[k] -= 2 * Ci[k - j];
            }
            B = numeric.getBlock(A, [
                0,
                j + 1
            ], [
                m - 1,
                m - 1
            ]);
            C = numeric.tensor(numeric.dot(B, v), v);
            for(i = 0; i < m; i++){
                Ai = A[i];
                Ci = C[i];
                for(k = j + 1; k < m; k++)Ai[k] -= 2 * Ci[k - j - 1];
            }
            B = Array(m - j - 1);
            for(i = j + 1; i < m; i++)B[i - j - 1] = Q[i];
            C = numeric.tensor(v, numeric.dot(v, B));
            for(i = j + 1; i < m; i++){
                Qi = Q[i];
                Ci = C[i - j - 1];
                for(k = 0; k < m; k++)Qi[k] -= 2 * Ci[k];
            }
        }
    }
    return {
        H: A,
        Q: Q
    };
};
numeric.epsilon = 2.220446049250313e-16;
numeric.QRFrancis = function(H, maxiter) {
    if (typeof maxiter === "undefined") maxiter = 10000;
    H = numeric.clone(H);
    var H0 = numeric.clone(H);
    var s = numeric.dim(H), m = s[0], x, v, a, b, c, d, det, tr, Hloc, Q = numeric.identity(m), Qi, Hi, B, C, Ci, i, j, k, iter;
    if (m < 3) return {
        Q: Q,
        B: [
            [
                0,
                m - 1
            ]
        ]
    };
    var epsilon = numeric.epsilon;
    for(iter = 0; iter < maxiter; iter++){
        for(j = 0; j < m - 1; j++)if (Math.abs(H[j + 1][j]) < epsilon * (Math.abs(H[j][j]) + Math.abs(H[j + 1][j + 1]))) {
            var QH1 = numeric.QRFrancis(numeric.getBlock(H, [
                0,
                0
            ], [
                j,
                j
            ]), maxiter);
            var QH2 = numeric.QRFrancis(numeric.getBlock(H, [
                j + 1,
                j + 1
            ], [
                m - 1,
                m - 1
            ]), maxiter);
            B = Array(j + 1);
            for(i = 0; i <= j; i++)B[i] = Q[i];
            C = numeric.dot(QH1.Q, B);
            for(i = 0; i <= j; i++)Q[i] = C[i];
            B = Array(m - j - 1);
            for(i = j + 1; i < m; i++)B[i - j - 1] = Q[i];
            C = numeric.dot(QH2.Q, B);
            for(i = j + 1; i < m; i++)Q[i] = C[i - j - 1];
            return {
                Q: Q,
                B: QH1.B.concat(numeric.add(QH2.B, j + 1))
            };
        }
        a = H[m - 2][m - 2];
        b = H[m - 2][m - 1];
        c = H[m - 1][m - 2];
        d = H[m - 1][m - 1];
        tr = a + d;
        det = a * d - b * c;
        Hloc = numeric.getBlock(H, [
            0,
            0
        ], [
            2,
            2
        ]);
        if (tr * tr >= 4 * det) {
            var s1, s2;
            s1 = 0.5 * (tr + Math.sqrt(tr * tr - 4 * det));
            s2 = 0.5 * (tr - Math.sqrt(tr * tr - 4 * det));
            Hloc = numeric.add(numeric.sub(numeric.dot(Hloc, Hloc), numeric.mul(Hloc, s1 + s2)), numeric.diag(numeric.rep([
                3
            ], s1 * s2)));
        } else Hloc = numeric.add(numeric.sub(numeric.dot(Hloc, Hloc), numeric.mul(Hloc, tr)), numeric.diag(numeric.rep([
            3
        ], det)));
        x = [
            Hloc[0][0],
            Hloc[1][0],
            Hloc[2][0]
        ];
        v = numeric.house(x);
        B = [
            H[0],
            H[1],
            H[2]
        ];
        C = numeric.tensor(v, numeric.dot(v, B));
        for(i = 0; i < 3; i++){
            Hi = H[i];
            Ci = C[i];
            for(k = 0; k < m; k++)Hi[k] -= 2 * Ci[k];
        }
        B = numeric.getBlock(H, [
            0,
            0
        ], [
            m - 1,
            2
        ]);
        C = numeric.tensor(numeric.dot(B, v), v);
        for(i = 0; i < m; i++){
            Hi = H[i];
            Ci = C[i];
            for(k = 0; k < 3; k++)Hi[k] -= 2 * Ci[k];
        }
        B = [
            Q[0],
            Q[1],
            Q[2]
        ];
        C = numeric.tensor(v, numeric.dot(v, B));
        for(i = 0; i < 3; i++){
            Qi = Q[i];
            Ci = C[i];
            for(k = 0; k < m; k++)Qi[k] -= 2 * Ci[k];
        }
        var J;
        for(j = 0; j < m - 2; j++){
            for(k = j; k <= j + 1; k++)if (Math.abs(H[k + 1][k]) < epsilon * (Math.abs(H[k][k]) + Math.abs(H[k + 1][k + 1]))) {
                var QH1 = numeric.QRFrancis(numeric.getBlock(H, [
                    0,
                    0
                ], [
                    k,
                    k
                ]), maxiter);
                var QH2 = numeric.QRFrancis(numeric.getBlock(H, [
                    k + 1,
                    k + 1
                ], [
                    m - 1,
                    m - 1
                ]), maxiter);
                B = Array(k + 1);
                for(i = 0; i <= k; i++)B[i] = Q[i];
                C = numeric.dot(QH1.Q, B);
                for(i = 0; i <= k; i++)Q[i] = C[i];
                B = Array(m - k - 1);
                for(i = k + 1; i < m; i++)B[i - k - 1] = Q[i];
                C = numeric.dot(QH2.Q, B);
                for(i = k + 1; i < m; i++)Q[i] = C[i - k - 1];
                return {
                    Q: Q,
                    B: QH1.B.concat(numeric.add(QH2.B, k + 1))
                };
            }
            J = Math.min(m - 1, j + 3);
            x = Array(J - j);
            for(i = j + 1; i <= J; i++)x[i - j - 1] = H[i][j];
            v = numeric.house(x);
            B = numeric.getBlock(H, [
                j + 1,
                j
            ], [
                J,
                m - 1
            ]);
            C = numeric.tensor(v, numeric.dot(v, B));
            for(i = j + 1; i <= J; i++){
                Hi = H[i];
                Ci = C[i - j - 1];
                for(k = j; k < m; k++)Hi[k] -= 2 * Ci[k - j];
            }
            B = numeric.getBlock(H, [
                0,
                j + 1
            ], [
                m - 1,
                J
            ]);
            C = numeric.tensor(numeric.dot(B, v), v);
            for(i = 0; i < m; i++){
                Hi = H[i];
                Ci = C[i];
                for(k = j + 1; k <= J; k++)Hi[k] -= 2 * Ci[k - j - 1];
            }
            B = Array(J - j);
            for(i = j + 1; i <= J; i++)B[i - j - 1] = Q[i];
            C = numeric.tensor(v, numeric.dot(v, B));
            for(i = j + 1; i <= J; i++){
                Qi = Q[i];
                Ci = C[i - j - 1];
                for(k = 0; k < m; k++)Qi[k] -= 2 * Ci[k];
            }
        }
    }
    throw new Error('numeric: eigenvalue iteration does not converge -- increase maxiter?');
};
numeric.eig = function eig(A, maxiter) {
    var QH = numeric.toUpperHessenberg(A);
    var QB = numeric.QRFrancis(QH.H, maxiter);
    var T1 = numeric.T;
    var n = A.length, i, k, flag = false, B = QB.B, H = numeric.dot(QB.Q, numeric.dot(QH.H, numeric.transpose(QB.Q)));
    var Q = new T1(numeric.dot(QB.Q, QH.Q)), Q0;
    var m = B.length, j;
    var a, b, c, d, p1, p2, disc, x, y, p, q, n1, n2;
    var sqrt = Math.sqrt;
    for(k = 0; k < m; k++){
        i = B[k][0];
        if (i === B[k][1]) ;
        else {
            j = i + 1;
            a = H[i][i];
            b = H[i][j];
            c = H[j][i];
            d = H[j][j];
            if (b === 0 && c === 0) continue;
            p1 = -a - d;
            p2 = a * d - b * c;
            disc = p1 * p1 - 4 * p2;
            if (disc >= 0) {
                if (p1 < 0) x = -0.5 * (p1 - sqrt(disc));
                else x = -0.5 * (p1 + sqrt(disc));
                n1 = (a - x) * (a - x) + b * b;
                n2 = c * c + (d - x) * (d - x);
                if (n1 > n2) {
                    n1 = sqrt(n1);
                    p = (a - x) / n1;
                    q = b / n1;
                } else {
                    n2 = sqrt(n2);
                    p = c / n2;
                    q = (d - x) / n2;
                }
                Q0 = new T1([
                    [
                        q,
                        -p
                    ],
                    [
                        p,
                        q
                    ]
                ]);
                Q.setRows(i, j, Q0.dot(Q.getRows(i, j)));
            } else {
                x = -0.5 * p1;
                y = 0.5 * sqrt(-disc);
                n1 = (a - x) * (a - x) + b * b;
                n2 = c * c + (d - x) * (d - x);
                if (n1 > n2) {
                    n1 = sqrt(n1 + y * y);
                    p = (a - x) / n1;
                    q = b / n1;
                    x = 0;
                    y /= n1;
                } else {
                    n2 = sqrt(n2 + y * y);
                    p = c / n2;
                    q = (d - x) / n2;
                    x = y / n2;
                    y = 0;
                }
                Q0 = new T1([
                    [
                        q,
                        -p
                    ],
                    [
                        p,
                        q
                    ]
                ], [
                    [
                        x,
                        y
                    ],
                    [
                        y,
                        -x
                    ]
                ]);
                Q.setRows(i, j, Q0.dot(Q.getRows(i, j)));
            }
        }
    }
    var R = Q.dot(A).dot(Q.transjugate()), n = A.length, E = numeric.T.identity(n);
    for(j = 0; j < n; j++){
        if (j > 0) for(k = j - 1; k >= 0; k--){
            var Rk = R.get([
                k,
                k
            ]), Rj = R.get([
                j,
                j
            ]);
            if (numeric.neq(Rk.x, Rj.x) || numeric.neq(Rk.y, Rj.y)) {
                x = R.getRow(k).getBlock([
                    k
                ], [
                    j - 1
                ]);
                y = E.getRow(j).getBlock([
                    k
                ], [
                    j - 1
                ]);
                E.set([
                    j,
                    k
                ], R.get([
                    k,
                    j
                ]).neg().sub(x.dot(y)).div(Rk.sub(Rj)));
            } else {
                E.setRow(j, E.getRow(k));
                continue;
            }
        }
    }
    for(j = 0; j < n; j++){
        x = E.getRow(j);
        E.setRow(j, x.div(x.norm2()));
    }
    E = E.transpose();
    E = Q.transjugate().dot(E);
    return {
        lambda: R.getDiag(),
        E: E
    };
};
// 5. Compressed Column Storage matrices
numeric.ccsSparse = function ccsSparse(A) {
    var m = A.length, n, foo, i, j, counts = [];
    for(i = m - 1; i !== -1; --i){
        foo = A[i];
        for(j in foo){
            j = parseInt(j);
            while(j >= counts.length)counts[counts.length] = 0;
            if (foo[j] !== 0) counts[j]++;
        }
    }
    var n = counts.length;
    var Ai = Array(n + 1);
    Ai[0] = 0;
    for(i = 0; i < n; ++i)Ai[i + 1] = Ai[i] + counts[i];
    var Aj = Array(Ai[n]), Av = Array(Ai[n]);
    for(i = m - 1; i !== -1; --i){
        foo = A[i];
        for(j in foo)if (foo[j] !== 0) {
            counts[j]--;
            Aj[Ai[j] + counts[j]] = i;
            Av[Ai[j] + counts[j]] = foo[j];
        }
    }
    return [
        Ai,
        Aj,
        Av
    ];
};
numeric.ccsFull = function ccsFull(A) {
    var Ai = A[0], Aj = A[1], Av = A[2], s = numeric.ccsDim(A), m = s[0], n = s[1], i, j, j0, j1, k;
    var B = numeric.rep([
        m,
        n
    ], 0);
    for(i = 0; i < n; i++){
        j0 = Ai[i];
        j1 = Ai[i + 1];
        for(j = j0; j < j1; ++j)B[Aj[j]][i] = Av[j];
    }
    return B;
};
numeric.ccsTSolve = function ccsTSolve(A, b, x, bj, xj) {
    var Ai = A[0], Aj = A[1], Av = A[2], m = Ai.length - 1, max = Math.max, n = 0;
    if (typeof bj === "undefined") x = numeric.rep([
        m
    ], 0);
    if (typeof bj === "undefined") bj = numeric.linspace(0, x.length - 1);
    if (typeof xj === "undefined") xj = [];
    function dfs(j) {
        var k;
        if (x[j] !== 0) return;
        x[j] = 1;
        for(k = Ai[j]; k < Ai[j + 1]; ++k)dfs(Aj[k]);
        xj[n] = j;
        ++n;
    }
    var i, j, j0, j1, k, l, l0, l1, a;
    for(i = bj.length - 1; i !== -1; --i)dfs(bj[i]);
    xj.length = n;
    for(i = xj.length - 1; i !== -1; --i)x[xj[i]] = 0;
    for(i = bj.length - 1; i !== -1; --i){
        j = bj[i];
        x[j] = b[j];
    }
    for(i = xj.length - 1; i !== -1; --i){
        j = xj[i];
        j0 = Ai[j];
        j1 = max(Ai[j + 1], j0);
        for(k = j0; k !== j1; ++k)if (Aj[k] === j) {
            x[j] /= Av[k];
            break;
        }
        a = x[j];
        for(k = j0; k !== j1; ++k){
            l = Aj[k];
            if (l !== j) x[l] -= a * Av[k];
        }
    }
    return x;
};
numeric.ccsDFS = function ccsDFS(n) {
    this.k = Array(n);
    this.k1 = Array(n);
    this.j = Array(n);
};
numeric.ccsDFS.prototype.dfs = function dfs(J, Ai, Aj, x, xj, Pinv) {
    var m = 0, foo, n = xj.length;
    var k = this.k, k1 = this.k1, j = this.j, km, k11;
    if (x[J] !== 0) return;
    x[J] = 1;
    j[0] = J;
    k[0] = km = Ai[J];
    k1[0] = k11 = Ai[J + 1];
    while(true)if (km >= k11) {
        xj[n] = j[m];
        if (m === 0) return;
        ++n;
        --m;
        km = k[m];
        k11 = k1[m];
    } else {
        foo = Pinv[Aj[km]];
        if (x[foo] === 0) {
            x[foo] = 1;
            k[m] = km;
            ++m;
            j[m] = foo;
            km = Ai[foo];
            k1[m] = k11 = Ai[foo + 1];
        } else ++km;
    }
};
numeric.ccsLPSolve = function ccsLPSolve(A, B, x, xj, I, Pinv, dfs) {
    var Ai = A[0], Aj = A[1], Av = A[2], m = Ai.length - 1, n = 0;
    var Bi = B[0], Bj = B[1], Bv = B[2];
    var i, i0, i1, j, J, j0, j1, k, l, l0, l1, a;
    i0 = Bi[I];
    i1 = Bi[I + 1];
    xj.length = 0;
    for(i = i0; i < i1; ++i)dfs.dfs(Pinv[Bj[i]], Ai, Aj, x, xj, Pinv);
    for(i = xj.length - 1; i !== -1; --i)x[xj[i]] = 0;
    for(i = i0; i !== i1; ++i){
        j = Pinv[Bj[i]];
        x[j] = Bv[i];
    }
    for(i = xj.length - 1; i !== -1; --i){
        j = xj[i];
        j0 = Ai[j];
        j1 = Ai[j + 1];
        for(k = j0; k < j1; ++k)if (Pinv[Aj[k]] === j) {
            x[j] /= Av[k];
            break;
        }
        a = x[j];
        for(k = j0; k < j1; ++k){
            l = Pinv[Aj[k]];
            if (l !== j) x[l] -= a * Av[k];
        }
    }
    return x;
};
numeric.ccsLUP1 = function ccsLUP1(A, threshold) {
    var m = A[0].length - 1;
    var L = [
        numeric.rep([
            m + 1
        ], 0),
        [],
        []
    ], U = [
        numeric.rep([
            m + 1
        ], 0),
        [],
        []
    ];
    var Li = L[0], Lj = L[1], Lv = L[2], Ui = U[0], Uj = U[1], Uv = U[2];
    var x = numeric.rep([
        m
    ], 0), xj = numeric.rep([
        m
    ], 0);
    var i, j, k, j0, j1, a, e, c, d, K;
    var sol = numeric.ccsLPSolve, max = Math.max, abs = Math.abs;
    var P = numeric.linspace(0, m - 1), Pinv = numeric.linspace(0, m - 1);
    var dfs = new numeric.ccsDFS(m);
    if (typeof threshold === "undefined") threshold = 1;
    for(i = 0; i < m; ++i){
        sol(L, A, x, xj, i, Pinv, dfs);
        a = -1;
        e = -1;
        for(j = xj.length - 1; j !== -1; --j){
            k = xj[j];
            if (k <= i) continue;
            c = abs(x[k]);
            if (c > a) {
                e = k;
                a = c;
            }
        }
        if (abs(x[i]) < threshold * a) {
            j = P[i];
            a = P[e];
            P[i] = a;
            Pinv[a] = i;
            P[e] = j;
            Pinv[j] = e;
            a = x[i];
            x[i] = x[e];
            x[e] = a;
        }
        a = Li[i];
        e = Ui[i];
        d = x[i];
        Lj[a] = P[i];
        Lv[a] = 1;
        ++a;
        for(j = xj.length - 1; j !== -1; --j){
            k = xj[j];
            c = x[k];
            xj[j] = 0;
            x[k] = 0;
            if (k <= i) {
                Uj[e] = k;
                Uv[e] = c;
                ++e;
            } else {
                Lj[a] = P[k];
                Lv[a] = c / d;
                ++a;
            }
        }
        Li[i + 1] = a;
        Ui[i + 1] = e;
    }
    for(j = Lj.length - 1; j !== -1; --j)Lj[j] = Pinv[Lj[j]];
    return {
        L: L,
        U: U,
        P: P,
        Pinv: Pinv
    };
};
numeric.ccsDFS0 = function ccsDFS0(n) {
    this.k = Array(n);
    this.k1 = Array(n);
    this.j = Array(n);
};
numeric.ccsDFS0.prototype.dfs = function dfs(J, Ai, Aj, x, xj, Pinv, P) {
    var m = 0, foo, n = xj.length;
    var k = this.k, k1 = this.k1, j = this.j, km, k11;
    if (x[J] !== 0) return;
    x[J] = 1;
    j[0] = J;
    k[0] = km = Ai[Pinv[J]];
    k1[0] = k11 = Ai[Pinv[J] + 1];
    while(true){
        if (isNaN(km)) throw new Error("Ow!");
        if (km >= k11) {
            xj[n] = Pinv[j[m]];
            if (m === 0) return;
            ++n;
            --m;
            km = k[m];
            k11 = k1[m];
        } else {
            foo = Aj[km];
            if (x[foo] === 0) {
                x[foo] = 1;
                k[m] = km;
                ++m;
                j[m] = foo;
                foo = Pinv[foo];
                km = Ai[foo];
                k1[m] = k11 = Ai[foo + 1];
            } else ++km;
        }
    }
};
numeric.ccsLPSolve0 = function ccsLPSolve0(A, B, y, xj, I, Pinv, P, dfs) {
    var Ai = A[0], Aj = A[1], Av = A[2], m = Ai.length - 1, n = 0;
    var Bi = B[0], Bj = B[1], Bv = B[2];
    var i, i0, i1, j, J, j0, j1, k, l, l0, l1, a;
    i0 = Bi[I];
    i1 = Bi[I + 1];
    xj.length = 0;
    for(i = i0; i < i1; ++i)dfs.dfs(Bj[i], Ai, Aj, y, xj, Pinv, P);
    for(i = xj.length - 1; i !== -1; --i){
        j = xj[i];
        y[P[j]] = 0;
    }
    for(i = i0; i !== i1; ++i){
        j = Bj[i];
        y[j] = Bv[i];
    }
    for(i = xj.length - 1; i !== -1; --i){
        j = xj[i];
        l = P[j];
        j0 = Ai[j];
        j1 = Ai[j + 1];
        for(k = j0; k < j1; ++k)if (Aj[k] === l) {
            y[l] /= Av[k];
            break;
        }
        a = y[l];
        for(k = j0; k < j1; ++k)y[Aj[k]] -= a * Av[k];
        y[l] = a;
    }
};
numeric.ccsLUP0 = function ccsLUP0(A, threshold) {
    var m = A[0].length - 1;
    var L = [
        numeric.rep([
            m + 1
        ], 0),
        [],
        []
    ], U = [
        numeric.rep([
            m + 1
        ], 0),
        [],
        []
    ];
    var Li = L[0], Lj = L[1], Lv = L[2], Ui = U[0], Uj = U[1], Uv = U[2];
    var y = numeric.rep([
        m
    ], 0), xj = numeric.rep([
        m
    ], 0);
    var i, j, k, j0, j1, a, e, c, d, K;
    var sol = numeric.ccsLPSolve0, max = Math.max, abs = Math.abs;
    var P = numeric.linspace(0, m - 1), Pinv = numeric.linspace(0, m - 1);
    var dfs = new numeric.ccsDFS0(m);
    if (typeof threshold === "undefined") threshold = 1;
    for(i = 0; i < m; ++i){
        sol(L, A, y, xj, i, Pinv, P, dfs);
        a = -1;
        e = -1;
        for(j = xj.length - 1; j !== -1; --j){
            k = xj[j];
            if (k <= i) continue;
            c = abs(y[P[k]]);
            if (c > a) {
                e = k;
                a = c;
            }
        }
        if (abs(y[P[i]]) < threshold * a) {
            j = P[i];
            a = P[e];
            P[i] = a;
            Pinv[a] = i;
            P[e] = j;
            Pinv[j] = e;
        }
        a = Li[i];
        e = Ui[i];
        d = y[P[i]];
        Lj[a] = P[i];
        Lv[a] = 1;
        ++a;
        for(j = xj.length - 1; j !== -1; --j){
            k = xj[j];
            c = y[P[k]];
            xj[j] = 0;
            y[P[k]] = 0;
            if (k <= i) {
                Uj[e] = k;
                Uv[e] = c;
                ++e;
            } else {
                Lj[a] = P[k];
                Lv[a] = c / d;
                ++a;
            }
        }
        Li[i + 1] = a;
        Ui[i + 1] = e;
    }
    for(j = Lj.length - 1; j !== -1; --j)Lj[j] = Pinv[Lj[j]];
    return {
        L: L,
        U: U,
        P: P,
        Pinv: Pinv
    };
};
numeric.ccsLUP = numeric.ccsLUP0;
numeric.ccsDim = function ccsDim(A) {
    return [
        numeric.sup(A[1]) + 1,
        A[0].length - 1
    ];
};
numeric.ccsGetBlock = function ccsGetBlock(A, i, j) {
    var s = numeric.ccsDim(A), m = s[0], n = s[1];
    if (typeof i === "undefined") i = numeric.linspace(0, m - 1);
    else if (typeof i === "number") i = [
        i
    ];
    if (typeof j === "undefined") j = numeric.linspace(0, n - 1);
    else if (typeof j === "number") j = [
        j
    ];
    var p, p0, p1, P = i.length, q, Q = j.length, r, jq, ip;
    var Bi = numeric.rep([
        n
    ], 0), Bj = [], Bv = [], B = [
        Bi,
        Bj,
        Bv
    ];
    var Ai = A[0], Aj = A[1], Av = A[2];
    var x = numeric.rep([
        m
    ], 0), count = 0, flags = numeric.rep([
        m
    ], 0);
    for(q = 0; q < Q; ++q){
        jq = j[q];
        var q0 = Ai[jq];
        var q1 = Ai[jq + 1];
        for(p = q0; p < q1; ++p){
            r = Aj[p];
            flags[r] = 1;
            x[r] = Av[p];
        }
        for(p = 0; p < P; ++p){
            ip = i[p];
            if (flags[ip]) {
                Bj[count] = p;
                Bv[count] = x[i[p]];
                ++count;
            }
        }
        for(p = q0; p < q1; ++p){
            r = Aj[p];
            flags[r] = 0;
        }
        Bi[q + 1] = count;
    }
    return B;
};
numeric.ccsDot = function ccsDot(A, B) {
    var Ai = A[0], Aj = A[1], Av = A[2];
    var Bi = B[0], Bj = B[1], Bv = B[2];
    var sA = numeric.ccsDim(A), sB = numeric.ccsDim(B);
    var m = sA[0], n = sA[1], o = sB[1];
    var x = numeric.rep([
        m
    ], 0), flags = numeric.rep([
        m
    ], 0), xj = Array(m);
    var Ci = numeric.rep([
        o
    ], 0), Cj = [], Cv = [], C = [
        Ci,
        Cj,
        Cv
    ];
    var i, j, k, j0, j1, i0, i1, l, p, a, b;
    for(k = 0; k !== o; ++k){
        j0 = Bi[k];
        j1 = Bi[k + 1];
        p = 0;
        for(j = j0; j < j1; ++j){
            a = Bj[j];
            b = Bv[j];
            i0 = Ai[a];
            i1 = Ai[a + 1];
            for(i = i0; i < i1; ++i){
                l = Aj[i];
                if (flags[l] === 0) {
                    xj[p] = l;
                    flags[l] = 1;
                    p = p + 1;
                }
                x[l] = x[l] + Av[i] * b;
            }
        }
        j0 = Ci[k];
        j1 = j0 + p;
        Ci[k + 1] = j1;
        for(j = p - 1; j !== -1; --j){
            b = j0 + j;
            i = xj[j];
            Cj[b] = i;
            Cv[b] = x[i];
            flags[i] = 0;
            x[i] = 0;
        }
        Ci[k + 1] = Ci[k] + p;
    }
    return C;
};
numeric.ccsLUPSolve = function ccsLUPSolve(LUP, B) {
    var L = LUP.L, U = LUP.U, P = LUP.P;
    var Bi = B[0];
    var flag = false;
    if (typeof Bi !== "object") {
        B = [
            [
                0,
                B.length
            ],
            numeric.linspace(0, B.length - 1),
            B
        ];
        Bi = B[0];
        flag = true;
    }
    var Bj = B[1], Bv = B[2];
    var n = L[0].length - 1, m = Bi.length - 1;
    var x = numeric.rep([
        n
    ], 0), xj = Array(n);
    var b = numeric.rep([
        n
    ], 0), bj = Array(n);
    var Xi = numeric.rep([
        m + 1
    ], 0), Xj = [], Xv = [];
    var sol = numeric.ccsTSolve;
    var i, j, j0, j1, k, J, N = 0;
    for(i = 0; i < m; ++i){
        k = 0;
        j0 = Bi[i];
        j1 = Bi[i + 1];
        for(j = j0; j < j1; ++j){
            J = LUP.Pinv[Bj[j]];
            bj[k] = J;
            b[J] = Bv[j];
            ++k;
        }
        bj.length = k;
        sol(L, b, x, bj, xj);
        for(j = bj.length - 1; j !== -1; --j)b[bj[j]] = 0;
        sol(U, x, b, xj, bj);
        if (flag) return b;
        for(j = xj.length - 1; j !== -1; --j)x[xj[j]] = 0;
        for(j = bj.length - 1; j !== -1; --j){
            J = bj[j];
            Xj[N] = J;
            Xv[N] = b[J];
            b[J] = 0;
            ++N;
        }
        Xi[i + 1] = N;
    }
    return [
        Xi,
        Xj,
        Xv
    ];
};
numeric.ccsbinop = function ccsbinop(body, setup) {
    if (typeof setup === "undefined") setup = '';
    return Function('X', 'Y', "var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n" + setup + 'for(i=0;i<n;++i) {\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Xj[j];\n' + '    x[k] = 1;\n' + '    Zj[p] = k;\n' + '    ++p;\n' + '  }\n' + '  j0 = Yi[i]; j1 = Yi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Yj[j];\n' + '    y[k] = Yv[j];\n' + '    if(x[k] === 0) {\n' + '      Zj[p] = k;\n' + '      ++p;\n' + '    }\n' + '  }\n' + '  Zi[i+1] = p;\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n' + '  j0 = Zi[i]; j1 = Zi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Zj[j];\n' + '    xk = x[k];\n' + '    yk = y[k];\n' + body + '\n' + '    Zv[j] = zk;\n' + '  }\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n' + '  j0 = Yi[i]; j1 = Yi[i+1];\n' + '  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n' + '}\n' + 'return [Zi,Zj,Zv];');
};
(function() {
    var k, A, B, C;
    for(k in numeric.ops2){
        if (isFinite(eval('1' + numeric.ops2[k] + '0'))) A = '[Y[0],Y[1],numeric.' + k + '(X,Y[2])]';
        else A = 'NaN';
        if (isFinite(eval('0' + numeric.ops2[k] + '1'))) B = '[X[0],X[1],numeric.' + k + '(X[2],Y)]';
        else B = 'NaN';
        if (isFinite(eval('1' + numeric.ops2[k] + '0')) && isFinite(eval('0' + numeric.ops2[k] + '1'))) C = 'numeric.ccs' + k + 'MM(X,Y)';
        else C = 'NaN';
        numeric['ccs' + k + 'MM'] = numeric.ccsbinop('zk = xk ' + numeric.ops2[k] + 'yk;');
        numeric['ccs' + k] = Function('X', 'Y', 'if(typeof X === "number") return ' + A + ';\n' + 'if(typeof Y === "number") return ' + B + ';\n' + 'return ' + C + ';\n');
    }
})();
numeric.ccsScatter = function ccsScatter(A) {
    var Ai = A[0], Aj = A[1], Av = A[2];
    var n = numeric.sup(Aj) + 1, m = Ai.length;
    var Ri = numeric.rep([
        n
    ], 0), Rj = Array(m), Rv = Array(m);
    var counts = numeric.rep([
        n
    ], 0), i;
    for(i = 0; i < m; ++i)counts[Aj[i]]++;
    for(i = 0; i < n; ++i)Ri[i + 1] = Ri[i] + counts[i];
    var ptr = Ri.slice(0), k, Aii;
    for(i = 0; i < m; ++i){
        Aii = Aj[i];
        k = ptr[Aii];
        Rj[k] = Ai[i];
        Rv[k] = Av[i];
        ptr[Aii] = ptr[Aii] + 1;
    }
    return [
        Ri,
        Rj,
        Rv
    ];
};
numeric.ccsGather = function ccsGather(A) {
    var Ai = A[0], Aj = A[1], Av = A[2];
    var n = Ai.length - 1, m = Aj.length;
    var Ri = Array(m), Rj = Array(m), Rv = Array(m);
    var i, j, j0, j1, p;
    p = 0;
    for(i = 0; i < n; ++i){
        j0 = Ai[i];
        j1 = Ai[i + 1];
        for(j = j0; j !== j1; ++j){
            Rj[p] = i;
            Ri[p] = Aj[j];
            Rv[p] = Av[j];
            ++p;
        }
    }
    return [
        Ri,
        Rj,
        Rv
    ];
};
// The following sparse linear algebra routines are deprecated.
numeric.sdim = function dim(A, ret, k) {
    if (typeof ret === "undefined") ret = [];
    if (typeof A !== "object") return ret;
    if (typeof k === "undefined") k = 0;
    if (!(k in ret)) ret[k] = 0;
    if (A.length > ret[k]) ret[k] = A.length;
    var i;
    for(i in A)if (A.hasOwnProperty(i)) dim(A[i], ret, k + 1);
    return ret;
};
numeric.sclone = function clone(A, k, n) {
    if (typeof k === "undefined") k = 0;
    if (typeof n === "undefined") n = numeric.sdim(A).length;
    var i, ret = Array(A.length);
    if (k === n - 1) {
        for(i in A)if (A.hasOwnProperty(i)) ret[i] = A[i];
        return ret;
    }
    for(i in A)if (A.hasOwnProperty(i)) ret[i] = clone(A[i], k + 1, n);
    return ret;
};
numeric.sdiag = function diag(d) {
    var n = d.length, i, ret = Array(n), i1, i2, i3;
    for(i = n - 1; i >= 1; i -= 2){
        i1 = i - 1;
        ret[i] = [];
        ret[i][i] = d[i];
        ret[i1] = [];
        ret[i1][i1] = d[i1];
    }
    if (i === 0) {
        ret[0] = [];
        ret[0][0] = d[i];
    }
    return ret;
};
numeric.sidentity = function identity(n) {
    return numeric.sdiag(numeric.rep([
        n
    ], 1));
};
numeric.stranspose = function transpose(A) {
    var ret = [], n = A.length, i, j, Ai;
    for(i in A){
        if (!A.hasOwnProperty(i)) continue;
        Ai = A[i];
        for(j in Ai){
            if (!Ai.hasOwnProperty(j)) continue;
            if (typeof ret[j] !== "object") ret[j] = [];
            ret[j][i] = Ai[j];
        }
    }
    return ret;
};
numeric.sLUP = function LUP(A, tol) {
    throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.");
};
numeric.sdotMM = function dotMM(A, B) {
    var p = A.length, q = B.length, BT = numeric.stranspose(B), r = BT.length, Ai, BTk;
    var i, j, k, accum;
    var ret = Array(p), reti;
    for(i = p - 1; i >= 0; i--){
        reti = [];
        Ai = A[i];
        for(k = r - 1; k >= 0; k--){
            accum = 0;
            BTk = BT[k];
            for(j in Ai){
                if (!Ai.hasOwnProperty(j)) continue;
                if (j in BTk) accum += Ai[j] * BTk[j];
            }
            if (accum) reti[k] = accum;
        }
        ret[i] = reti;
    }
    return ret;
};
numeric.sdotMV = function dotMV(A, x) {
    var p = A.length, Ai, i, j;
    var ret = Array(p), accum;
    for(i = p - 1; i >= 0; i--){
        Ai = A[i];
        accum = 0;
        for(j in Ai){
            if (!Ai.hasOwnProperty(j)) continue;
            if (x[j]) accum += Ai[j] * x[j];
        }
        if (accum) ret[i] = accum;
    }
    return ret;
};
numeric.sdotVM = function dotMV(x, A) {
    var i, j, Ai, alpha;
    var ret = [], accum;
    for(i in x){
        if (!x.hasOwnProperty(i)) continue;
        Ai = A[i];
        alpha = x[i];
        for(j in Ai){
            if (!Ai.hasOwnProperty(j)) continue;
            if (!ret[j]) ret[j] = 0;
            ret[j] += alpha * Ai[j];
        }
    }
    return ret;
};
numeric.sdotVV = function dotVV(x, y) {
    var i, ret = 0;
    for(i in x)if (x[i] && y[i]) ret += x[i] * y[i];
    return ret;
};
numeric.sdot = function dot(A, B) {
    var m = numeric.sdim(A).length, n = numeric.sdim(B).length;
    var k = m * 1000 + n;
    switch(k){
        case 0:
            return A * B;
        case 1001:
            return numeric.sdotVV(A, B);
        case 2001:
            return numeric.sdotMV(A, B);
        case 1002:
            return numeric.sdotVM(A, B);
        case 2002:
            return numeric.sdotMM(A, B);
        default:
            throw new Error('numeric.sdot not implemented for tensors of order ' + m + ' and ' + n);
    }
};
numeric.sscatter = function scatter(V) {
    var n = V[0].length, Vij, i, j, m = V.length, A = [], Aj;
    for(i = n - 1; i >= 0; --i){
        if (!V[m - 1][i]) continue;
        Aj = A;
        for(j = 0; j < m - 2; j++){
            Vij = V[j][i];
            if (!Aj[Vij]) Aj[Vij] = [];
            Aj = Aj[Vij];
        }
        Aj[V[j][i]] = V[j + 1][i];
    }
    return A;
};
numeric.sgather = function gather(A, ret, k) {
    if (typeof ret === "undefined") ret = [];
    if (typeof k === "undefined") k = [];
    var n, i, Ai;
    n = k.length;
    for(i in A)if (A.hasOwnProperty(i)) {
        k[n] = parseInt(i);
        Ai = A[i];
        if (typeof Ai === "number") {
            if (Ai) {
                if (ret.length === 0) for(i = n + 1; i >= 0; --i)ret[i] = [];
                for(i = n; i >= 0; --i)ret[i].push(k[i]);
                ret[n + 1].push(Ai);
            }
        } else gather(Ai, ret, k);
    }
    if (k.length > n) k.pop();
    return ret;
};
// 6. Coordinate matrices
numeric.cLU = function LU(A) {
    var I = A[0], J = A[1], V = A[2];
    var p = I.length, m = 0, i, j, k, a, b, c;
    for(i = 0; i < p; i++)if (I[i] > m) m = I[i];
    m++;
    var L = Array(m), U = Array(m), left = numeric.rep([
        m
    ], Infinity), right = numeric.rep([
        m
    ], -Infinity);
    var Ui, Uj, alpha;
    for(k = 0; k < p; k++){
        i = I[k];
        j = J[k];
        if (j < left[i]) left[i] = j;
        if (j > right[i]) right[i] = j;
    }
    for(i = 0; i < m - 1; i++)if (right[i] > right[i + 1]) right[i + 1] = right[i];
    for(i = m - 1; i >= 1; i--)if (left[i] < left[i - 1]) left[i - 1] = left[i];
    var countL = 0, countU = 0;
    for(i = 0; i < m; i++){
        U[i] = numeric.rep([
            right[i] - left[i] + 1
        ], 0);
        L[i] = numeric.rep([
            i - left[i]
        ], 0);
        countL += i - left[i] + 1;
        countU += right[i] - i + 1;
    }
    for(k = 0; k < p; k++){
        i = I[k];
        U[i][J[k] - left[i]] = V[k];
    }
    for(i = 0; i < m - 1; i++){
        a = i - left[i];
        Ui = U[i];
        for(j = i + 1; left[j] <= i && j < m; j++){
            b = i - left[j];
            c = right[i] - i;
            Uj = U[j];
            alpha = Uj[b] / Ui[a];
            if (alpha) {
                for(k = 1; k <= c; k++)Uj[k + b] -= alpha * Ui[k + a];
                L[j][i - left[j]] = alpha;
            }
        }
    }
    var Ui = [], Uj = [], Uv = [], Li = [], Lj = [], Lv = [];
    var p, q, foo;
    p = 0;
    q = 0;
    for(i = 0; i < m; i++){
        a = left[i];
        b = right[i];
        foo = U[i];
        for(j = i; j <= b; j++)if (foo[j - a]) {
            Ui[p] = i;
            Uj[p] = j;
            Uv[p] = foo[j - a];
            p++;
        }
        foo = L[i];
        for(j = a; j < i; j++)if (foo[j - a]) {
            Li[q] = i;
            Lj[q] = j;
            Lv[q] = foo[j - a];
            q++;
        }
        Li[q] = i;
        Lj[q] = i;
        Lv[q] = 1;
        q++;
    }
    return {
        U: [
            Ui,
            Uj,
            Uv
        ],
        L: [
            Li,
            Lj,
            Lv
        ]
    };
};
numeric.cLUsolve = function LUsolve(lu, b) {
    var L = lu.L, U = lu.U, ret = numeric.clone(b);
    var Li = L[0], Lj = L[1], Lv = L[2];
    var Ui = U[0], Uj = U[1], Uv = U[2];
    var p = Ui.length, q = Li.length;
    var m = ret.length, i, j, k;
    k = 0;
    for(i = 0; i < m; i++){
        while(Lj[k] < i){
            ret[i] -= Lv[k] * ret[Lj[k]];
            k++;
        }
        k++;
    }
    k = p - 1;
    for(i = m - 1; i >= 0; i--){
        while(Uj[k] > i){
            ret[i] -= Uv[k] * ret[Uj[k]];
            k--;
        }
        ret[i] /= Uv[k];
        k--;
    }
    return ret;
};
numeric.cgrid = function grid(n, shape) {
    if (typeof n === "number") n = [
        n,
        n
    ];
    var ret = numeric.rep(n, -1);
    var i, j, count;
    if (typeof shape !== "function") switch(shape){
        case 'L':
            shape = function(i, j) {
                return i >= n[0] / 2 || j < n[1] / 2;
            };
            break;
        default:
            shape = function(i, j) {
                return true;
            };
            break;
    }
    count = 0;
    for(i = 1; i < n[0] - 1; i++)for(j = 1; j < n[1] - 1; j++)if (shape(i, j)) {
        ret[i][j] = count;
        count++;
    }
    return ret;
};
numeric.cdelsq = function delsq(g) {
    var dir = [
        [
            -1,
            0
        ],
        [
            0,
            -1
        ],
        [
            0,
            1
        ],
        [
            1,
            0
        ]
    ];
    var s = numeric.dim(g), m = s[0], n = s[1], i, j, k, p, q;
    var Li = [], Lj = [], Lv = [];
    for(i = 1; i < m - 1; i++)for(j = 1; j < n - 1; j++){
        if (g[i][j] < 0) continue;
        for(k = 0; k < 4; k++){
            p = i + dir[k][0];
            q = j + dir[k][1];
            if (g[p][q] < 0) continue;
            Li.push(g[i][j]);
            Lj.push(g[p][q]);
            Lv.push(-1);
        }
        Li.push(g[i][j]);
        Lj.push(g[i][j]);
        Lv.push(4);
    }
    return [
        Li,
        Lj,
        Lv
    ];
};
numeric.cdotMV = function dotMV(A, x) {
    var ret, Ai = A[0], Aj = A[1], Av = A[2], k, p = Ai.length, N;
    N = 0;
    for(k = 0; k < p; k++)if (Ai[k] > N) N = Ai[k];
    N++;
    ret = numeric.rep([
        N
    ], 0);
    for(k = 0; k < p; k++)ret[Ai[k]] += Av[k] * x[Aj[k]];
    return ret;
};
// 7. Splines
numeric.Spline = function Spline(x, yl, yr, kl, kr) {
    this.x = x;
    this.yl = yl;
    this.yr = yr;
    this.kl = kl;
    this.kr = kr;
};
numeric.Spline.prototype._at = function _at(x1, p) {
    var x = this.x;
    var yl = this.yl;
    var yr = this.yr;
    var kl = this.kl;
    var kr = this.kr;
    var x1, a, b, t;
    var add = numeric.add, sub = numeric.sub, mul = numeric.mul;
    a = sub(mul(kl[p], x[p + 1] - x[p]), sub(yr[p + 1], yl[p]));
    b = add(mul(kr[p + 1], x[p] - x[p + 1]), sub(yr[p + 1], yl[p]));
    t = (x1 - x[p]) / (x[p + 1] - x[p]);
    var s = t * (1 - t);
    return add(add(add(mul(1 - t, yl[p]), mul(t, yr[p + 1])), mul(a, s * (1 - t))), mul(b, s * t));
};
numeric.Spline.prototype.at = function at(x0) {
    if (typeof x0 === "number") {
        var x = this.x;
        var n = x.length;
        var p, q, mid, floor = Math.floor, a, b, t;
        p = 0;
        q = n - 1;
        while(q - p > 1){
            mid = floor((p + q) / 2);
            if (x[mid] <= x0) p = mid;
            else q = mid;
        }
        return this._at(x0, p);
    }
    var n = x0.length, i, ret = Array(n);
    for(i = n - 1; i !== -1; --i)ret[i] = this.at(x0[i]);
    return ret;
};
numeric.Spline.prototype.diff = function diff() {
    var x = this.x;
    var yl = this.yl;
    var yr = this.yr;
    var kl = this.kl;
    var kr = this.kr;
    var n = yl.length;
    var i, dx, dy;
    var zl = kl, zr = kr, pl = Array(n), pr = Array(n);
    var add = numeric.add, mul = numeric.mul, div = numeric.div, sub = numeric.sub;
    for(i = n - 1; i !== -1; --i){
        dx = x[i + 1] - x[i];
        dy = sub(yr[i + 1], yl[i]);
        pl[i] = div(add(mul(dy, 6), mul(kl[i], -4 * dx), mul(kr[i + 1], -2 * dx)), dx * dx);
        pr[i + 1] = div(add(mul(dy, -6), mul(kl[i], 2 * dx), mul(kr[i + 1], 4 * dx)), dx * dx);
    }
    return new numeric.Spline(x, zl, zr, pl, pr);
};
numeric.Spline.prototype.roots = function roots() {
    function sqr(x) {
        return x * x;
    }
    function heval(y0, y1, k0, k1, x) {
        var A = k0 * 2 - (y1 - y0);
        var B = -k1 * 2 + (y1 - y0);
        var t = (x + 1) * 0.5;
        var s = t * (1 - t);
        return (1 - t) * y0 + t * y1 + A * s * (1 - t) + B * s * t;
    }
    var ret = [];
    var x = this.x, yl = this.yl, yr = this.yr, kl = this.kl, kr = this.kr;
    if (typeof yl[0] === "number") {
        yl = [
            yl
        ];
        yr = [
            yr
        ];
        kl = [
            kl
        ];
        kr = [
            kr
        ];
    }
    var m = yl.length, n = x.length - 1, i, j, k, y, s, t;
    var ai, bi, ci, di, ret = Array(m), ri, k0, k1, y0, y1, A, B, D, dx, cx, stops, z0, z1, zm, t0, t1, tm;
    var sqrt = Math.sqrt;
    for(i = 0; i !== m; ++i){
        ai = yl[i];
        bi = yr[i];
        ci = kl[i];
        di = kr[i];
        ri = [];
        for(j = 0; j !== n; j++){
            if (j > 0 && bi[j] * ai[j] < 0) ri.push(x[j]);
            dx = x[j + 1] - x[j];
            cx = x[j];
            y0 = ai[j];
            y1 = bi[j + 1];
            k0 = ci[j] / dx;
            k1 = di[j + 1] / dx;
            D = sqr(k0 - k1 + 3 * (y0 - y1)) + 12 * k1 * y0;
            A = k1 + 3 * y0 + 2 * k0 - 3 * y1;
            B = 3 * (k1 + k0 + 2 * (y0 - y1));
            if (D <= 0) {
                z0 = A / B;
                if (z0 > x[j] && z0 < x[j + 1]) stops = [
                    x[j],
                    z0,
                    x[j + 1]
                ];
                else stops = [
                    x[j],
                    x[j + 1]
                ];
            } else {
                z0 = (A - sqrt(D)) / B;
                z1 = (A + sqrt(D)) / B;
                stops = [
                    x[j]
                ];
                if (z0 > x[j] && z0 < x[j + 1]) stops.push(z0);
                if (z1 > x[j] && z1 < x[j + 1]) stops.push(z1);
                stops.push(x[j + 1]);
            }
            t0 = stops[0];
            z0 = this._at(t0, j);
            for(k = 0; k < stops.length - 1; k++){
                t1 = stops[k + 1];
                z1 = this._at(t1, j);
                if (z0 === 0) {
                    ri.push(t0);
                    t0 = t1;
                    z0 = z1;
                    continue;
                }
                if (z1 === 0 || z0 * z1 > 0) {
                    t0 = t1;
                    z0 = z1;
                    continue;
                }
                var side = 0;
                while(true){
                    tm = (z0 * t1 - z1 * t0) / (z0 - z1);
                    if (tm <= t0 || tm >= t1) break;
                    zm = this._at(tm, j);
                    if (zm * z1 > 0) {
                        t1 = tm;
                        z1 = zm;
                        if (side === -1) z0 *= 0.5;
                        side = -1;
                    } else if (zm * z0 > 0) {
                        t0 = tm;
                        z0 = zm;
                        if (side === 1) z1 *= 0.5;
                        side = 1;
                    } else break;
                }
                ri.push(tm);
                t0 = stops[k + 1];
                z0 = this._at(t0, j);
            }
            if (z1 === 0) ri.push(t1);
        }
        ret[i] = ri;
    }
    if (typeof this.yl[0] === "number") return ret[0];
    return ret;
};
numeric.spline = function spline(x, y, k1, kn) {
    var n = x.length, b = [], dx = [], dy = [];
    var i;
    var sub = numeric.sub, mul = numeric.mul, add = numeric.add;
    for(i = n - 2; i >= 0; i--){
        dx[i] = x[i + 1] - x[i];
        dy[i] = sub(y[i + 1], y[i]);
    }
    if (typeof k1 === "string" || typeof kn === "string") k1 = kn = "periodic";
    // Build sparse tridiagonal system
    var T1 = [
        [],
        [],
        []
    ];
    switch(typeof k1){
        case "undefined":
            b[0] = mul(3 / (dx[0] * dx[0]), dy[0]);
            T1[0].push(0, 0);
            T1[1].push(0, 1);
            T1[2].push(2 / dx[0], 1 / dx[0]);
            break;
        case "string":
            b[0] = add(mul(3 / (dx[n - 2] * dx[n - 2]), dy[n - 2]), mul(3 / (dx[0] * dx[0]), dy[0]));
            T1[0].push(0, 0, 0);
            T1[1].push(n - 2, 0, 1);
            T1[2].push(1 / dx[n - 2], 2 / dx[n - 2] + 2 / dx[0], 1 / dx[0]);
            break;
        default:
            b[0] = k1;
            T1[0].push(0);
            T1[1].push(0);
            T1[2].push(1);
            break;
    }
    for(i = 1; i < n - 1; i++){
        b[i] = add(mul(3 / (dx[i - 1] * dx[i - 1]), dy[i - 1]), mul(3 / (dx[i] * dx[i]), dy[i]));
        T1[0].push(i, i, i);
        T1[1].push(i - 1, i, i + 1);
        T1[2].push(1 / dx[i - 1], 2 / dx[i - 1] + 2 / dx[i], 1 / dx[i]);
    }
    switch(typeof kn){
        case "undefined":
            b[n - 1] = mul(3 / (dx[n - 2] * dx[n - 2]), dy[n - 2]);
            T1[0].push(n - 1, n - 1);
            T1[1].push(n - 2, n - 1);
            T1[2].push(1 / dx[n - 2], 2 / dx[n - 2]);
            break;
        case "string":
            T1[1][T1[1].length - 1] = 0;
            break;
        default:
            b[n - 1] = kn;
            T1[0].push(n - 1);
            T1[1].push(n - 1);
            T1[2].push(1);
            break;
    }
    if (typeof b[0] !== "number") b = numeric.transpose(b);
    else b = [
        b
    ];
    var k = Array(b.length);
    if (typeof k1 === "string") for(i = k.length - 1; i !== -1; --i){
        k[i] = numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(T1)), b[i]);
        k[i][n - 1] = k[i][0];
    }
    else for(i = k.length - 1; i !== -1; --i)k[i] = numeric.cLUsolve(numeric.cLU(T1), b[i]);
    if (typeof y[0] === "number") k = k[0];
    else k = numeric.transpose(k);
    return new numeric.Spline(x, y, y, k, k);
};
// 8. FFT
numeric.fftpow2 = function fftpow2(x, y) {
    var n = x.length;
    if (n === 1) return;
    var cos = Math.cos, sin = Math.sin, i, j;
    var xe = Array(n / 2), ye = Array(n / 2), xo = Array(n / 2), yo = Array(n / 2);
    j = n / 2;
    for(i = n - 1; i !== -1; --i){
        --j;
        xo[j] = x[i];
        yo[j] = y[i];
        --i;
        xe[j] = x[i];
        ye[j] = y[i];
    }
    fftpow2(xe, ye);
    fftpow2(xo, yo);
    j = n / 2;
    var t, k = -6.283185307179586 / n, ci, si;
    for(i = n - 1; i !== -1; --i){
        --j;
        if (j === -1) j = n / 2 - 1;
        t = k * i;
        ci = cos(t);
        si = sin(t);
        x[i] = xe[j] + ci * xo[j] - si * yo[j];
        y[i] = ye[j] + ci * yo[j] + si * xo[j];
    }
};
numeric._ifftpow2 = function _ifftpow2(x, y) {
    var n = x.length;
    if (n === 1) return;
    var cos = Math.cos, sin = Math.sin, i, j;
    var xe = Array(n / 2), ye = Array(n / 2), xo = Array(n / 2), yo = Array(n / 2);
    j = n / 2;
    for(i = n - 1; i !== -1; --i){
        --j;
        xo[j] = x[i];
        yo[j] = y[i];
        --i;
        xe[j] = x[i];
        ye[j] = y[i];
    }
    _ifftpow2(xe, ye);
    _ifftpow2(xo, yo);
    j = n / 2;
    var t, k = 6.2831853071795864769252867665590057683943387987502116419 / n, ci, si;
    for(i = n - 1; i !== -1; --i){
        --j;
        if (j === -1) j = n / 2 - 1;
        t = k * i;
        ci = cos(t);
        si = sin(t);
        x[i] = xe[j] + ci * xo[j] - si * yo[j];
        y[i] = ye[j] + ci * yo[j] + si * xo[j];
    }
};
numeric.ifftpow2 = function ifftpow2(x, y) {
    numeric._ifftpow2(x, y);
    numeric.diveq(x, x.length);
    numeric.diveq(y, y.length);
};
numeric.convpow2 = function convpow2(ax, ay, bx, by) {
    numeric.fftpow2(ax, ay);
    numeric.fftpow2(bx, by);
    var i, n = ax.length, axi, bxi, ayi, byi;
    for(i = n - 1; i !== -1; --i){
        axi = ax[i];
        ayi = ay[i];
        bxi = bx[i];
        byi = by[i];
        ax[i] = axi * bxi - ayi * byi;
        ay[i] = axi * byi + ayi * bxi;
    }
    numeric.ifftpow2(ax, ay);
};
numeric.T.prototype.fft = function fft() {
    var x = this.x, y = this.y;
    var n = x.length, log = Math.log, log2 = log(2), p = Math.ceil(log(2 * n - 1) / log2), m = Math.pow(2, p);
    var cx = numeric.rep([
        m
    ], 0), cy = numeric.rep([
        m
    ], 0), cos = Math.cos, sin = Math.sin;
    var k, c = -3.141592653589793 / n, t;
    var a = numeric.rep([
        m
    ], 0), b = numeric.rep([
        m
    ], 0), nhalf = Math.floor(n / 2);
    for(k = 0; k < n; k++)a[k] = x[k];
    if (typeof y !== "undefined") for(k = 0; k < n; k++)b[k] = y[k];
    cx[0] = 1;
    for(k = 1; k <= m / 2; k++){
        t = c * k * k;
        cx[k] = cos(t);
        cy[k] = sin(t);
        cx[m - k] = cos(t);
        cy[m - k] = sin(t);
    }
    var X = new numeric.T(a, b), Y = new numeric.T(cx, cy);
    X = X.mul(Y);
    numeric.convpow2(X.x, X.y, numeric.clone(Y.x), numeric.neg(Y.y));
    X = X.mul(Y);
    X.x.length = n;
    X.y.length = n;
    return X;
};
numeric.T.prototype.ifft = function ifft() {
    var x = this.x, y = this.y;
    var n = x.length, log = Math.log, log2 = log(2), p = Math.ceil(log(2 * n - 1) / log2), m = Math.pow(2, p);
    var cx = numeric.rep([
        m
    ], 0), cy = numeric.rep([
        m
    ], 0), cos = Math.cos, sin = Math.sin;
    var k, c = 3.141592653589793238462643383279502884197169399375105820 / n, t;
    var a = numeric.rep([
        m
    ], 0), b = numeric.rep([
        m
    ], 0), nhalf = Math.floor(n / 2);
    for(k = 0; k < n; k++)a[k] = x[k];
    if (typeof y !== "undefined") for(k = 0; k < n; k++)b[k] = y[k];
    cx[0] = 1;
    for(k = 1; k <= m / 2; k++){
        t = c * k * k;
        cx[k] = cos(t);
        cy[k] = sin(t);
        cx[m - k] = cos(t);
        cy[m - k] = sin(t);
    }
    var X = new numeric.T(a, b), Y = new numeric.T(cx, cy);
    X = X.mul(Y);
    numeric.convpow2(X.x, X.y, numeric.clone(Y.x), numeric.neg(Y.y));
    X = X.mul(Y);
    X.x.length = n;
    X.y.length = n;
    return X.div(n);
};
//9. Unconstrained optimization
numeric.gradient = function gradient(f, x) {
    var n = x.length;
    var f0 = f(x);
    if (isNaN(f0)) throw new Error('gradient: f(x) is a NaN!');
    var max = Math.max;
    var i, x0 = numeric.clone(x), f1, f2, J = Array(n);
    var div = numeric.div, sub = numeric.sub, errest, roundoff, max = Math.max, eps = 1e-3, abs = Math.abs, min = Math.min;
    var t0, t1, t2, it = 0, d1, d2, N;
    for(i = 0; i < n; i++){
        var h = max(1e-6 * f0, 1e-8);
        while(true){
            ++it;
            if (it > 20) throw new Error("Numerical gradient fails");
            x0[i] = x[i] + h;
            f1 = f(x0);
            x0[i] = x[i] - h;
            f2 = f(x0);
            x0[i] = x[i];
            if (isNaN(f1) || isNaN(f2)) {
                h /= 16;
                continue;
            }
            J[i] = (f1 - f2) / (2 * h);
            t0 = x[i] - h;
            t1 = x[i];
            t2 = x[i] + h;
            d1 = (f1 - f0) / h;
            d2 = (f0 - f2) / h;
            N = max(abs(J[i]), abs(f0), abs(f1), abs(f2), abs(t0), abs(t1), abs(t2), 1e-8);
            errest = min(max(abs(d1 - J[i]), abs(d2 - J[i]), abs(d1 - d2)) / N, h / N);
            if (errest > eps) h /= 16;
            else break;
        }
    }
    return J;
};
numeric.uncmin = function uncmin(f, x0, tol, gradient, maxit, callback, options) {
    var grad = numeric.gradient;
    if (typeof options === "undefined") options = {};
    if (typeof tol === "undefined") tol = 1e-8;
    if (typeof gradient === "undefined") gradient = function(x) {
        return grad(f, x);
    };
    if (typeof maxit === "undefined") maxit = 1000;
    x0 = numeric.clone(x0);
    var n = x0.length;
    var f0 = f(x0), f1, df0;
    if (isNaN(f0)) throw new Error('uncmin: f(x0) is a NaN!');
    var max = Math.max, norm2 = numeric.norm2;
    tol = max(tol, numeric.epsilon);
    var step, g0, g1, H1 = options.Hinv || numeric.identity(n);
    var dot = numeric.dot, inv = numeric.inv, sub = numeric.sub, add = numeric.add, ten = numeric.tensor, div = numeric.div, mul = numeric.mul;
    var all = numeric.all, isfinite = numeric.isFinite, neg = numeric.neg;
    var it = 0, i, s, x1, y, Hy, Hs, ys, i0, t, nstep, t1, t2;
    var msg = "";
    g0 = gradient(x0);
    while(it < maxit){
        if (typeof callback === "function") {
            if (callback(it, x0, f0, g0, H1)) {
                msg = "Callback returned true";
                break;
            }
        }
        if (!all(isfinite(g0))) {
            msg = "Gradient has Infinity or NaN";
            break;
        }
        step = neg(dot(H1, g0));
        if (!all(isfinite(step))) {
            msg = "Search direction has Infinity or NaN";
            break;
        }
        nstep = norm2(step);
        if (nstep < tol) {
            msg = "Newton step smaller than tol";
            break;
        }
        t = 1;
        df0 = dot(g0, step);
        // line search
        x1 = x0;
        while(it < maxit){
            if (t * nstep < tol) break;
            s = mul(step, t);
            x1 = add(x0, s);
            f1 = f(x1);
            if (f1 - f0 >= 0.1 * t * df0 || isNaN(f1)) {
                t *= 0.5;
                ++it;
                continue;
            }
            break;
        }
        if (t * nstep < tol) {
            msg = "Line search step size smaller than tol";
            break;
        }
        if (it === maxit) {
            msg = "maxit reached during line search";
            break;
        }
        g1 = gradient(x1);
        y = sub(g1, g0);
        ys = dot(y, s);
        Hy = dot(H1, y);
        H1 = sub(add(H1, mul((ys + dot(y, Hy)) / (ys * ys), ten(s, s))), div(add(ten(Hy, s), ten(s, Hy)), ys));
        x0 = x1;
        f0 = f1;
        g0 = g1;
        ++it;
    }
    return {
        solution: x0,
        f: f0,
        gradient: g0,
        invHessian: H1,
        iterations: it,
        message: msg
    };
};
// 10. Ode solver (Dormand-Prince)
numeric.Dopri = function Dopri(x, y, f, ymid, iterations, msg, events) {
    this.x = x;
    this.y = y;
    this.f = f;
    this.ymid = ymid;
    this.iterations = iterations;
    this.events = events;
    this.message = msg;
};
numeric.Dopri.prototype._at = function _at(xi, j) {
    function sqr(x) {
        return x * x;
    }
    var sol = this;
    var xs = sol.x;
    var ys = sol.y;
    var k1 = sol.f;
    var ymid = sol.ymid;
    var n = xs.length;
    var x0, x1, xh, y0, y1, yh, xi;
    var floor = Math.floor, h;
    var c = 0.5;
    var add = numeric.add, mul = numeric.mul, sub = numeric.sub, p, q, w;
    x0 = xs[j];
    x1 = xs[j + 1];
    y0 = ys[j];
    y1 = ys[j + 1];
    h = x1 - x0;
    xh = x0 + c * h;
    yh = ymid[j];
    p = sub(k1[j], mul(y0, 1 / (x0 - xh) + 2 / (x0 - x1)));
    q = sub(k1[j + 1], mul(y1, 1 / (x1 - xh) + 2 / (x1 - x0)));
    w = [
        sqr(xi - x1) * (xi - xh) / sqr(x0 - x1) / (x0 - xh),
        sqr(xi - x0) * sqr(xi - x1) / sqr(x0 - xh) / sqr(x1 - xh),
        sqr(xi - x0) * (xi - xh) / sqr(x1 - x0) / (x1 - xh),
        (xi - x0) * sqr(xi - x1) * (xi - xh) / sqr(x0 - x1) / (x0 - xh),
        (xi - x1) * sqr(xi - x0) * (xi - xh) / sqr(x0 - x1) / (x1 - xh)
    ];
    return add(add(add(add(mul(y0, w[0]), mul(yh, w[1])), mul(y1, w[2])), mul(p, w[3])), mul(q, w[4]));
};
numeric.Dopri.prototype.at = function at(x) {
    var i, j, k, floor = Math.floor;
    if (typeof x !== "number") {
        var n = x.length, ret = Array(n);
        for(i = n - 1; i !== -1; --i)ret[i] = this.at(x[i]);
        return ret;
    }
    var x0 = this.x;
    i = 0;
    j = x0.length - 1;
    while(j - i > 1){
        k = floor(0.5 * (i + j));
        if (x0[k] <= x) i = k;
        else j = k;
    }
    return this._at(x, i);
};
numeric.dopri = function dopri(x0, x1, y0, f, tol, maxit, event) {
    if (typeof tol === "undefined") tol = 1e-6;
    if (typeof maxit === "undefined") maxit = 1000;
    var xs = [
        x0
    ], ys = [
        y0
    ], k1 = [
        f(x0, y0)
    ], k2, k3, k4, k5, k6, k7, ymid = [];
    var A2 = 0.2;
    var A3 = [
        3 / 40,
        9 / 40
    ];
    var A4 = [
        44 / 45,
        -56 / 15,
        32 / 9
    ];
    var A5 = [
        19372 / 6561,
        -25360 / 2187,
        64448 / 6561,
        -212 / 729
    ];
    var A6 = [
        9017 / 3168,
        -355 / 33,
        46732 / 5247,
        49 / 176,
        -5103 / 18656
    ];
    var b = [
        35 / 384,
        0,
        500 / 1113,
        125 / 192,
        -2187 / 6784,
        11 / 84
    ];
    var bm = [
        0.10013431883002395,
        0,
        0.3918321794184259,
        -0.02982460176594817,
        0.05893268337240795,
        -0.04497888809104361,
        0.023904308236133973
    ];
    var c = [
        0.2,
        0.3,
        0.8,
        8 / 9,
        1,
        1
    ];
    var e = [
        -71 / 57600,
        0,
        71 / 16695,
        -71 / 1920,
        17253 / 339200,
        -22 / 525,
        1 / 40
    ];
    var i = 0, er, j;
    var h = (x1 - x0) / 10;
    var it = 0;
    var add = numeric.add, mul = numeric.mul, y1, erinf;
    var max = Math.max, min = Math.min, abs = Math.abs, norminf = numeric.norminf, pow = Math.pow;
    var any = numeric.any, lt = numeric.lt, and = numeric.and, sub = numeric.sub;
    var e0, e1, ev;
    var ret = new numeric.Dopri(xs, ys, k1, ymid, -1, "");
    if (typeof event === "function") e0 = event(x0, y0);
    while(x0 < x1 && it < maxit){
        ++it;
        if (x0 + h > x1) h = x1 - x0;
        k2 = f(x0 + c[0] * h, add(y0, mul(A2 * h, k1[i])));
        k3 = f(x0 + c[1] * h, add(add(y0, mul(A3[0] * h, k1[i])), mul(A3[1] * h, k2)));
        k4 = f(x0 + c[2] * h, add(add(add(y0, mul(A4[0] * h, k1[i])), mul(A4[1] * h, k2)), mul(A4[2] * h, k3)));
        k5 = f(x0 + c[3] * h, add(add(add(add(y0, mul(A5[0] * h, k1[i])), mul(A5[1] * h, k2)), mul(A5[2] * h, k3)), mul(A5[3] * h, k4)));
        k6 = f(x0 + c[4] * h, add(add(add(add(add(y0, mul(A6[0] * h, k1[i])), mul(A6[1] * h, k2)), mul(A6[2] * h, k3)), mul(A6[3] * h, k4)), mul(A6[4] * h, k5)));
        y1 = add(add(add(add(add(y0, mul(k1[i], h * b[0])), mul(k3, h * b[2])), mul(k4, h * b[3])), mul(k5, h * b[4])), mul(k6, h * b[5]));
        k7 = f(x0 + h, y1);
        er = add(add(add(add(add(mul(k1[i], h * e[0]), mul(k3, h * e[2])), mul(k4, h * e[3])), mul(k5, h * e[4])), mul(k6, h * e[5])), mul(k7, h * e[6]));
        if (typeof er === "number") erinf = abs(er);
        else erinf = norminf(er);
        if (erinf > tol) {
            h = 0.2 * h * pow(tol / erinf, 0.25);
            if (x0 + h === x0) {
                ret.msg = "Step size became too small";
                break;
            }
            continue;
        }
        ymid[i] = add(add(add(add(add(add(y0, mul(k1[i], h * bm[0])), mul(k3, h * bm[2])), mul(k4, h * bm[3])), mul(k5, h * bm[4])), mul(k6, h * bm[5])), mul(k7, h * bm[6]));
        ++i;
        xs[i] = x0 + h;
        ys[i] = y1;
        k1[i] = k7;
        if (typeof event === "function") {
            var yi, xl = x0, xr = x0 + 0.5 * h, xi;
            e1 = event(xr, ymid[i - 1]);
            ev = and(lt(e0, 0), lt(0, e1));
            if (!any(ev)) {
                xl = xr;
                xr = x0 + h;
                e0 = e1;
                e1 = event(xr, y1);
                ev = and(lt(e0, 0), lt(0, e1));
            }
            if (any(ev)) {
                var xc, yc, en, ei;
                var side = 0, sl = 1.0, sr = 1.0;
                while(true){
                    if (typeof e0 === "number") xi = (sr * e1 * xl - sl * e0 * xr) / (sr * e1 - sl * e0);
                    else {
                        xi = xr;
                        for(j = e0.length - 1; j !== -1; --j)if (e0[j] < 0 && e1[j] > 0) xi = min(xi, (sr * e1[j] * xl - sl * e0[j] * xr) / (sr * e1[j] - sl * e0[j]));
                    }
                    if (xi <= xl || xi >= xr) break;
                    yi = ret._at(xi, i - 1);
                    ei = event(xi, yi);
                    en = and(lt(e0, 0), lt(0, ei));
                    if (any(en)) {
                        xr = xi;
                        e1 = ei;
                        ev = en;
                        sr = 1.0;
                        if (side === -1) sl *= 0.5;
                        else sl = 1.0;
                        side = -1;
                    } else {
                        xl = xi;
                        e0 = ei;
                        sl = 1.0;
                        if (side === 1) sr *= 0.5;
                        else sr = 1.0;
                        side = 1;
                    }
                }
                y1 = ret._at(0.5 * (x0 + xi), i - 1);
                ret.f[i] = f(xi, yi);
                ret.x[i] = xi;
                ret.y[i] = yi;
                ret.ymid[i - 1] = y1;
                ret.events = ev;
                ret.iterations = it;
                return ret;
            }
        }
        x0 += h;
        y0 = y1;
        e0 = e1;
        h = min(0.8 * h * pow(tol / erinf, 0.25), 4 * h);
    }
    ret.iterations = it;
    return ret;
};
// 11. Ax = b
numeric.LU = function(A, fast) {
    fast = fast || false;
    var abs = Math.abs;
    var i, j, k, absAjk, Akk, Ak, Pk, Ai;
    var max;
    var n = A.length, n1 = n - 1;
    var P = new Array(n);
    if (!fast) A = numeric.clone(A);
    for(k = 0; k < n; ++k){
        Pk = k;
        Ak = A[k];
        max = abs(Ak[k]);
        for(j = k + 1; j < n; ++j){
            absAjk = abs(A[j][k]);
            if (max < absAjk) {
                max = absAjk;
                Pk = j;
            }
        }
        P[k] = Pk;
        if (Pk != k) {
            A[k] = A[Pk];
            A[Pk] = Ak;
            Ak = A[k];
        }
        Akk = Ak[k];
        for(i = k + 1; i < n; ++i)A[i][k] /= Akk;
        for(i = k + 1; i < n; ++i){
            Ai = A[i];
            for(j = k + 1; j < n1; ++j){
                Ai[j] -= Ai[k] * Ak[j];
                ++j;
                Ai[j] -= Ai[k] * Ak[j];
            }
            if (j === n1) Ai[j] -= Ai[k] * Ak[j];
        }
    }
    return {
        LU: A,
        P: P
    };
};
numeric.LUsolve = function LUsolve(LUP, b) {
    var i, j;
    var LU = LUP.LU;
    var n = LU.length;
    var x = numeric.clone(b);
    var P = LUP.P;
    var Pi, LUi, LUii, tmp;
    for(i = n - 1; i !== -1; --i)x[i] = b[i];
    for(i = 0; i < n; ++i){
        Pi = P[i];
        if (P[i] !== i) {
            tmp = x[i];
            x[i] = x[Pi];
            x[Pi] = tmp;
        }
        LUi = LU[i];
        for(j = 0; j < i; ++j)x[i] -= x[j] * LUi[j];
    }
    for(i = n - 1; i >= 0; --i){
        LUi = LU[i];
        for(j = i + 1; j < n; ++j)x[i] -= x[j] * LUi[j];
        x[i] /= LUi[i];
    }
    return x;
};
numeric.solve = function solve(A, b, fast) {
    return numeric.LUsolve(numeric.LU(A, fast), b);
};
// 12. Linear programming
numeric.echelonize = function echelonize(A) {
    var s = numeric.dim(A), m = s[0], n = s[1];
    var I = numeric.identity(m);
    var P = Array(m);
    var i, j, k, l, Ai, Ii, Z, a;
    var abs = Math.abs;
    var diveq = numeric.diveq;
    A = numeric.clone(A);
    for(i = 0; i < m; ++i){
        k = 0;
        Ai = A[i];
        Ii = I[i];
        for(j = 1; j < n; ++j)if (abs(Ai[k]) < abs(Ai[j])) k = j;
        P[i] = k;
        diveq(Ii, Ai[k]);
        diveq(Ai, Ai[k]);
        for(j = 0; j < m; ++j)if (j !== i) {
            Z = A[j];
            a = Z[k];
            for(l = n - 1; l !== -1; --l)Z[l] -= Ai[l] * a;
            Z = I[j];
            for(l = m - 1; l !== -1; --l)Z[l] -= Ii[l] * a;
        }
    }
    return {
        I: I,
        A: A,
        P: P
    };
};
numeric.__solveLP = function __solveLP(c, A, b, tol, maxit, x, flag) {
    var sum = numeric.sum, log = numeric.log, mul = numeric.mul, sub = numeric.sub, dot = numeric.dot, div = numeric.div, add = numeric.add;
    var m = c.length, n = b.length, y;
    var unbounded = false, cb, i0 = 0;
    var alpha = 1.0;
    var f0, df0, AT = numeric.transpose(A), svd = numeric.svd, transpose = numeric.transpose, leq = numeric.leq, sqrt = Math.sqrt, abs = Math.abs;
    var muleq = numeric.muleq;
    var norm = numeric.norminf, any = numeric.any, min = Math.min;
    var all = numeric.all, gt = numeric.gt;
    var p = Array(m), A0 = Array(n), e = numeric.rep([
        n
    ], 1), H;
    var solve = numeric.solve, z = sub(b, dot(A, x)), count;
    var dotcc = dot(c, c);
    var g;
    for(count = i0; count < maxit; ++count){
        var i, j, d;
        for(i = n - 1; i !== -1; --i)A0[i] = div(A[i], z[i]);
        var A1 = transpose(A0);
        for(i = m - 1; i !== -1; --i)p[i] = /*x[i]+*/ sum(A1[i]);
        alpha = 0.25 * abs(dotcc / dot(c, p));
        var a1 = 100 * sqrt(dotcc / dot(p, p));
        if (!isFinite(alpha) || alpha > a1) alpha = a1;
        g = add(c, mul(alpha, p));
        H = dot(A1, A0);
        for(i = m - 1; i !== -1; --i)H[i][i] += 1;
        d = solve(H, div(g, alpha), true);
        var t0 = div(z, dot(A, d));
        var t = 1.0;
        for(i = n - 1; i !== -1; --i)if (t0[i] < 0) t = min(t, -0.999 * t0[i]);
        y = sub(x, mul(d, t));
        z = sub(b, dot(A, y));
        if (!all(gt(z, 0))) return {
            solution: x,
            message: "",
            iterations: count
        };
        x = y;
        if (alpha < tol) return {
            solution: y,
            message: "",
            iterations: count
        };
        if (flag) {
            var s = dot(c, g), Ag = dot(A, g);
            unbounded = true;
            for(i = n - 1; i !== -1; --i)if (s * Ag[i] < 0) {
                unbounded = false;
                break;
            }
        } else if (x[m - 1] >= 0) unbounded = false;
        else unbounded = true;
        if (unbounded) return {
            solution: y,
            message: "Unbounded",
            iterations: count
        };
    }
    return {
        solution: x,
        message: "maximum iteration count exceeded",
        iterations: count
    };
};
numeric._solveLP = function _solveLP(c, A, b, tol, maxit) {
    var m = c.length, n = b.length, y;
    var sum = numeric.sum, log = numeric.log, mul = numeric.mul, sub = numeric.sub, dot = numeric.dot, div = numeric.div, add = numeric.add;
    var c0 = numeric.rep([
        m
    ], 0).concat([
        1
    ]);
    var J = numeric.rep([
        n,
        1
    ], -1);
    var A0 = numeric.blockMatrix([
        [
            A,
            J
        ]
    ]);
    var b0 = b;
    var y = numeric.rep([
        m
    ], 0).concat(Math.max(0, numeric.sup(numeric.neg(b))) + 1);
    var x0 = numeric.__solveLP(c0, A0, b0, tol, maxit, y, false);
    var x = numeric.clone(x0.solution);
    x.length = m;
    var foo = numeric.inf(sub(b, dot(A, x)));
    if (foo < 0) return {
        solution: NaN,
        message: "Infeasible",
        iterations: x0.iterations
    };
    var ret = numeric.__solveLP(c, A, b, tol, maxit - x0.iterations, x, true);
    ret.iterations += x0.iterations;
    return ret;
};
numeric.solveLP = function solveLP(c, A, b, Aeq, beq, tol, maxit) {
    if (typeof maxit === "undefined") maxit = 1000;
    if (typeof tol === "undefined") tol = numeric.epsilon;
    if (typeof Aeq === "undefined") return numeric._solveLP(c, A, b, tol, maxit);
    var m = Aeq.length, n = Aeq[0].length, o = A.length;
    var B = numeric.echelonize(Aeq);
    var flags = numeric.rep([
        n
    ], 0);
    var P = B.P;
    var Q = [];
    var i;
    for(i = P.length - 1; i !== -1; --i)flags[P[i]] = 1;
    for(i = n - 1; i !== -1; --i)if (flags[i] === 0) Q.push(i);
    var g = numeric.getRange;
    var I = numeric.linspace(0, m - 1), J = numeric.linspace(0, o - 1);
    var Aeq2 = g(Aeq, I, Q), A1 = g(A, J, P), A2 = g(A, J, Q), dot = numeric.dot, sub = numeric.sub;
    var A3 = dot(A1, B.I);
    var A4 = sub(A2, dot(A3, Aeq2)), b4 = sub(b, dot(A3, beq));
    var c1 = Array(P.length), c2 = Array(Q.length);
    for(i = P.length - 1; i !== -1; --i)c1[i] = c[P[i]];
    for(i = Q.length - 1; i !== -1; --i)c2[i] = c[Q[i]];
    var c4 = sub(c2, dot(c1, dot(B.I, Aeq2)));
    var S = numeric._solveLP(c4, A4, b4, tol, maxit);
    var x2 = S.solution;
    if (x2 !== x2) return S;
    var x1 = dot(B.I, sub(beq, dot(Aeq2, x2)));
    var x = Array(c.length);
    for(i = P.length - 1; i !== -1; --i)x[P[i]] = x1[i];
    for(i = Q.length - 1; i !== -1; --i)x[Q[i]] = x2[i];
    return {
        solution: x,
        message: S.message,
        iterations: S.iterations
    };
};
numeric.MPStoLP = function MPStoLP(MPS) {
    if (MPS instanceof String) MPS.split('\n');
    var state = 0;
    var states = [
        'Initial state',
        'NAME',
        'ROWS',
        'COLUMNS',
        'RHS',
        'BOUNDS',
        'ENDATA'
    ];
    var n = MPS.length;
    var i, j, z, N = 0, rows = {}, sign = [], rl = 0, vars = {}, nv = 0;
    var name;
    var c = [], A = [], b = [];
    function err(e) {
        throw new Error('MPStoLP: ' + e + '\nLine ' + i + ': ' + MPS[i] + '\nCurrent state: ' + states[state] + '\n');
    }
    for(i = 0; i < n; ++i){
        z = MPS[i];
        var w0 = z.match(/\S*/g);
        var w = [];
        for(j = 0; j < w0.length; ++j)if (w0[j] !== "") w.push(w0[j]);
        if (w.length === 0) continue;
        for(j = 0; j < states.length; ++j)if (z.substr(0, states[j].length) === states[j]) break;
        if (j < states.length) {
            state = j;
            if (j === 1) name = w[1];
            if (j === 6) return {
                name: name,
                c: c,
                A: numeric.transpose(A),
                b: b,
                rows: rows,
                vars: vars
            };
            continue;
        }
        switch(state){
            case 0:
            case 1:
                err('Unexpected line');
            case 2:
                switch(w[0]){
                    case 'N':
                        if (N === 0) N = w[1];
                        else err('Two or more N rows');
                        break;
                    case 'L':
                        rows[w[1]] = rl;
                        sign[rl] = 1;
                        b[rl] = 0;
                        ++rl;
                        break;
                    case 'G':
                        rows[w[1]] = rl;
                        sign[rl] = -1;
                        b[rl] = 0;
                        ++rl;
                        break;
                    case 'E':
                        rows[w[1]] = rl;
                        sign[rl] = 0;
                        b[rl] = 0;
                        ++rl;
                        break;
                    default:
                        err('Parse error ' + numeric.prettyPrint(w));
                }
                break;
            case 3:
                if (!vars.hasOwnProperty(w[0])) {
                    vars[w[0]] = nv;
                    c[nv] = 0;
                    A[nv] = numeric.rep([
                        rl
                    ], 0);
                    ++nv;
                }
                var p = vars[w[0]];
                for(j = 1; j < w.length; j += 2){
                    if (w[j] === N) {
                        c[p] = parseFloat(w[j + 1]);
                        continue;
                    }
                    var q = rows[w[j]];
                    A[p][q] = (sign[q] < 0 ? -1 : 1) * parseFloat(w[j + 1]);
                }
                break;
            case 4:
                for(j = 1; j < w.length; j += 2)b[rows[w[j]]] = (sign[rows[w[j]]] < 0 ? -1 : 1) * parseFloat(w[j + 1]);
                break;
            case 5:
                break;
            case 6:
                err('Internal error');
        }
    }
    err('Reached end of file without ENDATA');
};
// seedrandom.js version 2.0.
// Author: David Bau 4/2/2011
//
// Defines a method Math.seedrandom() that, when called, substitutes
// an explicitly seeded RC4-based algorithm for Math.random().  Also
// supports automatic seeding from local or network sources of entropy.
//
// Usage:
//
//   <script src=http://davidbau.com/encode/seedrandom-min.js></script>
//
//   Math.seedrandom('yipee'); Sets Math.random to a function that is
//                             initialized using the given explicit seed.
//
//   Math.seedrandom();        Sets Math.random to a function that is
//                             seeded using the current time, dom state,
//                             and other accumulated local entropy.
//                             The generated seed string is returned.
//
//   Math.seedrandom('yowza', true);
//                             Seeds using the given explicit seed mixed
//                             together with accumulated entropy.
//
//   <script src="http://bit.ly/srandom-512"></script>
//                             Seeds using physical random bits downloaded
//                             from random.org.
//
//   <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
//   </script>                 Seeds using urandom bits from call.jsonlib.com,
//                             which is faster than random.org.
//
// Examples:
//
//   Math.seedrandom("hello");            // Use "hello" as the seed.
//   document.write(Math.random());       // Always 0.5463663768140734
//   document.write(Math.random());       // Always 0.43973793770592234
//   var rng1 = Math.random;              // Remember the current prng.
//
//   var autoseed = Math.seedrandom();    // New prng with an automatic seed.
//   document.write(Math.random());       // Pretty much unpredictable.
//
//   Math.random = rng1;                  // Continue "hello" prng sequence.
//   document.write(Math.random());       // Always 0.554769432473455
//
//   Math.seedrandom(autoseed);           // Restart at the previous seed.
//   document.write(Math.random());       // Repeat the 'unpredictable' value.
//
// Notes:
//
// Each time seedrandom('arg') is called, entropy from the passed seed
// is accumulated in a pool to help generate future seeds for the
// zero-argument form of Math.seedrandom, so entropy can be injected over
// time by calling seedrandom with explicit data repeatedly.
//
// On speed - This javascript implementation of Math.random() is about
// 3-10x slower than the built-in Math.random() because it is not native
// code, but this is typically fast enough anyway.  Seeding is more expensive,
// especially if you use auto-seeding.  Some details (timings on Chrome 4):
//
// Our Math.random()            - avg less than 0.002 milliseconds per call
// seedrandom('explicit')       - avg less than 0.5 milliseconds per call
// seedrandom('explicit', true) - avg less than 2 milliseconds per call
// seedrandom()                 - avg about 38 milliseconds per call
//
// LICENSE (BSD):
//
// Copyright 2010 David Bau, all rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
//   1. Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
// 
//   3. Neither the name of this module nor the names of its contributors may
//      be used to endorse or promote products derived from this software
//      without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
/**
 * All code is in an anonymous closure to keep the global namespace clean.
 *
 * @param {number=} overflow 
 * @param {number=} startdenom
 */ // Patched by Seb so that seedrandom.js does not pollute the Math object.
// My tests suggest that doing Math.trouble = 1 makes Math lookups about 5%
// slower.
numeric.seedrandom = {
    pow: Math.pow,
    random: Math.random
};
(function(pool, math, width, chunks, significance, overflow, startdenom) {
    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    math['seedrandom'] = function seedrandom(seed, use_entropy) {
        var key = [];
        var arc4;
        // Flatten the seed string or build one from local entropy if needed.
        seed = mixkey(flatten(use_entropy ? [
            seed,
            pool
        ] : arguments.length ? seed : [
            new Date().getTime(),
            pool,
            window
        ], 3), key);
        // Use the seed to initialize an ARC4 generator.
        arc4 = new ARC4(key);
        // Mix the randomness into accumulated entropy.
        mixkey(arc4.S, pool);
        // Override Math.random
        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        math['random'] = function random() {
            var n = arc4.g(chunks); // Start with a numerator n < 2 ^ 48
            var d = startdenom; //   and denominator d = 2 ^ 48.
            var x = 0; //   and no 'extra last byte'.
            while(n < significance){
                n = (n + x) * width; //   shifting numerator and
                d *= width; //   denominator and generating a
                x = arc4.g(1); //   new least-significant-byte.
            }
            while(n >= overflow){
                n /= 2; //   last byte, shift everything
                d /= 2; //   right using integer math until
                x >>>= 1; //   we have exactly the desired bits.
            }
            return (n + x) / d; // Form the number within [0, 1).
        };
        // Return the seed that was used
        return seed;
    };
    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    /** @constructor */ function ARC4(key) {
        var t, u, me = this, keylen = key.length;
        var i = 0, j = me.i = me.j = me.m = 0;
        me.S = [];
        me.c = [];
        // The empty key [] is treated as [0].
        if (!keylen) key = [
            keylen++
        ];
        // Set up S using the standard key scheduling algorithm.
        while(i < width)me.S[i] = i++;
        for(i = 0; i < width; i++){
            t = me.S[i];
            j = lowbits(j + t + key[i % keylen]);
            u = me.S[j];
            me.S[i] = u;
            me.S[j] = t;
        }
        // The "g" method returns the next (count) outputs as one number.
        me.g = function getnext(count) {
            var s = me.S;
            var i = lowbits(me.i + 1);
            var t = s[i];
            var j = lowbits(me.j + t);
            var u = s[j];
            s[i] = u;
            s[j] = t;
            var r = s[lowbits(t + u)];
            while(--count){
                i = lowbits(i + 1);
                t = s[i];
                j = lowbits(j + t);
                u = s[j];
                s[i] = u;
                s[j] = t;
                r = r * width + s[lowbits(t + u)];
            }
            me.i = i;
            me.j = j;
            return r;
        };
        // For robust unpredictability discard an initial batch of values.
        // See http://www.rsa.com/rsalabs/node.asp?id=2009
        me.g(width);
    }
    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    /** @param {Object=} result 
  * @param {string=} prop
  * @param {string=} typ */ function flatten(obj, depth, result, prop, typ) {
        result = [];
        typ = typeof obj;
        if (depth && typ == 'object') for(prop in obj){
            if (prop.indexOf('S') < 5) try {
                result.push(flatten(obj[prop], depth - 1));
            } catch (e) {}
        }
        return result.length ? result : obj + (typ != 'string' ? '\0' : '');
    }
    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    /** @param {number=} smear 
  * @param {number=} j */ function mixkey(seed, key, smear, j) {
        seed += ''; // Ensure the seed is a string
        smear = 0;
        for(j = 0; j < seed.length; j++)key[lowbits(j)] = lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
        seed = '';
        for(j in key)seed += String.fromCharCode(key[j]);
        return seed;
    }
    //
    // lowbits()
    // A quick "n mod width" for width a power of 2.
    //
    function lowbits(n) {
        return n & width - 1;
    }
    //
    // The following constants are related to IEEE 754 limits.
    //
    startdenom = math.pow(width, chunks);
    significance = math.pow(2, significance);
    overflow = significance * 2;
    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to intefere with determinstic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);
// End anonymous scope, and pass initial values.
})([], numeric.seedrandom, 256, 6, 52 // significance: there are 52 significant digits in a double
);
/* This file is a slightly modified version of quadprog.js from Alberto Santini.
 * It has been slightly modified by Sébastien Loisel to make sure that it handles
 * 0-based Arrays instead of 1-based Arrays.
 * License is in resources/LICENSE.quadprog */ (function(exports1) {
    function base0to1(A) {
        if (typeof A !== "object") return A;
        var ret = [], i, n = A.length;
        for(i = 0; i < n; i++)ret[i + 1] = base0to1(A[i]);
        return ret;
    }
    function base1to0(A) {
        if (typeof A !== "object") return A;
        var ret = [], i, n = A.length;
        for(i = 1; i < n; i++)ret[i - 1] = base1to0(A[i]);
        return ret;
    }
    function dpori(a, lda, n) {
        var i, j, k, kp1, t;
        for(k = 1; k <= n; k = k + 1){
            a[k][k] = 1 / a[k][k];
            t = -a[k][k];
            //~ dscal(k - 1, t, a[1][k], 1);
            for(i = 1; i < k; i = i + 1)a[i][k] = t * a[i][k];
            kp1 = k + 1;
            if (n < kp1) break;
            for(j = kp1; j <= n; j = j + 1){
                t = a[k][j];
                a[k][j] = 0;
                //~ daxpy(k, t, a[1][k], 1, a[1][j], 1);
                for(i = 1; i <= k; i = i + 1)a[i][j] = a[i][j] + t * a[i][k];
            }
        }
    }
    function dposl(a, lda, n, b) {
        var i, k, kb, t;
        for(k = 1; k <= n; k = k + 1){
            //~ t = ddot(k - 1, a[1][k], 1, b[1], 1);
            t = 0;
            for(i = 1; i < k; i = i + 1)t = t + a[i][k] * b[i];
            b[k] = (b[k] - t) / a[k][k];
        }
        for(kb = 1; kb <= n; kb = kb + 1){
            k = n + 1 - kb;
            b[k] = b[k] / a[k][k];
            t = -b[k];
            //~ daxpy(k - 1, t, a[1][k], 1, b[1], 1);
            for(i = 1; i < k; i = i + 1)b[i] = b[i] + t * a[i][k];
        }
    }
    function dpofa(a, lda, n, info) {
        var i, j, jm1, k, t, s;
        for(j = 1; j <= n; j = j + 1){
            info[1] = j;
            s = 0;
            jm1 = j - 1;
            if (jm1 < 1) {
                s = a[j][j] - s;
                if (s <= 0) break;
                a[j][j] = Math.sqrt(s);
            } else {
                for(k = 1; k <= jm1; k = k + 1){
                    //~ t = a[k][j] - ddot(k - 1, a[1][k], 1, a[1][j], 1);
                    t = a[k][j];
                    for(i = 1; i < k; i = i + 1)t = t - a[i][j] * a[i][k];
                    t = t / a[k][k];
                    a[k][j] = t;
                    s = s + t * t;
                }
                s = a[j][j] - s;
                if (s <= 0) break;
                a[j][j] = Math.sqrt(s);
            }
            info[1] = 0;
        }
    }
    function qpgen2(dmat, dvec, fddmat, n, sol, crval, amat, bvec, fdamat, q, meq, iact, nact, iter, work, ierr) {
        var i, j, l, l1, info, it1, iwzv, iwrv, iwrm, iwsv, iwuv, nvl, r, iwnbv, temp, sum, t1, tt, gc, gs, nu, t1inf, t2min, vsmall, tmpa, tmpb, go;
        r = Math.min(n, q);
        l = 2 * n + r * (r + 5) / 2 + 2 * q + 1;
        vsmall = 1.0e-60;
        do {
            vsmall = vsmall + vsmall;
            tmpa = 1 + 0.1 * vsmall;
            tmpb = 1 + 0.2 * vsmall;
        }while (tmpa <= 1 || tmpb <= 1);
        for(i = 1; i <= n; i = i + 1)work[i] = dvec[i];
        for(i = n + 1; i <= l; i = i + 1)work[i] = 0;
        for(i = 1; i <= q; i = i + 1)iact[i] = 0;
        info = [];
        if (ierr[1] === 0) {
            dpofa(dmat, fddmat, n, info);
            if (info[1] !== 0) {
                ierr[1] = 2;
                return;
            }
            dposl(dmat, fddmat, n, dvec);
            dpori(dmat, fddmat, n);
        } else {
            for(j = 1; j <= n; j = j + 1){
                sol[j] = 0;
                for(i = 1; i <= j; i = i + 1)sol[j] = sol[j] + dmat[i][j] * dvec[i];
            }
            for(j = 1; j <= n; j = j + 1){
                dvec[j] = 0;
                for(i = j; i <= n; i = i + 1)dvec[j] = dvec[j] + dmat[j][i] * sol[i];
            }
        }
        crval[1] = 0;
        for(j = 1; j <= n; j = j + 1){
            sol[j] = dvec[j];
            crval[1] = crval[1] + work[j] * sol[j];
            work[j] = 0;
            for(i = j + 1; i <= n; i = i + 1)dmat[i][j] = 0;
        }
        crval[1] = -crval[1] / 2;
        ierr[1] = 0;
        iwzv = n;
        iwrv = iwzv + n;
        iwuv = iwrv + r;
        iwrm = iwuv + r + 1;
        iwsv = iwrm + r * (r + 1) / 2;
        iwnbv = iwsv + q;
        for(i = 1; i <= q; i = i + 1){
            sum = 0;
            for(j = 1; j <= n; j = j + 1)sum = sum + amat[j][i] * amat[j][i];
            work[iwnbv + i] = Math.sqrt(sum);
        }
        nact = 0;
        iter[1] = 0;
        iter[2] = 0;
        function fn_goto_50() {
            iter[1] = iter[1] + 1;
            l = iwsv;
            for(i = 1; i <= q; i = i + 1){
                l = l + 1;
                sum = -bvec[i];
                for(j = 1; j <= n; j = j + 1)sum = sum + amat[j][i] * sol[j];
                if (Math.abs(sum) < vsmall) sum = 0;
                if (i > meq) work[l] = sum;
                else {
                    work[l] = -Math.abs(sum);
                    if (sum > 0) {
                        for(j = 1; j <= n; j = j + 1)amat[j][i] = -amat[j][i];
                        bvec[i] = -bvec[i];
                    }
                }
            }
            for(i = 1; i <= nact; i = i + 1)work[iwsv + iact[i]] = 0;
            nvl = 0;
            temp = 0;
            for(i = 1; i <= q; i = i + 1)if (work[iwsv + i] < temp * work[iwnbv + i]) {
                nvl = i;
                temp = work[iwsv + i] / work[iwnbv + i];
            }
            if (nvl === 0) return 999;
            return 0;
        }
        function fn_goto_55() {
            for(i = 1; i <= n; i = i + 1){
                sum = 0;
                for(j = 1; j <= n; j = j + 1)sum = sum + dmat[j][i] * amat[j][nvl];
                work[i] = sum;
            }
            l1 = iwzv;
            for(i = 1; i <= n; i = i + 1)work[l1 + i] = 0;
            for(j = nact + 1; j <= n; j = j + 1)for(i = 1; i <= n; i = i + 1)work[l1 + i] = work[l1 + i] + dmat[i][j] * work[j];
            t1inf = true;
            for(i = nact; i >= 1; i = i - 1){
                sum = work[i];
                l = iwrm + i * (i + 3) / 2;
                l1 = l - i;
                for(j = i + 1; j <= nact; j = j + 1){
                    sum = sum - work[l] * work[iwrv + j];
                    l = l + j;
                }
                sum = sum / work[l1];
                work[iwrv + i] = sum;
                if (iact[i] < meq) break;
                if (sum < 0) break;
                t1inf = false;
                it1 = i;
            }
            if (!t1inf) {
                t1 = work[iwuv + it1] / work[iwrv + it1];
                for(i = 1; i <= nact; i = i + 1){
                    if (iact[i] < meq) break;
                    if (work[iwrv + i] < 0) break;
                    temp = work[iwuv + i] / work[iwrv + i];
                    if (temp < t1) {
                        t1 = temp;
                        it1 = i;
                    }
                }
            }
            sum = 0;
            for(i = iwzv + 1; i <= iwzv + n; i = i + 1)sum = sum + work[i] * work[i];
            if (Math.abs(sum) <= vsmall) {
                if (t1inf) {
                    ierr[1] = 1;
                    // GOTO 999
                    return 999;
                } else {
                    for(i = 1; i <= nact; i = i + 1)work[iwuv + i] = work[iwuv + i] - t1 * work[iwrv + i];
                    work[iwuv + nact + 1] = work[iwuv + nact + 1] + t1;
                    // GOTO 700
                    return 700;
                }
            } else {
                sum = 0;
                for(i = 1; i <= n; i = i + 1)sum = sum + work[iwzv + i] * amat[i][nvl];
                tt = -work[iwsv + nvl] / sum;
                t2min = true;
                if (!t1inf) {
                    if (t1 < tt) {
                        tt = t1;
                        t2min = false;
                    }
                }
                for(i = 1; i <= n; i = i + 1){
                    sol[i] = sol[i] + tt * work[iwzv + i];
                    if (Math.abs(sol[i]) < vsmall) sol[i] = 0;
                }
                crval[1] = crval[1] + tt * sum * (tt / 2 + work[iwuv + nact + 1]);
                for(i = 1; i <= nact; i = i + 1)work[iwuv + i] = work[iwuv + i] - tt * work[iwrv + i];
                work[iwuv + nact + 1] = work[iwuv + nact + 1] + tt;
                if (t2min) {
                    nact = nact + 1;
                    iact[nact] = nvl;
                    l = iwrm + (nact - 1) * nact / 2 + 1;
                    for(i = 1; i <= nact - 1; i = i + 1){
                        work[l] = work[i];
                        l = l + 1;
                    }
                    if (nact === n) work[l] = work[n];
                    else {
                        for(i = n; i >= nact + 1; i = i - 1){
                            if (work[i] === 0) break;
                            gc = Math.max(Math.abs(work[i - 1]), Math.abs(work[i]));
                            gs = Math.min(Math.abs(work[i - 1]), Math.abs(work[i]));
                            if (work[i - 1] >= 0) temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
                            else temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
                            gc = work[i - 1] / temp;
                            gs = work[i] / temp;
                            if (gc === 1) break;
                            if (gc === 0) {
                                work[i - 1] = gs * temp;
                                for(j = 1; j <= n; j = j + 1){
                                    temp = dmat[j][i - 1];
                                    dmat[j][i - 1] = dmat[j][i];
                                    dmat[j][i] = temp;
                                }
                            } else {
                                work[i - 1] = temp;
                                nu = gs / (1 + gc);
                                for(j = 1; j <= n; j = j + 1){
                                    temp = gc * dmat[j][i - 1] + gs * dmat[j][i];
                                    dmat[j][i] = nu * (dmat[j][i - 1] + temp) - dmat[j][i];
                                    dmat[j][i - 1] = temp;
                                }
                            }
                        }
                        work[l] = work[nact];
                    }
                } else {
                    sum = -bvec[nvl];
                    for(j = 1; j <= n; j = j + 1)sum = sum + sol[j] * amat[j][nvl];
                    if (nvl > meq) work[iwsv + nvl] = sum;
                    else {
                        work[iwsv + nvl] = -Math.abs(sum);
                        if (sum > 0) {
                            for(j = 1; j <= n; j = j + 1)amat[j][nvl] = -amat[j][nvl];
                            bvec[nvl] = -bvec[nvl];
                        }
                    }
                    // GOTO 700
                    return 700;
                }
            }
            return 0;
        }
        function fn_goto_797() {
            l = iwrm + it1 * (it1 + 1) / 2 + 1;
            l1 = l + it1;
            if (work[l1] === 0) // GOTO 798
            return 798;
            gc = Math.max(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
            gs = Math.min(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
            if (work[l1 - 1] >= 0) temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
            else temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
            gc = work[l1 - 1] / temp;
            gs = work[l1] / temp;
            if (gc === 1) // GOTO 798
            return 798;
            if (gc === 0) {
                for(i = it1 + 1; i <= nact; i = i + 1){
                    temp = work[l1 - 1];
                    work[l1 - 1] = work[l1];
                    work[l1] = temp;
                    l1 = l1 + i;
                }
                for(i = 1; i <= n; i = i + 1){
                    temp = dmat[i][it1];
                    dmat[i][it1] = dmat[i][it1 + 1];
                    dmat[i][it1 + 1] = temp;
                }
            } else {
                nu = gs / (1 + gc);
                for(i = it1 + 1; i <= nact; i = i + 1){
                    temp = gc * work[l1 - 1] + gs * work[l1];
                    work[l1] = nu * (work[l1 - 1] + temp) - work[l1];
                    work[l1 - 1] = temp;
                    l1 = l1 + i;
                }
                for(i = 1; i <= n; i = i + 1){
                    temp = gc * dmat[i][it1] + gs * dmat[i][it1 + 1];
                    dmat[i][it1 + 1] = nu * (dmat[i][it1] + temp) - dmat[i][it1 + 1];
                    dmat[i][it1] = temp;
                }
            }
            return 0;
        }
        function fn_goto_798() {
            l1 = l - it1;
            for(i = 1; i <= it1; i = i + 1){
                work[l1] = work[l];
                l = l + 1;
                l1 = l1 + 1;
            }
            work[iwuv + it1] = work[iwuv + it1 + 1];
            iact[it1] = iact[it1 + 1];
            it1 = it1 + 1;
            if (it1 < nact) // GOTO 797
            return 797;
            return 0;
        }
        function fn_goto_799() {
            work[iwuv + nact] = work[iwuv + nact + 1];
            work[iwuv + nact + 1] = 0;
            iact[nact] = 0;
            nact = nact - 1;
            iter[2] = iter[2] + 1;
            return 0;
        }
        go = 0;
        while(true){
            go = fn_goto_50();
            if (go === 999) return;
            while(true){
                go = fn_goto_55();
                if (go === 0) break;
                if (go === 999) return;
                if (go === 700) {
                    if (it1 === nact) fn_goto_799();
                    else {
                        while(true){
                            fn_goto_797();
                            go = fn_goto_798();
                            if (go !== 797) break;
                        }
                        fn_goto_799();
                    }
                }
            }
        }
    }
    function solveQP(Dmat, dvec, Amat, bvec, meq, factorized) {
        Dmat = base0to1(Dmat);
        dvec = base0to1(dvec);
        Amat = base0to1(Amat);
        var i, n, q, nact, r, crval = [], iact = [], sol = [], work = [], iter = [], message;
        meq = meq || 0;
        factorized = factorized ? base0to1(factorized) : [
            undefined,
            0
        ];
        bvec = bvec ? base0to1(bvec) : [];
        // In Fortran the array index starts from 1
        n = Dmat.length - 1;
        q = Amat[1].length - 1;
        if (!bvec) for(i = 1; i <= q; i = i + 1)bvec[i] = 0;
        for(i = 1; i <= q; i = i + 1)iact[i] = 0;
        nact = 0;
        r = Math.min(n, q);
        for(i = 1; i <= n; i = i + 1)sol[i] = 0;
        crval[1] = 0;
        for(i = 1; i <= 2 * n + r * (r + 5) / 2 + 2 * q + 1; i = i + 1)work[i] = 0;
        for(i = 1; i <= 2; i = i + 1)iter[i] = 0;
        qpgen2(Dmat, dvec, n, n, sol, crval, Amat, bvec, n, q, meq, iact, nact, iter, work, factorized);
        message = "";
        if (factorized[1] === 1) message = "constraints are inconsistent, no solution!";
        if (factorized[1] === 2) message = "matrix D in quadratic function is not positive definite!";
        return {
            solution: base1to0(sol),
            value: base1to0(crval),
            unconstrained_solution: base1to0(dvec),
            iterations: base1to0(iter),
            iact: base1to0(iact),
            message: message
        };
    }
    exports1.solveQP = solveQP;
})(numeric);
/*
Shanti Rao sent me this routine by private email. I had to modify it
slightly to work on Arrays instead of using a Matrix object.
It is apparently translated from http://stitchpanorama.sourceforge.net/Python/svd.py
*/ numeric.svd = function svd(A) {
    var temp;
    //Compute the thin SVD from G. H. Golub and C. Reinsch, Numer. Math. 14, 403-420 (1970)
    var prec = numeric.epsilon; //Math.pow(2,-52) // assumes double prec
    var tolerance = 1.e-64 / prec;
    var itmax = 50;
    var c = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var u = numeric.clone(A);
    var m = u.length;
    var n = u[0].length;
    if (m < n) throw "Need more rows than columns";
    var e = new Array(n);
    var q = new Array(n);
    for(i = 0; i < n; i++)e[i] = q[i] = 0.0;
    var v = numeric.rep([
        n,
        n
    ], 0);
    //	v.zero();
    function pythag(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        if (a > b) return a * Math.sqrt(1.0 + b * b / a / a);
        else if (b == 0.0) return a;
        return b * Math.sqrt(1.0 + a * a / b / b);
    }
    //Householder's reduction to bidiagonal form
    var f = 0.0;
    var g = 0.0;
    var h = 0.0;
    var x = 0.0;
    var y = 0.0;
    var z = 0.0;
    var s = 0.0;
    for(i = 0; i < n; i++){
        e[i] = g;
        s = 0.0;
        l = i + 1;
        for(j = i; j < m; j++)s += u[j][i] * u[j][i];
        if (s <= tolerance) g = 0.0;
        else {
            f = u[i][i];
            g = Math.sqrt(s);
            if (f >= 0.0) g = -g;
            h = f * g - s;
            u[i][i] = f - g;
            for(j = l; j < n; j++){
                s = 0.0;
                for(k = i; k < m; k++)s += u[k][i] * u[k][j];
                f = s / h;
                for(k = i; k < m; k++)u[k][j] += f * u[k][i];
            }
        }
        q[i] = g;
        s = 0.0;
        for(j = l; j < n; j++)s = s + u[i][j] * u[i][j];
        if (s <= tolerance) g = 0.0;
        else {
            f = u[i][i + 1];
            g = Math.sqrt(s);
            if (f >= 0.0) g = -g;
            h = f * g - s;
            u[i][i + 1] = f - g;
            for(j = l; j < n; j++)e[j] = u[i][j] / h;
            for(j = l; j < m; j++){
                s = 0.0;
                for(k = l; k < n; k++)s += u[j][k] * u[i][k];
                for(k = l; k < n; k++)u[j][k] += s * e[k];
            }
        }
        y = Math.abs(q[i]) + Math.abs(e[i]);
        if (y > x) x = y;
    }
    // accumulation of right hand gtransformations
    for(i = n - 1; i != -1; i += -1){
        if (g != 0.0) {
            h = g * u[i][i + 1];
            for(j = l; j < n; j++)v[j][i] = u[i][j] / h;
            for(j = l; j < n; j++){
                s = 0.0;
                for(k = l; k < n; k++)s += u[i][k] * v[k][j];
                for(k = l; k < n; k++)v[k][j] += s * v[k][i];
            }
        }
        for(j = l; j < n; j++){
            v[i][j] = 0;
            v[j][i] = 0;
        }
        v[i][i] = 1;
        g = e[i];
        l = i;
    }
    // accumulation of left hand transformations
    for(i = n - 1; i != -1; i += -1){
        l = i + 1;
        g = q[i];
        for(j = l; j < n; j++)u[i][j] = 0;
        if (g != 0.0) {
            h = u[i][i] * g;
            for(j = l; j < n; j++){
                s = 0.0;
                for(k = l; k < m; k++)s += u[k][i] * u[k][j];
                f = s / h;
                for(k = i; k < m; k++)u[k][j] += f * u[k][i];
            }
            for(j = i; j < m; j++)u[j][i] = u[j][i] / g;
        } else for(j = i; j < m; j++)u[j][i] = 0;
        u[i][i] += 1;
    }
    // diagonalization of the bidiagonal form
    prec = prec * x;
    for(k = n - 1; k != -1; k += -1)for(var iteration = 0; iteration < itmax; iteration++){
        var test_convergence = false;
        for(l = k; l != -1; l += -1){
            if (Math.abs(e[l]) <= prec) {
                test_convergence = true;
                break;
            }
            if (Math.abs(q[l - 1]) <= prec) break;
        }
        if (!test_convergence) {
            c = 0.0;
            s = 1.0;
            var l1 = l - 1;
            for(i = l; i < k + 1; i++){
                f = s * e[i];
                e[i] = c * e[i];
                if (Math.abs(f) <= prec) break;
                g = q[i];
                h = pythag(f, g);
                q[i] = h;
                c = g / h;
                s = -f / h;
                for(j = 0; j < m; j++){
                    y = u[j][l1];
                    z = u[j][i];
                    u[j][l1] = y * c + z * s;
                    u[j][i] = -y * s + z * c;
                }
            }
        }
        // test f convergence
        z = q[k];
        if (l == k) {
            if (z < 0.0) {
                q[k] = -z;
                for(j = 0; j < n; j++)v[j][k] = -v[j][k];
            }
            break; //break out of iteration loop and move on to next k value
        }
        if (iteration >= itmax - 1) throw 'Error: no convergence.';
        // shift from bottom 2x2 minor
        x = q[l];
        y = q[k - 1];
        g = e[k - 1];
        h = e[k];
        f = ((y - z) * (y + z) + (g - h) * (g + h)) / (2.0 * h * y);
        g = pythag(f, 1.0);
        if (f < 0.0) f = ((x - z) * (x + z) + h * (y / (f - g) - h)) / x;
        else f = ((x - z) * (x + z) + h * (y / (f + g) - h)) / x;
        // next QR transformation
        c = 1.0;
        s = 1.0;
        for(i = l + 1; i < k + 1; i++){
            g = e[i];
            y = q[i];
            h = s * g;
            g = c * g;
            z = pythag(f, h);
            e[i - 1] = z;
            c = f / z;
            s = h / z;
            f = x * c + g * s;
            g = -x * s + g * c;
            h = y * s;
            y = y * c;
            for(j = 0; j < n; j++){
                x = v[j][i - 1];
                z = v[j][i];
                v[j][i - 1] = x * c + z * s;
                v[j][i] = -x * s + z * c;
            }
            z = pythag(f, h);
            q[i - 1] = z;
            c = f / z;
            s = h / z;
            f = c * g + s * y;
            x = -s * g + c * y;
            for(j = 0; j < m; j++){
                y = u[j][i - 1];
                z = u[j][i];
                u[j][i - 1] = y * c + z * s;
                u[j][i] = -y * s + z * c;
            }
        }
        e[l] = 0.0;
        e[k] = f;
        q[k] = x;
    }
    //vt= transpose(v)
    //return (u,q,vt)
    for(i = 0; i < q.length; i++)if (q[i] < prec) q[i] = 0;
    //sort eigenvalues	
    for(i = 0; i < n; i++){
        //writeln(q)
        for(j = i - 1; j >= 0; j--)if (q[j] < q[i]) {
            //  writeln(i,'-',j)
            c = q[j];
            q[j] = q[i];
            q[i] = c;
            for(k = 0; k < u.length; k++){
                temp = u[k][i];
                u[k][i] = u[k][j];
                u[k][j] = temp;
            }
            for(k = 0; k < v.length; k++){
                temp = v[k][i];
                v[k][i] = v[k][j];
                v[k][j] = temp;
            }
            //	   u.swapCols(i,j)
            //	   v.swapCols(i,j)
            i = j;
        }
    }
    return {
        U: u,
        S: q,
        V: v
    };
};

},{}]},["gXJUK","fILKw"], "fILKw", "parcelRequirecd36", {})

//# sourceMappingURL=simple.1fcc916e.js.map
