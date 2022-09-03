import { ComponentStory, ComponentMeta } from "@storybook/react";
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
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: 'Uziel Meliton',
    size: 'h1',
    capitalize: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'uziel meliton',
    size: 'normal',
    capitalize: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary text',
    color: 'secondary',
    size: 'normal'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary text',
    color: 'tertiary',
    size: 'normal'
}

export const CustomColor = Template.bind({});
CustomColor.args = {
    label: 'Custom font color',
    size: 'h1',
}