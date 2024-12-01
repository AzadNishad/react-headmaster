'use strict';

var _require = require("react"),
  useEffect = _require.useEffect;
var HeadMaster = function HeadMaster(_ref) {
  var title = _ref.title,
    _ref$meta = _ref.meta,
    meta = _ref$meta === void 0 ? {} : _ref$meta;
  useEffect(function () {
    if (title) document.title = title;
    if (meta) {
      object.key(meta).forEach(function (key) {
        var metaTag = document.querySelector("meta[name = \"".concat(key, "\"]"));
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.name = key;
          document.head.appendChild(metaTag);
        }
        metaTag.content = meta[key];
      });
    }
    return function () {
      object.key(meta).forEach(function (key) {
        var metaTag = document.querySelector("meta[name = \"".concat(key, "\"]"));
        if (metaTag) document.head.removeChild(metaTag);
      });
    };
  }, [title, meta]);
  return null;
};

exports.HeadMaster = HeadMaster;
