import React from 'react';
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      tagline: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl transition-all duration-500 cursor-default
                ${plan.isPopular 
                  ? "bg-gradient-to-b from-[#8B5CF6] to-[#9514FA] text-white shadow-xl scale-105 z-10 hover:scale-[1.08] hover:shadow-2xl" 
                  : "bg-white border border-slate-100 text-slate-800 shadow-sm hover:shadow-xl hover:scale-105 hover:border-purple-200"
                }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md animate-bounce">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.isPopular ? "text-purple-100" : "text-slate-500"}`}>{plan.tagline}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`text-lg ${plan.isPopular ? "text-purple-100" : "text-slate-500"}`}>/Month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm group">
                    <FiCheck className={`transition-transform duration-300 group-hover:scale-125 ${plan.isPopular ? "text-white" : "text-green-500"}`} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 active:scale-95 shadow-lg ${
                plan.isPopular 
                ? "bg-white text-purple-600 hover:bg-purple-50 hover:shadow-white/20" 
                : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 hover:shadow-purple-500/30"
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;