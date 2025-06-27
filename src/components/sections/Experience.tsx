import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Rugua",
      role: "Software Engineer Intern",
      period: "Feb 2025 – Present",
      location: "Remote",
      description: [
        "Worked on real-time web application development using React.js and Django",
        "Built responsive UI components and contributed to platform scalability",
        "Delivered features for a project-selling platform called SmartClick"
      ]
    },
    {
      company: "MSME Technology Center",
      role: "Java Intern",
      period: "Jun 2024 – Jul 2024",
      location: "Visakhapatnam, AP, India",
      description: [
        "Gained foundational experience in Java programming and logical problem-solving",
        "Implemented basic pattern printing, array manipulation, and menu-driven programs",
        "Completed summer training with hands-on coding sessions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="text-indigo-600 dark:text-amber-400 animate-pulse" size={32} />
            <h2 className="text-4xl font-bold">Internships</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-amber-300 to-indigo-500 dark:from-indigo-500 dark:via-amber-400 dark:to-indigo-600 opacity-30 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-indigo-500 to-amber-400 border-4 border-slate-50 dark:border-slate-900 rounded-full z-10 shadow-md scale-in" />

                {/* Experience Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-md transition-all duration-500 group relative overflow-hidden">
                    {/* Optional gradient layer on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-amber-100 dark:from-indigo-500/5 dark:to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        {exp.company}
                      </h4>

                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-amber-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
