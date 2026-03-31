import React from 'react';
import { FiUserPlus, FiPackage, FiZap } from "react-icons/fi"; // Icons import

const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: <FiUserPlus className="text-4xl text-[#9514FA]" />,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: <FiPackage className="text-4xl text-[#9514FA]" />,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: <FiZap className="text-4xl text-[#9514FA]" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group text-center">
              {/* Number Badge */}
              <div className="absolute top-4 right-4 bg-[#9514FA] text-white text-xs font-bold px-2 py-1 rounded-md">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;