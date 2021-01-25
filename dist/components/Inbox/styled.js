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
exports.SubTitle = exports.Close = exports.Header = exports.Footer = exports.Body = exports.Title = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, show = _a.show;
    return (__assign({ backgroundColor: "white", boxShadow: "rgba(157, 55, 137, 0.2) 0px 4px 12px", maxWidth: 400, borderRadius: 20, overflow: "hidden", opacity: show ? 1 : 0, visibility: show ? "visible" : "hidden", transition: "all .1s ease-in-out" }, theme.root));
});
exports.Title = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return (__assign({ color: "rgb(52, 69, 99)", fontSize: "16px", fontWeight: "bold", userSelect: "none" }, theme.title));
});
exports.Body = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return (__assign({ "display": "flex", "flexDirection": "column", "marginTop": "20px", "marginBottom": "5px", "&>*": {
            "paddingBottom": "15px",
            "marginBottom": "15px",
            "boxShadow": "0 .25px rgba(0, 0, 0, .4)",
            "&:last-child": {
                boxShadow: "none",
            },
        } }, theme.body));
});
exports.Footer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return (__assign({ "backgroundColor": "rgb(251, 251, 251)", "borderTop": "1px solid rgb(234, 238, 240)", "justifyContent": "center", "display": "flex", "height": "38px", "alignItems": "center", "img": {
            filter: "grayscale(100%)",
            height: "20px",
            width: "20px",
        } }, theme.footer));
});
exports.Header = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return (__assign({ display: "flex", justifyContent: "center", alignItems: "center", height: "50px", borderBottom: "2px solid rgb(157, 55, 137)", position: "relative" }, theme.header));
});
exports.Close = styled_components_1.default.img(function (_a) {
    var theme = _a.theme;
    return (__assign({ cursor: "pointer", height: "14px", width: "14px", position: "absolute", right: "20px", userSelect: "none" }, theme.close));
});
exports.SubTitle = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return (__assign({ marginTop: "20px", marginLeft: "20px", fontSize: "14px", fontWeight: "bold", color: "rgb(143, 143, 143)", userSelect: "none" }, theme.subTitle));
});
