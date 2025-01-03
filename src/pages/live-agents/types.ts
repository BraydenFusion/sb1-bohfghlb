import { LucideIcon } from 'lucide-react';

export interface Agent {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  metrics: {
    value: string;
    label: string;
  }[];
  features: string[];
  demoMessages: AgentMessage[];
}

export interface AgentMessage {
  role: 'user' | 'agent';
  content: string;
  timestamp?: Date;
}