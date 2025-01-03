import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const HeroActions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <Button 
        onClick={() => navigate('/schedule')}
        size="lg" 
        className="group"
      >
        Schedule A Consultation
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2" />
      </Button>
      <Button 
        variant="secondary" 
        size="lg" 
        className="gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        Learn More
      </Button>
    </div>
  );
};