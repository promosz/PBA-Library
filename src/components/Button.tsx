import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'invisible';
  /**
   * Button color scheme
   */
  color?: 'on' | 'off';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Button component based on Figma design
 */
export const Button = ({
  variant = 'primary',
  color = 'on',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    'pba-button',
    `pba-button--${variant}`,
    `pba-button--${color}`,
    `pba-button--${size}`,
    disabled ? 'pba-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};