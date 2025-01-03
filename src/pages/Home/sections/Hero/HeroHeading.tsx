import React from 'react';
import { Sparkles } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';

export const HeroHeading = () => {
  return (
    <div className="text-center space-y-6">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-blue/10 text-accent-neon border border-accent-blue/20 backdrop-blur-sm">
        <Sparkles className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">AI-Powered Business Solutions</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
        <AnimatedText delay={300}>
          Transform Your Business with
        </AnimatedText>
        <span className="block mt-4">
          <AnimatedText 
            className="bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent"
            delay={600}
          >
            Intelligent Automation
          </AnimatedText>
        </span>
      </h1>
      
      <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
        <AnimatedText delay={900}>
          Deploy AI agents that streamline operations, enhance customer experience, and drive growth across your organization.
        </AnimatedText>
      </p>
    </div>
  );
};