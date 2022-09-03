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
import { jsxs as _jsxs } from "react/jsx-runtime";
import './myLabel.css';
var capitalizeFormat = function (text) { return "".concat(text.charAt(0).toUpperCase()).concat(text.slice(1)); };
/**
 * Normal UI component Label
 */
export var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'No label' : _b, _c = _a.size, size = _c === void 0 ? 'normal' : _c, _d = _a.capitalize, capitalize = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? 'primary' : _e, fontColor = _a.fontColor;
    return (_jsxs("span", __assign({ className: "label ".concat(size, " text-").concat(color), style: { color: fontColor } }, { children: [capitalize && capitalizeFormat(label), !capitalize && label] })));
};
