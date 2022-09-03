import React from 'react';
import './myLabel.css';

interface MyLabelProps {
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
    fontColor: string
}

const capitalizeFormat = (text: string) : string => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

/**
 * Normal UI component Label
 */
export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    capitalize = false,
    color = 'primary',
    fontColor
}: MyLabelProps) => {
  return (
    <span 
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
        { capitalize && capitalizeFormat(label)}
        { !capitalize && label }
    </span>
  )
}
