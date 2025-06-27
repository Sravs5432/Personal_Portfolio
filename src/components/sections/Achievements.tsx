import React from 'react';
import { Trophy, Users, Code, Heart } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy size={24} />,
      title: "Global ServiceNow Certification",
      description: "Earned ServiceNow CSA & CAD certifications, validating core expertise in platform administration and application development.",
      year: "2025"
    },
    {
      icon: <Trophy size={24} />,
      title: "Regional Athletics Participation",
      description: "Represented school in 800m and 1500m track events at the regional level during intermediate education.",
      year: "2020"
    },
    {
      icon: <Trophy size={24} />,
      title: "District-Level Sports – Rotary Club Events",
      description: "Participated in Kho-Kho and Kabaddi competitions conducted by Rotary Club at the district level.",
      year: "2021"
    }
  ];


  const activities = [
    {
      icon: <Heart size={24} />,
      title: "GeeksforGeeks Competitive Coding Training",
      role: "Shortlisted Student",
      period: "June–July 2025",
      description: "Selected among top 131 students across 4th-year departments for CRT-focused upskilling sessions."
    },
    {
      icon: <Code size={24} />,
      title: "Pre-Final Year Internship Achievement",
      role: "Software Engineer Intern at Rugua",
      period: "Feb 2025 – Present",
      description: "Selected for a stipend-based internship during my 3rd year to work on real-time web applications using React.js and Django."
    },
    {
      icon: <Users size={24} />,
      title: "HackHub Hackathon Participant",
      role: "Team Member",
      period: "STEPCONE 2025",
      description: "Collaborated with a team of 4 in an overnight college(GMRIT) hackathon, ideating and prototyping a working solution within 9 hours."
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Achievements & Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Recognition, competitions, and community involvement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center lg:text-left">🏆 Achievements</h3>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                        <span className="text-sm font-bold text-amber-500">{item.year}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center lg:text-left">🎯 Activities</h3>
            <div className="space-y-6">
              {activities.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-400/10 text-amber-500 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                        <span className="text-sm font-bold text-indigo-500">{item.period}</span>
                      </div>
                      <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-1">{item.role}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
