import React, { useState } from 'react';
import { agents } from '../data/agents';
import { AgentCard } from '../components/AgentCard';
import { AgentDemo } from '../components/AgentDemo';
import { Agent } from '../types';

export const AgentShowcase = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agents[0]);

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Select an Agent</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {agents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onSelect={setSelectedAgent}
                  isSelected={selectedAgent.id === agent.id}
                />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Live Demo</h2>
            <AgentDemo agent={selectedAgent} />
          </div>
        </div>
      </div>
    </section>
  );
};