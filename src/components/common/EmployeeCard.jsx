import React from 'react';
import { Mail, Phone, MapPin, Globe, Building2, ArrowUpRight } from 'lucide-react';

/**
 * Reusable Employee Card Component
 * @param {Object} user - User object with name, username, email, phone, website, company, address
 */
export const EmployeeCard = ({ user }) => {
  const initials = user.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  const companyName =
    user.company && typeof user.company === 'object'
      ? user.company.name
      : user.company || 'IT Company';

  const companyCatchPhrase =
    user.company && user.company.catchPhrase
      ? user.company.catchPhrase
      : 'Software Development & UI/UX';

  const cityName =
    user.address && typeof user.address === 'object'
      ? user.address.city
      : user.address || 'Tbilisi';

  return (
    <div className="bg-neutral-card rounded-2xl border border-neutral-border p-6 flex flex-col justify-between hover:border-primary/50 transition duration-300 shadow-card-glow hover:-translate-y-1">
      <div>
        {/* Card Header: Avatar & Basic Info */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-bold font-mono text-base shadow-neon-cyan flex-shrink-0">
              {initials}
            </div>
            <div>
              <h3 className="font-bold text-base text-white hover:text-primary transition">
                {user.name}
              </h3>
              <span className="text-xs font-mono text-secondary">
                @{user.username || 'user'}
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-surface border border-neutral-border text-primary">
            #{user.id}
          </span>
        </div>

        {/* Company & Role */}
        <div className="mb-4 pb-4 border-b border-neutral-border border-opacity-60">
          <div className="text-xs font-semibold text-gray-200 flex items-center space-x-1.5">
            <Building2 className="w-4 h-4 text-tertiary flex-shrink-0" />
            <span>{companyName}</span>
          </div>
          <p className="text-[11px] text-neutral-textMuted italic mt-1 pl-5">
            "{companyCatchPhrase}"
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-2 text-xs text-gray-300">
          {/* Email */}
          <div className="flex items-center space-x-2.5 truncate">
            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
            <a
              href={`mailto:${user.email}`}
              className="hover:text-primary transition truncate"
            >
              {user.email}
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2.5">
            <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
            <span className="font-mono text-[11px] text-gray-300">
              {user.phone}
            </span>
          </div>

          {/* City */}
          <div className="flex items-center space-x-2.5">
            <MapPin className="w-4 h-4 text-tertiary flex-shrink-0" />
            <span>{cityName}</span>
          </div>

          {/* Website */}
          <div className="flex items-center space-x-2.5">
            <Globe className="w-4 h-4 text-primary flex-shrink-0" />
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-mono text-[11px] truncate"
            >
              {user.website}
            </a>
          </div>
        </div>
      </div>

      {/* Card Bottom Action */}
      <div className="mt-5 pt-4 border-t border-neutral-border border-opacity-60 flex items-center justify-between">
        <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-secondary">
          <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
          <span>აქტიური</span>
        </span>
        <a
          href={`mailto:${user.email}`}
          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-neutral transition"
        >
          <span>დაკავშირება</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default EmployeeCard;

