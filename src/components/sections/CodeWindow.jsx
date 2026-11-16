import React from 'react';
import { Menu } from 'lucide-react';

export const CodeWindow = () => {
  return (
    <div className="relative group">
      {/* Background Neon Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-tertiary opacity-30 filter blur-xl group-hover:opacity-50 transition duration-500"></div>

      <div className="relative bg-neutral-card rounded-2xl border border-neutral-border overflow-hidden shadow-2xl">
        {/* Mac Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-surface border-b border-neutral-border font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          </div>
          <span className="text-gray-400 font-medium">ProfileOverview.ts</span>
          <div className="text-gray-500">
            <Menu className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-300 space-y-1">
          <div>
            <span className="comment-gray select-none mr-3">01</span>
            <span className="kw-purple">import</span> &#123; Developer, Passion &#125; <span className="kw-purple">from</span> <span className="str-green">'@/craft/engineer'</span>;
          </div>
          <div>
            <span className="comment-gray select-none mr-3">02</span>
          </div>
          <div>
            <span className="comment-gray select-none mr-3">03</span>
            <span className="kw-purple">export const</span> <span className="var-cyan">candidate</span>: <span className="type-blue">Developer</span> = &#123;
          </div>
          <div>
            <span className="comment-gray select-none mr-3">04</span>  <span className="text-gray-400">role:</span> <span className="str-green">'Junior Frontend Developer'</span>,
          </div>
          <div>
            <span className="comment-gray select-none mr-3">05</span>  <span className="text-gray-400">location:</span> <span className="str-green">'Tbilisi, Georgia'</span>,
          </div>
          <div>
            <span className="comment-gray select-none mr-3">06</span>  <span className="text-gray-400">focus:</span> [<span className="str-green">'Clean Code'</span>, <span className="str-green">'UI Architecture'</span>],
          </div>
          <div>
            <span className="comment-gray select-none mr-3">07</span>  <span className="text-gray-400">availableForFullTime:</span> <span className="bool-orange">true</span>,
          </div>
          <div>
            <span className="comment-gray select-none mr-3">08</span>  <span className="text-gray-400">coffeeCount:</span> <span className="type-blue">Infinity</span>,
          </div>
          <div>
            <span className="comment-gray select-none mr-3">09</span>&#125;;
          </div>
        </div>

        {/* Code Window Footer Stats (Lighthouse & Grade) */}
        <div className="grid grid-cols-2 divide-x divide-neutral-border bg-neutral-surface border-t border-neutral-border p-4 text-center">
          <div>
            <div className="text-xs font-mono uppercase text-gray-400 tracking-wider">
              Lighthouse Avg
            </div>
            <div className="text-2xl font-bold font-mono text-primary mt-0.5">
              99.4%
            </div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-gray-400 tracking-wider">
              Code Cleanliness
            </div>
            <div className="text-2xl font-bold font-mono text-secondary mt-0.5">
              A+ Grade
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;

