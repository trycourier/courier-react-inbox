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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.Body = exports.Container = exports.Title = exports.ReadIndicator = exports.Root = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Root = styled_components_1.default.button(function (_a) {
    var _b;
    var theme = _a.theme;
    return (__assign({ display: "flex", cursor: "pointer", outline: "none", border: "none", backgroundColor: "initial", position: "relative" }, (_b = theme.message) === null || _b === void 0 ? void 0 : _b.root));
});
exports.ReadIndicator = styled_components_1.default.div(function (_a) {
    var _b;
    var theme = _a.theme;
    return (__assign({ backgroundColor: "rgba(157, 55, 137, .5)", height: "50px", width: "2px", position: "absolute", left: "0" }, (_b = theme.message) === null || _b === void 0 ? void 0 : _b.read));
});
exports.Title = styled_components_1.default.div(function (_a) {
    var _b;
    var theme = _a.theme;
    return (__assign({ color: "rgb(52, 69, 99)", fontSize: "16px", lineHeight: "15px", fontWeight: "bold" }, (_b = theme.message) === null || _b === void 0 ? void 0 : _b.title));
});
exports.Container = styled_components_1.default.div(function (_a) {
    var _b;
    var theme = _a.theme;
    return (__assign({ margin: "0 20px" }, (_b = theme.message) === null || _b === void 0 ? void 0 : _b.container));
});
exports.Body = styled_components_1.default.div(function (_a) {
    var _b;
    var theme = _a.theme;
    return (__assign({ marginTop: "2px", fontSize: "12px" }, (_b = theme.message) === null || _b === void 0 ? void 0 : _b.body));
});
exports.Icon = styled_components_1.default.img(function (_a) {
    var _b;
    var theme = _a.theme;
    return (__assign({ objectFit: "contain", height: "40px", width: "40px", flexShrink: "0", padding: "5px", backgroundColor: "rgb(249, 249, 249)", borderRadius: "50%", marginLeft: "10px" }, (_b = theme.message) === null || _b === void 0 ? void 0 : _b.icon));
});
