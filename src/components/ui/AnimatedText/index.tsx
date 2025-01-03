import React from 'react';
import { cn } from '@/utils/cn';
import './styles.css';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ children, className, delay = 0 }: AnimatedTextProps) => {
  return (
    <span 
      className={cn('animated-text-wrapper', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children.split('').map((char, index) => (
        <span
          key={index}
          className="animated-text-char"
          style={{ animationDelay: `${delay + (index * 30)}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};