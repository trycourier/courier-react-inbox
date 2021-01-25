"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCloseOnClickOut = void 0;
var react_1 = require("react");
function useCloseOnClickOut(element, enabled, close) {
    var handleClick = react_1.useCallback(function (e) {
        if (element !== e.target && !element.contains(e.target)) {
            close();
        }
    }, [close, element]);
    react_1.useEffect(function () {
        if (enabled && element) {
            document.body.addEventListener("click", handleClick);
        }
        return function () { return document.body.removeEventListener("click", handleClick); };
    }, [element, enabled, handleClick]);
}
exports.useCloseOnClickOut = useCloseOnClickOut;
