import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
  onSelect: (agent: Agent) => void;
  isSelected: boolean;
}

export const AgentCard = ({ agent, onSelect, isSelected }: AgentCardProps) => {
  const { icon: Icon, name, description, metrics } = agent;

  return (
    <div
      className={`relative group p-6 rounded-xl backdrop-blur-sm border transition-all ${
        isSelected
          ? 'bg-white/10 border-accent-neon/50 scale-105'
          : 'bg-white/5 border-white/10 hover:border-accent-neon/50'
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent-neon" />
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
      </div>

      <p className="text-text-muted mb-6">{description}</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {metrics.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-xl font-bold text-accent-neon">{value}</div>
            <div className="text-sm text-text-muted">{label}</div>
          </div>
        ))}
      </div>

      <Button
        variant={isSelected ? 'primary' : 'secondary'}
        size="sm"
        className="w-full group"
        onClick={() => onSelect(agent)}
      >
        Try Demo
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};