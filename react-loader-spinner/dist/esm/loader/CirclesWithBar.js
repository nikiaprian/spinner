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
import React from 'react';
var getDefaultStyle = function (visible) { return ({
    display: visible ? 'flex' : 'none',
}); };
var CirclesWithBar = function (_a) {
    var _b = _a.wrapperStyle, wrapperStyle = _b === void 0 ? {} : _b, _c = _a.visible, visible = _c === void 0 ? true : _c, _d = _a.wrapperClass, wrapperClass = _d === void 0 ? '' : _d, _e = _a.height, height = _e === void 0 ? 100 : _e, _f = _a.width, width = _f === void 0 ? 100 : _f, _g = _a.color, color = _g === void 0 ? 'red' : _g, outerCircleColor = _a.outerCircleColor, innerCircleColor = _a.innerCircleColor, barColor = _a.barColor;
    return (React.createElement("div", { style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "circles-with-bar-wrapper" },
        React.createElement("svg", { version: "1.1", id: "L1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", height: "".concat(height), width: "".concat(width), viewBox: "0 0 100 100", enableBackground: "new 0 0 100 100", xmlSpace: "preserve", "data-testid": "circles-with-bar-svg" },
            React.createElement("circle", { fill: "none", stroke: "".concat(outerCircleColor || color), strokeWidth: "6", strokeMiterlimit: "15", strokeDasharray: "14.2472,14.2472", cx: "50", cy: "50", r: "47", "data-testid": "circles-with-bar-svg-outer-circle" },
                React.createElement("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "5s", from: "0 50 50", to: "360 50 50", repeatCount: "indefinite" })),
            React.createElement("circle", { fill: "none", stroke: "".concat(innerCircleColor || color), strokeWidth: "1", strokeMiterlimit: "10", strokeDasharray: "10,10", cx: "50", cy: "50", r: "39", "data-testid": "circles-with-bar-svg-inner-circle" },
                React.createElement("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "5s", from: "0 50 50", to: "-360 50 50", repeatCount: "indefinite" })),
            React.createElement("g", { fill: "".concat(barColor || color), "data-testid": "circles-with-bar-svg-bar" },
                React.createElement("rect", { x: "30", y: "35", width: "5", height: "30" },
                    React.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.1" })),
                React.createElement("rect", { x: "40", y: "35", width: "5", height: "30" },
                    React.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.2" })),
                React.createElement("rect", { x: "50", y: "35", width: "5", height: "30" },
                    React.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.3" })),
                React.createElement("rect", { x: "60", y: "35", width: "5", height: "30" },
                    React.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.4" })),
                React.createElement("rect", { x: "70", y: "35", width: "5", height: "30" },
                    React.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.5" }))))));
};
export default CirclesWithBar;
