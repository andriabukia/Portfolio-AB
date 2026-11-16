import React from 'react';
import { Monitor, GitCommit, Zap } from 'lucide-react';

/**
 * Reusable Stat / Metric Card Component
 * @param {string} value - e.g. "15+"
 * @param {string} label - e.g. "დასრულებული პროექტი"
 * @param {string} accent - 'primary' | 'secondary' | 'tertiary'
 * @param {string} iconType - 'monitor' | 'git' | 'lightning'
 */
export const StatCard = ({ value, label, accent = 'primary', iconType = 'monitor' }) => {
  const accentConfigs = {
    primary: {
      bg: 'bg-primary/10',
      border: 'border-primary/30',
      text: 'text-primary',
      hoverBorder: 'hover:border-primary/50',
      shadow: 'shadow-neon-cyan',
    },
    secondary: {
      bg: 'bg-secondary/10',
      border: 'border-secondary/30',
      text: 'text-secondary',
      hoverBorder: 'hover:border-secondary/50',
      shadow: 'shadow-neon-green',
    },
    tertiary: {
      bg: 'bg-tertiary/10',
      border: 'border-tertiary/30',
      text: 'text-tertiary',
      hoverBorder: 'hover:border-tertiary/50',
      shadow: '',
    },
  };

  const currentAccent = accentConfigs[accent] || accentConfigs.primary;

  const renderIcon = () => {
    switch (iconType) {
      case 'git':
        return <GitCommit className="w-7 h-7" />;
      case 'lightning':
        return <Zap className="w-7 h-7" />;
      case 'monitor':
      default:
        return <Monitor className="w-7 h-7" />;
    }
  };

  return (
    <div
      className={`bg-neutral-card border border-neutral-border rounded-2xl p-6 flex items-center space-x-5 ${currentAccent.hoverBorder} transition duration-300 shadow-card-glow`}
    >
      <div
        className={`w-14 h-14 rounded-xl ${currentAccent.bg} border ${currentAccent.border} flex items-center justify-center ${currentAccent.text} flex-shrink-0 ${currentAccent.shadow}`}
      >
        {renderIcon()}
      </div>
      <div>
        <div className="text-3xl font-extrabold text-white font-mono">{value}</div>
        <div className="text-sm text-neutral-textMuted mt-0.5 font-medium">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;

