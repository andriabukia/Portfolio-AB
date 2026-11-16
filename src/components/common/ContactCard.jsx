import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

/**
 * Reusable Contact Method Card Component
 * @param {string} label - e.g. "ელ. ფოსტა"
 * @param {string} value - e.g. "andria.bukia@example.com"
 * @param {string} href - Link URL
 * @param {string} type - 'email' | 'linkedin' | 'telegram'
 * @param {string} accent - 'primary' | 'secondary' | 'tertiary'
 */
export const ContactCard = ({
  label,
  value,
  href,
  type = 'email',
  accent = 'primary',
}) => {
  const accentConfigs = {
    primary: {
      bg: 'bg-primary/10',
      border: 'border-primary/30',
      text: 'text-primary',
      hoverBorder: 'hover:border-primary/50',
    },
    secondary: {
      bg: 'bg-secondary/10',
      border: 'border-secondary/30',
      text: 'text-secondary',
      hoverBorder: 'hover:border-secondary/50',
    },
    tertiary: {
      bg: 'bg-tertiary/10',
      border: 'border-tertiary/30',
      text: 'text-tertiary',
      hoverBorder: 'hover:border-tertiary/50',
    },
  };

  const currentAccent = accentConfigs[accent] || accentConfigs.primary;

  const renderIcon = () => {
    switch (type) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'telegram':
        return <Send className="w-5 h-5" />;
      case 'email':
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <a
      href={href}
      target={type !== 'email' ? '_blank' : undefined}
      rel={type !== 'email' ? 'noopener noreferrer' : undefined}
      className={`flex items-center space-x-4 p-3.5 rounded-xl bg-neutral-surface border border-neutral-border ${currentAccent.hoverBorder} transition duration-200 group`}
    >
      <div
        className={`w-10 h-10 rounded-lg ${currentAccent.bg} border ${currentAccent.border} flex items-center justify-center ${currentAccent.text} group-hover:scale-105 transition`}
      >
        {renderIcon()}
      </div>
      <div className="overflow-hidden">
        <div className="text-xs font-mono text-neutral-textMuted uppercase">{label}</div>
        <div className="text-sm font-semibold text-white group-hover:text-primary transition truncate">
          {value}
        </div>
      </div>
    </a>
  );
};

export default ContactCard;

