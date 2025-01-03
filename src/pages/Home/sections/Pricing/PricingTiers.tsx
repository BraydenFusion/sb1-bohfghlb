import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { plans } from './data';

export const PricingTiers = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="space-y-12">
      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4">
        <span className={!isAnnual ? 'text-white' : 'text-text-muted'}>Monthly</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative w-14 h-7 rounded-full bg-accent-blue/20 p-1 transition-colors hover:bg-accent-blue/30"
        >
          <div
            className={`w-5 h-5 rounded-full bg-accent-neon transition-transform ${
              isAnnual ? 'translate-x-7' : ''
            }`}
          />
        </button>
        <span className={isAnnual ? 'text-white' : 'text-text-muted'}>
          Annual <span className="text-accent-neon text-sm">(20% off)</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative group p-8 rounded-xl backdrop-blur-sm border transition-all ${
              plan.popular
                ? 'bg-white/10 border-accent-neon/50 scale-105'
                : 'bg-white/5 border-white/10 hover:border-accent-neon/50'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-neon text-background text-sm font-medium">
                Most Popular
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-text-muted mt-2">{plan.description}</p>
              </div>

              <div className="text-4xl font-bold">
                {typeof plan.monthlyPrice === 'number' ? (
                  <>
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="text-lg text-text-muted font-normal">/mo</span>
                  </>
                ) : (
                  plan.price
                )}
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-neon shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                hasGlow={plan.popular}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-text-muted">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  );
};