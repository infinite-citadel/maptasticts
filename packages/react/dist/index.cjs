'use strict';

var Maptastic = require('maptastic');
var react = require('react');

const useMaptastic = (ref) => {
  react.useEffect(() => {
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

module.exports = useMaptastic;
//# sourceMappingURL=index.cjs.map
