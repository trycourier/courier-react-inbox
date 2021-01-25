"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCloseOnClickOut = useCloseOnClickOut;

var _react = require("react");

function useCloseOnClickOut(element, enabled, close) {
  var handleClick = (0, _react.useCallback)(function (e) {
    if (element !== e.target && !element.contains(e.target)) {
      close();
    }
  }, [close, element]);
  (0, _react.useEffect)(function () {
    if (enabled && element) {
      document.body.addEventListener("click", handleClick);
    }

    return function () {
      return document.body.removeEventListener("click", handleClick);
    };
  }, [element, enabled, handleClick]);
}