import Maptastic from "maptastic";
import { useEffect, type RefObject } from "react";

const useMaptastic = <T>(ref: RefObject<T>) => {
  useEffect(() => {
    if (ref.current) {
      if (ref.current instanceof HTMLElement) {
        const map = new Maptastic({
          autoSave: false,
          autoLoad: false,
        });
        map.addLayer(ref.current);
      }
    }
  });
};

export default useMaptastic;
