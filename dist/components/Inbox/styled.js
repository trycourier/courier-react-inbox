"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTitle = exports.Close = exports.Header = exports.Footer = exports.Body = exports.Title = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-14oug27-0"
})(function (_ref) {
  var theme = _ref.theme,
      show = _ref.show;
  return _objectSpread({
    backgroundColor: "white",
    boxShadow: "rgba(157, 55, 137, 0.2) 0px 4px 12px",
    maxWidth: 400,
    borderRadius: 20,
    overflow: "hidden",
    opacity: show ? 1 : 0,
    visibility: show ? "visible" : "hidden",
    transition: "all .1s ease-in-out"
  }, theme.root);
});

exports.Container = Container;

var Title = _styledComponents["default"].div.withConfig({
  displayName: "styled__Title",
  componentId: "sc-14oug27-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return _objectSpread({
    color: "rgb(52, 69, 99)",
    fontSize: "16px",
    fontWeight: "bold",
    userSelect: "none"
  }, theme.title);
});

exports.Title = Title;

var Body = _styledComponents["default"].div.withConfig({
  displayName: "styled__Body",
  componentId: "sc-14oug27-2"
})(function (_ref3) {
  var theme = _ref3.theme;
  return (0, _lodash["default"])({
    "display": "flex",
    "flexDirection": "column",
    "marginTop": "20px",
    "marginBottom": "5px",
    "&>*": {
      "paddingBottom": "15px",
      "marginBottom": "15px",
      "boxShadow": "0 .25px rgba(0, 0, 0, .4)",
      "&:last-child": {
        boxShadow: "none"
      }
    }
  }, theme.body);
});

exports.Body = Body;

var Footer = _styledComponents["default"].div.withConfig({
  displayName: "styled__Footer",
  componentId: "sc-14oug27-3"
})(function (_ref4) {
  var theme = _ref4.theme;
  return _objectSpread({
    "backgroundColor": "rgb(251, 251, 251)",
    "borderTop": "1px solid rgb(234, 238, 240)",
    "justifyContent": "center",
    "display": "flex",
    "height": "38px",
    "alignItems": "center",
    "img": {
      filter: "grayscale(100%)",
      height: "20px",
      width: "20px"
    }
  }, theme.footer);
});

exports.Footer = Footer;

var Header = _styledComponents["default"].div.withConfig({
  displayName: "styled__Header",
  componentId: "sc-14oug27-4"
})(function (_ref5) {
  var theme = _ref5.theme;
  return _objectSpread({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    borderBottom: "2px solid rgb(157, 55, 137)",
    position: "relative"
  }, theme.header);
});

exports.Header = Header;

var Close = _styledComponents["default"].img.withConfig({
  displayName: "styled__Close",
  componentId: "sc-14oug27-5"
})(function (_ref6) {
  var theme = _ref6.theme;
  return _objectSpread({
    cursor: "pointer",
    height: "14px",
    width: "14px",
    position: "absolute",
    right: "20px",
    userSelect: "none"
  }, theme.close);
});

exports.Close = Close;

var SubTitle = _styledComponents["default"].div.withConfig({
  displayName: "styled__SubTitle",
  componentId: "sc-14oug27-6"
})(function (_ref7) {
  var theme = _ref7.theme;
  return _objectSpread({
    marginTop: "20px",
    marginLeft: "20px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "rgb(143, 143, 143)",
    userSelect: "none"
  }, theme.subTitle);
});

exports.SubTitle = SubTitle;