import React from 'react';

const Stats = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center text-center gap-8 md:gap-0">
          
          {/* Stat 1: Active Users */}
          <div className="text-white space-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold">50K+</h2>
            <p className="text-purple-100 text-sm font-medium">Active Users</p>
          </div>

          {/* Stat 2: Premium Tools (With border) */}
          <div className="text-white space-y-1 md:border-x border-white/20 px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold">200+</h2>
            <p className="text-purple-100 text-sm font-medium">Premium Tools</p>
          </div>

          {/* Stat 3: Rating */}
          <div className="text-white space-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold">4.9</h2>
            <p className="text-purple-100 text-sm font-medium">Rating</p>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Stats;