"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = require("styled-components");
var Message_1 = __importDefault(require("../Message"));
var hooks_1 = require("../../hooks");
var styled_1 = require("./styled");
require("../../style.css");
//@ts-ignore
var close_svg_1 = __importDefault(require("./close.svg"));
//@ts-ignore
var courier_svg_1 = __importDefault(require("./courier.svg"));
function Inbox(_a) {
    var messages = _a.messages, title = _a.title, onClose = _a.onClose, onMessageClick = _a.onMessageClick, indicator = _a.indicator, closeOnClickOut = _a.closeOnClickOut;
    var rootRef = react_1.useRef();
    var show = !indicator ? true : indicator && _show ? true : false;
    hooks_1.useCloseOnClickOut(rootRef.current, show && closeOnClickOut, onClose);
    return (react_1.default.createElement(styled_1.Container, { ref: rootRef, show: show },
        react_1.default.createElement(styled_1.Header, null,
            react_1.default.createElement(styled_1.Title, null, title),
            react_1.default.createElement(styled_1.Close, { onClick: onClose, src: close_svg_1.default })),
        react_1.default.createElement(styled_1.SubTitle, null, "INBOX"),
        react_1.default.createElement(styled_1.Body, null, messages.map(function (message, index) { return react_1.default.createElement(Message_1.default, __assign({ onClick: function () { return onMessageClick(message); }, key: index }, message)); })),
        react_1.default.createElement(styled_1.Footer, null,
            react_1.default.createElement("img", { src: courier_svg_1.default }))));
}
function ThemeWrapper(_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(Inbox, __assign({}, props))));
}
exports.default = ThemeWrapper;
