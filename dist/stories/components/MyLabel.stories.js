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
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {
            control: 'select',
        },
        color: {
            control: 'select'
        },
        fontColor: {
            control: 'color'
        }
    }
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = {
    label: 'Uziel Meliton',
    size: 'h1',
    capitalize: false,
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    label: 'uziel meliton',
    size: 'normal',
    capitalize: true,
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary text',
    color: 'secondary',
    size: 'normal'
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary text',
    color: 'tertiary',
    size: 'normal'
};
export var CustomColor = Template.bind({});
CustomColor.args = {
    label: 'Custom font color',
    size: 'h1',
};
