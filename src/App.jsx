import React from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { StatsSection } from './components/sections/StatsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { AboutSection } from './components/sections/AboutSection';
import { EmployeesSection } from './components/sections/EmployeesSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="bg-neutral ambient-glow min-h-screen text-gray-100 flex flex-col justify-between selection:bg-primary selection:text-neutral">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <EmployeesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
