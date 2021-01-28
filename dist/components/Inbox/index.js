"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _Message = _interopRequireDefault(require("../Message"));

var _hooks = require("../../hooks");

var _styled = require("./styled");

require("../../style.css");

var _close = _interopRequireDefault(require("./close.svg"));

var _courier = _interopRequireDefault(require("./courier.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Inbox(_ref) {
  var messages = _ref.messages,
      title = _ref.title,
      onClose = _ref.onClose,
      onMessageClick = _ref.onMessageClick,
      indicator = _ref.indicator,
      _show = _ref.show,
      closeOnClickOut = _ref.closeOnClickOut;
  var rootRef = (0, _react.useRef)();
  var show = !indicator ? true : indicator && _show ? true : false;
  (0, _hooks.useCloseOnClickOut)(rootRef.current, show && closeOnClickOut, onClose);
  return /*#__PURE__*/_react["default"].createElement(_styled.Container, {
    "data-test-id": "inbox-container",
    ref: rootRef,
    show: show
  }, /*#__PURE__*/_react["default"].createElement(_styled.Header, null, /*#__PURE__*/_react["default"].createElement(_styled.Title, null, title), /*#__PURE__*/_react["default"].createElement(_styled.Close, {
    onClick: onClose,
    src: _close["default"]
  })), /*#__PURE__*/_react["default"].createElement(_styled.SubTitle, null, "INBOX"), /*#__PURE__*/_react["default"].createElement(_styled.Body, null, messages.map(function (message, index) {
    return /*#__PURE__*/_react["default"].createElement(_Message["default"], _extends({
      onClick: function onClick() {
        return onMessageClick(message);
      },
      key: index
    }, message));
  })), /*#__PURE__*/_react["default"].createElement(_styled.Footer, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: _courier["default"]
  })));
}

function ThemeWrapper(_ref2) {
  var _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? {} : _ref2$theme,
      props = _objectWithoutProperties(_ref2, ["theme"]);

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(Inbox, props));
}

var _default = ThemeWrapper;
exports["default"] = _default;