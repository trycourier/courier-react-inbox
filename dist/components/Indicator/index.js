"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var _Bell = _interopRequireDefault(require("./Bell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//@ts-ignore
function Indicator(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(_styled.Container, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_Bell["default"], null));
}

var _default = Indicator;
exports["default"] = _default;