"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Message(_ref) {
  var title = _ref.title,
      body = _ref.body,
      icon = _ref.icon,
      onClick = _ref.onClick,
      read = _ref.read;
  return /*#__PURE__*/_react["default"].createElement(_styled.Root, {
    "data-test-id": "inbox-message",
    read: read,
    onClick: onClick
  }, read && /*#__PURE__*/_react["default"].createElement(_styled.ReadIndicator, null), /*#__PURE__*/_react["default"].createElement(_styled.Icon, {
    src: icon
  }), /*#__PURE__*/_react["default"].createElement(_styled.Container, null, /*#__PURE__*/_react["default"].createElement(_styled.Title, null, title), /*#__PURE__*/_react["default"].createElement(_styled.Body, null, body)));
}

var _default = Message;
exports["default"] = _default;