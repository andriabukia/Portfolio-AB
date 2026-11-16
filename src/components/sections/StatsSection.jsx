import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StatCard } from '../common/StatCard';

export const StatsSection = () => {
  return (
    <section className="py-10 border-b border-neutral-border border-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              accent={stat.accent}
              iconType={stat.iconType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

