import React from 'react';
import { Brain, Zap, Lock, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Powered by state-of-the-art language models for human-like interactions'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Instant responses with advanced natural language understanding'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and data protection for peace of mind'
  },
  {
    icon: Globe,
    title: 'Global Availability',
    description: 'Deploy agents worldwide with multi-language support'
  }
];

export const AgentFeatures = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Advanced features that power our AI agents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent-neon" />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};