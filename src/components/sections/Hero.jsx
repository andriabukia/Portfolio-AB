import React from 'react';
import { Eye, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { CodeWindow } from './CodeWindow';
import { Badge } from '../common/Badge';

export const Hero = () => {
  const { developer } = portfolioData;

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-border border-opacity-60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Bio & Call to Actions) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div>
              <Badge variant="secondary" dot>
                {developer.statusText}
              </Badge>
            </div>

            {/* Code Variable Introduction */}
            <div className="font-mono text-sm tracking-wide">
              <span className="kw-purple">const</span> <span className="var-cyan">developer</span> = <span className="str-green">"{developer.shortName}"</span>;
            </div>

            {/* Main Catchy Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              გამარჯობა, მე ვარ {developer.shortName} — <br className="hidden sm:inline" />
              <span className="text-primary drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                Junior Frontend
              </span> დეველოპერი
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
              {developer.bio}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-primary text-neutral hover:bg-primary-hover shadow-neon-cyan transition duration-200 transform hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>ჩემი ნამუშევრები</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-neutral-card hover:bg-neutral-surface text-gray-200 border border-neutral-border transition duration-200 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-primary" />
                <span>რეზიუმე / CV (ჩამოტვირთვა)</span>
              </a>
            </div>

            {/* Tech stack pill bar */}
            <div className="pt-4 border-t border-neutral-border border-opacity-50 space-y-2.5">
              <div className="text-xs uppercase font-mono tracking-wider text-gray-400">
                ძირითადი ტექნოლოგიური სტეკი:
              </div>
              <div className="flex flex-wrap gap-2">
                {developer.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-card border border-neutral-border text-primary hover:border-primary/50 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (IDE / Code Window Widget) */}
          <div className="lg:col-span-5">
            <CodeWindow />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

