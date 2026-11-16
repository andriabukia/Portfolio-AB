import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { SkillCard } from '../common/SkillCard';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-neutral-border border-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          step="02 / ABILITIES_AND_TOOLS"
          title="ტექნოლოგიური სტეკი & უნარები"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              accent={skill.accent}
              iconType={skill.iconType}
              tags={skill.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

