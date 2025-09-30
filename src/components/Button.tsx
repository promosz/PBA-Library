import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'invisible';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button state
   */
  state?: 'default' | 'hover' | 'pressed' | 'focus' | 'disabled';
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
  size = 'medium',
  state = 'default',
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    'pba-button',
    `pba-button--${variant}`,
    `pba-button--${size}`,
    disabled ? 'pba-button--disabled' : `pba-button--${state}`,
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