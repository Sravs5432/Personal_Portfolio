import React from 'react';
import { Code, Database, Globe, Wrench, BookOpen, Cpu, Zap, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-7 h-7" />,
      skills: [ "Python", "Java", "JavaScript","MySQL", "C"],
      color: "from-indigo-500 to-indigo-700",
      delay: 0
    },
    {
      title: "Web Development",
      icon: <Globe className="w-7 h-7" />,
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Django"],
      color: "from-amber-400 to-amber-600",
      delay: 0.1
    },
    // {
    //   title: "Database & Tools",
    //   icon: <Database className="w-7 h-7" />,
    //   skills: ["MySQL", "MongoDB", "Git", "VS Code", "Postman", "Firebase"],
    //   color: "from-slate-600 to-slate-800",
    //   delay: 0.2
    // },
    // {
    //   title: "Core Concepts",
    //   icon: <Cpu className="w-7 h-7" />,
    //   skills: ["Data Structures", "Algorithms", "OOP", "Software Engineering", "System Design"],
    //   color: "from-indigo-600 to-indigo-800",
    //   delay: 0.3
    // },
    // {
    //   title: "Development Tools",
    //   icon: <Wrench className="w-7 h-7" />,
    //   skills: ["Linux", "Docker", "AWS Basics", "Agile", "Testing", "Debugging"],
    //   color: "from-amber-500 to-amber-700",
    //   delay: 0.4
    // },
    {
      title: "Soft Skills",
      icon: <BookOpen className="w-7 h-7" />,
      skills: ["Teamwork", "Communication", "Leadership", "Time Management", "Adaptability"],
      color: "from-slate-500 to-slate-700",
      delay: 0.5
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 relative"
    >
      {/* Decorative background glows */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-300/10 dark:bg-indigo-500/10 rounded-full blur-3xl floating"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-amber-200/10 dark:bg-amber-400/10 rounded-full blur-2xl floating"></div>
      <div className="absolute bottom-16 left-1/3 w-20 h-20 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-2xl floating"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="text-amber-500 dark:text-amber-400 animate-pulse" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white">
              Technical Skills
            </h2>
            <Star className="text-indigo-600 dark:text-indigo-400 animate-pulse" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-amber-400 dark:from-indigo-500 dark:to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I've worked with across projects and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl hover:scale-[1.03] transition-all duration-500"
              style={{ animationDelay: `${category.delay}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-600/50 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-white transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
