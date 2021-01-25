"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
//@ts-ignore
var Bell_1 = __importDefault(require("./Bell"));
function Indicator(_a) {
    var onClick = _a.onClick;
    return (react_1.default.createElement(styled_1.Container, { onClick: onClick },
        react_1.default.createElement(Bell_1.default, null)));
}
exports.default = Indicator;
