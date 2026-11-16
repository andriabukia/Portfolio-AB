import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral text-xs text-neutral-textMuted border-t border-neutral-border">
      {/* Sub-footer banner */}
      <div className="py-10 border-b border-neutral-border border-opacity-60 bg-neutral-darker/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-neon-green inline-block animate-pulse-slow"></span>
            <div>
              <p className="text-xs font-semibold text-white">
                ღია ვარ შემოთავაზებებისთვის
              </p>
              <p className="text-xs text-neutral-textMuted">
                თანამედროვე, სუფთა და სწრაფი ვებ აპლიკაციების არქიტექტურა და დეველოპმენტი.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-neutral-card border border-neutral-border text-xs font-mono text-gray-300 hover:text-white transition flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-neutral-card border border-neutral-border text-xs font-mono text-gray-300 hover:text-white transition flex items-center space-x-2"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 ანდრია ბუკია. შექმნილია სიყვარულითა და მონდომებით (React & Tailwind).
        </div>
        <div className="flex items-center space-x-4 font-mono text-xs">
          <span className="text-primary font-bold">GEO / ENG</span>
          <span>•</span>
          <span>UTC +04:00 (Tbilisi)</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
