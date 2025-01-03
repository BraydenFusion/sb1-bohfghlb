import { MessageSquare, Calendar, Users, Mic } from 'lucide-react';
import { Agent } from '../types';

export const agents: Agent[] = [
  {
    id: 'customer-support',
    name: 'Customer Support Agent',
    description: 'Provide 24/7 instant support with human-like responses',
    icon: MessageSquare,
    metrics: [
      { value: '85%', label: 'Faster Response Time' },
      { value: '95%', label: 'Resolution Rate' },
      { value: '24/7', label: 'Availability' }
    ],
    features: [
      'Multi-language support',
      'Context awareness',
      'Sentiment analysis',
      'Automated ticket creation'
    ],
    demoMessages: [
      { role: 'user', content: 'Hi, I need help with my recent order #12345' },
      { role: 'agent', content: 'I\'ll help you with that. Let me check your order status...' },
      { role: 'agent', content: 'I can see your order #12345 has been shipped and will arrive tomorrow by 5 PM.' }
    ]
  },
  {
    id: 'appointment-setting',
    name: 'Appointment Setting Agent',
    description: 'Streamline scheduling and reduce no-shows',
    icon: Calendar,
    metrics: [
      { value: '92%', label: 'Booking Efficiency' },
      { value: '75%', label: 'Reduced No-shows' },
      { value: '100%', label: 'Calendar Accuracy' }
    ],
    features: [
      'Smart availability detection',
      'Multi-timezone support',
      'Automated reminders',
      'Calendar integration'
    ],
    demoMessages: [
      { role: 'user', content: 'I\'d like to schedule a consultation' },
      { role: 'agent', content: 'I can help you with that. What date and time works best for you?' },
      { role: 'user', content: 'How about tomorrow afternoon?' }
    ]
  },
  {
    id: 'lead-generation',
    name: 'Lead Generation Agent',
    description: 'Qualify and nurture leads automatically',
    icon: Users,
    metrics: [
      { value: '3x', label: 'More Qualified Leads' },
      { value: '65%', label: 'Conversion Rate' },
      { value: '90%', label: 'Lead Quality' }
    ],
    features: [
      'Lead scoring',
      'Automated follow-ups',
      'CRM integration',
      'Performance analytics'
    ],
    demoMessages: [
      { role: 'agent', content: 'Hi! I noticed you\'re interested in our AI solutions. What brings you here today?' },
      { role: 'user', content: 'I\'m looking to automate our customer support' },
      { role: 'agent', content: 'Great! Could you tell me about your current support volume?' }
    ]
  },
  {
    id: 'voice-agent',
    name: 'Voice Agent',
    description: 'Natural voice interactions for seamless communication',
    icon: Mic,
    metrics: [
      { value: '98%', label: 'Speech Accuracy' },
      { value: '0.5s', label: 'Response Time' },
      { value: '40+', label: 'Languages' }
    ],
    features: [
      'Natural language processing',
      'Voice recognition',
      'Accent adaptation',
      'Real-time translation'
    ],
    demoMessages: [
      { role: 'user', content: 'Call customer service' },
      { role: 'agent', content: 'Hello! How can I assist you today?' },
      { role: 'user', content: 'I need help with my account settings' }
    ]
  }
];