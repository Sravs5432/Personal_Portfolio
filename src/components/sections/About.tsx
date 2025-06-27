import React from 'react';
import { User, Heart, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Glowing decorative blobs */}
      <div
        className="absolute top-10 right-10 w-32 h-32 bg-indigo-300/20 dark:bg-indigo-600/20 rounded-full blur-3xl floating"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute bottom-10 left-10 w-24 h-24 bg-amber-300/20 dark:bg-amber-400/20 rounded-full blur-2xl floating"
        style={{ animationDelay: '1.5s' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <User className="text-amber-500 dark:text-amber-400 animate-pulse" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-amber-400 dark:from-indigo-500 dark:to-amber-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile visual */}
          <div className="order-2 lg:order-1 slide-in-left">
            <div className="w-full max-w-md mx-auto relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-100 via-white to-slate-100 dark:from-indigo-800 dark:via-slate-800 dark:to-indigo-900 rounded-3xl flex items-center justify-center border-2 border-slate-200 dark:border-slate-700 hover-lift relative overflow-hidden group">
                <div className="absolute inset-0 bg-amber-200/10 dark:bg-amber-400/10 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center bounce-in" style={{ animationDelay: '0.2s' }}>
                  <Code size={16} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center bounce-in" style={{ animationDelay: '0.4s' }}>
                  <Heart size={16} />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-indigo-500 text-white rounded-full flex items-center justify-center bounce-in" style={{ animationDelay: '0.6s' }}>
                  <Target size={16} />
                </div>

                <div className="text-8xl bounce-in relative z-10" style={{ animationDelay: '0.1s' }}>👨‍🎓</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2 slide-in-right">
            <div className="space-y-8 text-slate-600 dark:text-slate-300">
              {[
                "🎓 Final-year B.Tech student in Artificial Intelligence & Data Science at GMR Institute of Technology with a CGPA of 7.84. I focus on practical applications of AI, web development, and smart automation.",
                "💡 Interned as a Software Engineer at Rugua, where I contributed to real-time educational platforms using React.js and Django. I'm also ServiceNow certified (CSA & CAD) with hands-on experience in scoped application development.",
              ].map((text, i) => (
                <div className="slide-in-up" style={{ animationDelay: `${0.1 + i * 0.1}s` }} key={i}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl hover-lift border border-slate-200 dark:border-slate-700 transition-all duration-300">
                    <p className="text-lg leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl hover-lift hover-glow scale-in group border border-slate-200 dark:border-slate-700" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Globally Certified in ServiceNow</div>
                <div className="w-full h-1 bg-gradient-to-r from-indigo-600 to-amber-400 dark:from-indigo-500 dark:to-amber-400 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl hover-lift hover-glow scale-in group border border-slate-200 dark:border-slate-700" style={{ animationDelay: '0.5s' }}>
                <div className="text-4xl font-bold text-amber-500 dark:text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">7.8</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Current CGPA</div>
                <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-indigo-600 dark:from-amber-400 dark:to-indigo-500 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
