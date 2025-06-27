import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automated Ticket Routing in ServiceNow",
      description: "Built a ServiceNow solution to auto-route support tickets using Flow Designer and scoped apps, ensuring faster resolution and optimized team workflows.",
      technologies: ["ServiceNow", "Scoped App", "Flow Designer", "Server-side Scripting"],
      demoLink: "NULL", 
      codeLink: "https://github.com/Sravs5432/Ticket_Assignment_Repo",
      image: "/servicenowTicketpro.jpg",
      featured: true
    },
    // {
    //   title: "",
    //   description: "",
    //   technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    //   demoLink: "#",
    //   codeLink: "#",
    //   image: "🛒",
    //   featured: false
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Academic Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-amber-400 dark:from-indigo-500 dark:to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Projects I’ve built during my academic journey and personal learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg dark:shadow-indigo-900/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-amber-400 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                  <Star size={12} />
                  Featured
                </div>
              )}

              {/* Project image placeholder */}
              <div className="h-48 flex items-center justify-center bg-indigo-100 dark:bg-indigo-700/10 text-6xl">
                <img 
                src={project.image}
                alt={project.title}
                className="object-contain h-[90%] w-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-400 dark:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-600/70 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {/* <a
                    href={project.demoLink}
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-amber-500 dark:hover:text-amber-400 transition-transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a> */}
                  <a
                    href={project.codeLink}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-transform hover:scale-105"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
