import React from 'react';
import { Bot } from 'lucide-react';

export const LiveAgentsHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-blue/10 text-accent-neon border border-accent-blue/20 backdrop-blur-sm mb-6">
          <Bot className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Interactive AI Demos</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Experience Our
          <span className="block mt-2 bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
            AI Agents in Action
          </span>
        </h1>
        
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Try our intelligent AI agents and see how they can transform your business operations
        </p>
      </div>
    </section>
  );
};