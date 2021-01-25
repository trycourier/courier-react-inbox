"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([" \n  width: min-content;\n  svg {\n    cursor: pointer;\n    height: 20px;\n    width: 20px;\n    :hover g {\n      fill: #9d3789;\n      transition: all 0.05s ease-in-out;\n    }\n  }\n"], [" \n  width: min-content;\n  svg {\n    cursor: pointer;\n    height: 20px;\n    width: 20px;\n    :hover g {\n      fill: #9d3789;\n      transition: all 0.05s ease-in-out;\n    }\n  }\n"])));
var templateObject_1;
