import React from 'react';
import { agents } from '../data/agents';
import { BarChart3, TrendingUp, Clock } from 'lucide-react';

const overallMetrics = [
  {
    icon: BarChart3,
    value: '1M+',
    label: 'Interactions Handled',
    description: 'Monthly AI conversations'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable performance'
  },
  {
    icon: Clock,
    value: '0.5s',
    label: 'Response Time',
    description: 'Average response speed'
  }
];

export const AgentMetrics = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Real-world results from our AI agents in production
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {overallMetrics.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-accent-neon" />
              </div>
              <div className="text-3xl font-bold text-accent-neon mb-2">{value}</div>
              <div className="font-medium mb-1">{label}</div>
              <div className="text-sm text-text-muted">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};