import React, { useState, useEffect } from 'react';
import { Agent, AgentMessage } from '../types';

interface AgentDemoProps {
  agent: Agent;
}

export const AgentDemo = ({ agent }: AgentDemoProps) => {
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < agent.demoMessages.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, agent.demoMessages[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, agent.demoMessages]);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-accent-blue/20 text-white'
                  : 'bg-white/5 text-text-muted'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};