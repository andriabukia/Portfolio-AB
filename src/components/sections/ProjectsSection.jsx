import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from '../common/ProjectCard';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-neutral-border border-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          step="01 / SELECTED WORKS"
          title="გამორჩეული პროექტები"
          subtitle="პრაქტიკული აპლიკაციები, რომლებიც ფოკუსირებულია წარმადობაზე, სუფთა არქიტექტურასა და ინტუიციურ UI-ზე."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              badge={project.badge}
              description={project.description}
              tags={project.tags}
              image={project.image}
              accent={project.accent}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

