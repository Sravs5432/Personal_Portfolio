import React from 'react';
import { ArrowRight, ArrowDown, Download, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white transition-colors duration-500"
>
  {/* Floating light glow elements */}
  <div className="absolute top-20 left-20 w-20 h-20 bg-indigo-300/20 dark:bg-indigo-500/20 rounded-full blur-2xl floating"></div>
  <div className="absolute top-40 right-32 w-16 h-16 bg-amber-200/20 dark:bg-amber-400/20 rounded-full blur-2xl floating"></div>
  <div className="absolute bottom-32 left-32 w-12 h-12 bg-indigo-400/30 dark:bg-indigo-600/30 rounded-full blur-2xl floating"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <Sparkles className="text-amber-500 dark:text-amber-400 animate-pulse mr-2" size={24} />
        <Zap className="text-indigo-600 dark:text-indigo-400 animate-pulse" size={24} />
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 zoom-in">
        Hi, I'm{' '}
        <span className="bg-gradient-to-r from-indigo-600 to-amber-500 dark:from-indigo-500 dark:to-amber-400 bg-clip-text text-transparent typewriter">
          Sravanthi Lopinti
        </span>
      </h1>

      <h2 className="text-xl sm:text-2xl lg:text-4xl text-slate-500 dark:text-slate-400 mb-8 slide-in-left">
        Computer Science Student & Aspiring Software Developer
      </h2>

      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-4xl mx-auto slide-in-right">
        Passionate about technology and eager to contribute to innovative projects. Seeking opportunities to apply
        my skills in software development and make a meaningful impact.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center bounce-in">
        <button className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-amber-400 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-110 shadow-2xl flex items-center gap-3">
          <span className="relative z-10">View My Work</span>
          <ArrowRight 
            size={20} 
            className="hidden sm:block group-hover:translate-x-2 transition-transform duration-300 relative z-10" 
          />
          <ArrowDown 
            size={20} 
            className="block sm:hidden group-hover:translate-y-1 transition-transform duration-300 relative z-10" 
          />
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
        </button>

        <a
          href="/LopintiSravanthiResume.pdf"  
          download
          className="group relative overflow-hidden border-2 border-indigo-600 px-10 py-5 rounded-2xl font-semibold text-lg text-indigo-600 transition-all duration-500 hover:scale-110 flex items-center gap-3 backdrop-blur-md hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-600/10"
        >
          <Download size={20} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
          <span className="relative z-10">Download Resume</span>
          <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 dark:border-amber-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 dark:bg-amber-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
