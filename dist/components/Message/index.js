"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
function Message(_a) {
    var title = _a.title, body = _a.body, icon = _a.icon, onClick = _a.onClick, read = _a.read;
    return (react_1.default.createElement(styled_1.Root, { read: read, onClick: onClick },
        read && react_1.default.createElement(styled_1.ReadIndicator, null),
        react_1.default.createElement(styled_1.Icon, { src: icon }),
        react_1.default.createElement(styled_1.Container, null,
            react_1.default.createElement(styled_1.Title, null, title),
            react_1.default.createElement(styled_1.Body, null, body))));
}
exports.default = Message;
