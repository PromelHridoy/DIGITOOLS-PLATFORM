import React from 'react';
import { FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
       <section className="bg-white py-16 lg:py-24 px-6 lg:px-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-100">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
            Supercharge Your <br className="hidden lg:block" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
              Digital Workflow
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-500 max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Explore Products
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
              Explore Products
            </button>
            
            <button className="flex items-center gap-2 border-2 border-purple-200 text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-all duration-300 w-full sm:w-auto">
              <span className="bg-purple-100 p-1 rounded-full"><FaPlay className="text-[10px]" /></span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image/Illustration Section */}
        <div className="relative w-full max-w-lg lg:max-w-xl">
          {/* Background Decorative Blur */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
          
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
             <img 
               src="/images/banner.png" 
               alt="Digital Workflow Illustration" 
               className="w-full h-auto object-cover"
             />
          </div>
        </div>

      </div>
    </section>
    );
};

export default Banner;