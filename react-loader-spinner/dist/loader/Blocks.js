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
var react_1 = __importDefault(require("react"));
var type_1 = require("../type");
function Blocks(_a) {
    var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.width, width = _c === void 0 ? '80' : _c, _d = _a.height, height = _d === void 0 ? '80' : _d, _e = _a.wrapperClass, wrapperClass = _e === void 0 ? '' : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? 'blocks-loading' : _g;
    return !visible ? null : (react_1.default.createElement("svg", __assign({ width: width, height: height, className: wrapperClass, style: wrapperStyle, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", "aria-label": ariaLabel, "data-testid": "blocks-svg" }, type_1.DEFAULT_WAI_ARIA_ATTRIBUTE),
        react_1.default.createElement("rect", { x: "17", y: "17", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "40", y: "17", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.125s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "63", y: "17", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.25s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "17", y: "40", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.875s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "63", y: "40", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.375s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "17", y: "63", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.75s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "40", y: "63", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.625s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "63", y: "63", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.5s", calcMode: "discrete" }))));
}
exports.default = Blocks;
