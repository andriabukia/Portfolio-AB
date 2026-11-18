import React from 'react';
import { Hero } from '../components/sections/Hero';
import { StatsSection } from '../components/sections/StatsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
