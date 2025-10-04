import Maptastic from 'maptastic';
import { useEffect } from 'react';

const useMaptastic = (ref) => {
  useEffect(() => {
    if (ref.current) {
      if (ref.current instanceof HTMLElement) {
        const map = new Maptastic({
          autoSave: false,
          autoLoad: false
        });
        map.addLayer(ref.current);
      }
    }
  });
};

export { useMaptastic as default };
//# sourceMappingURL=index.mjs.map
