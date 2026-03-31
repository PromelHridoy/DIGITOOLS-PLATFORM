import React from 'react';

const CallToAction = () => {
    return (
        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-20 px-6 text-center text-white">
            <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-all shadow-lg active:scale-95">
            Explore Products
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all active:scale-95">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
        </div>
    );
};

export default CallToAction;