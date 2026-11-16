import React from 'react';
import { Monitor, Wrench, ShieldCheck } from 'lucide-react';

/**
 * Reusable Skill Category Card Component
 * @param {string} title - Category title
 * @param {string} description - Georgian description
 * @param {string} accent - 'primary' | 'secondary' | 'tertiary'
 * @param {string} iconType - 'monitor' | 'tools' | 'shield'
 * @param {Array<{name: string, highlight: boolean, color: string}>} tags
 */
export const SkillCard = ({
  title,
  description,
  accent = 'primary',
  iconType = 'monitor',
  tags = [],
}) => {
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
      case 'tools':
        return <Wrench className="w-6 h-6" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6" />;
      case 'monitor':
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  return (
    <div
      className={`bg-neutral-card rounded-2xl border border-neutral-border p-8 ${currentAccent.hoverBorder} transition duration-300 flex flex-col justify-between space-y-6 shadow-card-glow`}
    >
      <div>
        <div
          className={`w-12 h-12 rounded-xl ${currentAccent.bg} border ${currentAccent.border} flex items-center justify-center ${currentAccent.text} mb-5 ${currentAccent.shadow}`}
        >
          {renderIcon()}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-neutral-textMuted leading-relaxed font-light">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-border border-opacity-60">
        {tags.map((tag, idx) => {
          let tagBorder = 'border-neutral-border text-gray-200';
          if (tag.highlight) {
            if (tag.color === 'primary') tagBorder = 'border-primary/40 text-primary';
            else if (tag.color === 'secondary') tagBorder = 'border-secondary/40 text-secondary';
            else if (tag.color === 'tertiary') tagBorder = 'border-tertiary/40 text-tertiary';
          }

          return (
            <span
              key={idx}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-mono bg-neutral-surface border ${tagBorder}`}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;

