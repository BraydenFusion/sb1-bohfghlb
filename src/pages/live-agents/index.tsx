import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { LiveAgentsHero } from './sections/LiveAgentsHero';
import { AgentShowcase } from './sections/AgentShowcase';
import { AgentMetrics } from './sections/AgentMetrics';
import { AgentFeatures } from './sections/AgentFeatures';

export const LiveAgentsPage = () => {
  return (
    <PageLayout>
      <LiveAgentsHero />
      <AgentShowcase />
      <AgentMetrics />
      <AgentFeatures />
    </PageLayout>
  );
};