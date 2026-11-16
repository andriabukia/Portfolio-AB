import React from 'react';

/**
 * Reusable Section Header Component
 * @param {string} step - e.g. "01 / SELECTED WORKS"
 * @param {string} title - Main Georgian title
 * @param {string} subtitle - Optional descriptive subtitle
 */
export const SectionHeader = ({ step, title, subtitle, className = '' }) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 ${className}`}
    >
      <div>
        {step && (
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            {step}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-sm text-neutral-textMuted max-w-md font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

