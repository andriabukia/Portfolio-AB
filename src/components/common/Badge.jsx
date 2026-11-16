import React from 'react';

/**
 * Reusable Badge Component
 * @param {string} text - text to display
 * @param {string} variant - 'primary' | 'secondary' | 'tertiary' | 'neutral'
 * @param {boolean} dot - whether to show a status indicator dot
 * @param {string} className - extra classes
 */
export const Badge = ({
  children,
  variant = 'primary',
  dot = false,
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-primary/10 border-primary/30 text-primary',
    secondary: 'bg-secondary/10 border-secondary/30 text-secondary',
    tertiary: 'bg-tertiary/10 border-tertiary/30 text-tertiary',
    neutral: 'bg-neutral-surface border-neutral-border text-gray-300',
  };

  const dotStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary animate-pulse-slow',
    tertiary: 'bg-tertiary',
    neutral: 'bg-gray-400',
  };

  return (
    <span
      className={`inline-flex items-center space-x-2 px-3 py-1 rounded-lg text-xs font-mono border ${
        variantStyles[variant] || variantStyles.primary
      } ${className}`}
    >
      {dot && (
        <span
          className={`w-2 h-2 rounded-full inline-block ${
            dotStyles[variant] || dotStyles.primary
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
};

export default Badge;

