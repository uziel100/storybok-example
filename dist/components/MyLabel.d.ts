/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Label content
     */
    label?: string;
    /**
     * Size of label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Is capitalize
     */
    capitalize?: boolean;
    /**
     * Color variant text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom color content label
     */
    fontColor: string;
}
/**
 * Normal UI component Label
 */
export declare const MyLabel: ({ label, size, capitalize, color, fontColor }: MyLabelProps) => JSX.Element;
