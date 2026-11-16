import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

/**
 * Reusable Project Card Component
 * @param {string} title - Project title
 * @param {string} badge - e.g. "PRODUCTIVITY"
 * @param {string} description - Georgian description
 * @param {Array<string>} tags - Tech tags, e.g. ['React 18', 'TypeScript']
 * @param {string} image - Image URL
 * @param {string} accent - 'primary' | 'secondary' | 'tertiary'
 * @param {string} liveUrl - Link for live demo
 * @param {string} codeUrl - Link for source code
 */
export const ProjectCard = ({
  title,
  badge,
  description,
  tags = [],
  image,
  accent = 'primary',
  liveUrl = '#',
  codeUrl = '#',
}) => {
  const accentBorderHover = {
    primary: 'hover:border-primary/50',
    secondary: 'hover:border-secondary/50',
    tertiary: 'hover:border-tertiary/50',
  };

  const badgeStyles = {
    primary: 'text-primary border-primary/30',
    secondary: 'text-secondary border-secondary/30',
    tertiary: 'text-tertiary border-tertiary/30',
  };

  return (
    <div
      className={`bg-neutral-card rounded-2xl border border-neutral-border overflow-hidden flex flex-col ${
        accentBorderHover[accent] || accentBorderHover.primary
      } transition duration-300 shadow-card-glow hover:-translate-y-1`}
    >
      {/* Image Preview container */}
      <div className="relative h-52 overflow-hidden bg-neutral-surface">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {badge && (
          <div
            className={`absolute top-3 right-3 px-2.5 py-1 rounded text-xs font-mono font-bold bg-neutral/80 backdrop-blur-sm border ${
              badgeStyles[accent] || badgeStyles.primary
            }`}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white hover:text-primary transition duration-200">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-textMuted leading-relaxed mt-2.5 font-light">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded text-xs font-mono bg-neutral-surface text-gray-300 border border-neutral-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons (Live Demo + Source Code) */}
        <div className="pt-3 flex items-center space-x-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-primary text-neutral font-bold text-xs hover:bg-primary-hover shadow-neon-cyan transition duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-neutral-surface border border-neutral-border text-gray-300 hover:text-white hover:border-slate-500 transition"
            title="Source Code"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

