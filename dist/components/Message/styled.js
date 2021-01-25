"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Body = exports.Container = exports.Title = exports.ReadIndicator = exports.Root = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Root = _styledComponents["default"].button.withConfig({
  displayName: "styled__Root",
  componentId: "sc-1ioog6p-0"
})(function (_ref) {
  var _theme$message;

  var theme = _ref.theme;
  return _objectSpread({
    display: "flex",
    cursor: "pointer",
    outline: "none",
    border: "none",
    backgroundColor: "initial",
    position: "relative"
  }, (_theme$message = theme.message) === null || _theme$message === void 0 ? void 0 : _theme$message.root);
});

exports.Root = Root;

var ReadIndicator = _styledComponents["default"].div.withConfig({
  displayName: "styled__ReadIndicator",
  componentId: "sc-1ioog6p-1"
})(function (_ref2) {
  var _theme$message2;

  var theme = _ref2.theme;
  return _objectSpread({
    backgroundColor: "rgba(157, 55, 137, .5)",
    height: "50px",
    width: "2px",
    position: "absolute",
    left: "0"
  }, (_theme$message2 = theme.message) === null || _theme$message2 === void 0 ? void 0 : _theme$message2.read);
});

exports.ReadIndicator = ReadIndicator;

var Title = _styledComponents["default"].div.withConfig({
  displayName: "styled__Title",
  componentId: "sc-1ioog6p-2"
})(function (_ref3) {
  var _theme$message3;

  var theme = _ref3.theme;
  return _objectSpread({
    color: "rgb(52, 69, 99)",
    fontSize: "16px",
    lineHeight: "15px",
    fontWeight: "bold"
  }, (_theme$message3 = theme.message) === null || _theme$message3 === void 0 ? void 0 : _theme$message3.title);
});

exports.Title = Title;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1ioog6p-3"
})(function (_ref4) {
  var _theme$message4;

  var theme = _ref4.theme;
  return _objectSpread({
    margin: "0 20px"
  }, (_theme$message4 = theme.message) === null || _theme$message4 === void 0 ? void 0 : _theme$message4.container);
});

exports.Container = Container;

var Body = _styledComponents["default"].div.withConfig({
  displayName: "styled__Body",
  componentId: "sc-1ioog6p-4"
})(function (_ref5) {
  var _theme$message5;

  var theme = _ref5.theme;
  return _objectSpread({
    marginTop: "2px",
    fontSize: "12px"
  }, (_theme$message5 = theme.message) === null || _theme$message5 === void 0 ? void 0 : _theme$message5.body);
});

exports.Body = Body;

var Icon = _styledComponents["default"].img.withConfig({
  displayName: "styled__Icon",
  componentId: "sc-1ioog6p-5"
})(function (_ref6) {
  var _theme$message6;

  var theme = _ref6.theme;
  return _objectSpread({
    objectFit: "contain",
    height: "40px",
    width: "40px",
    flexShrink: "0",
    padding: "5px",
    backgroundColor: "rgb(249, 249, 249)",
    borderRadius: "50%",
    marginLeft: "10px"
  }, (_theme$message6 = theme.message) === null || _theme$message6 === void 0 ? void 0 : _theme$message6.icon);
});

exports.Icon = Icon;