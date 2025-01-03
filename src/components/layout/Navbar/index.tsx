import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-accent-neon hover:opacity-80 transition-opacity"
          >
            <Brain className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
              Fusion
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};