import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = "Sravanthi Lopinti";

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-slate-600 dark:text-slate-400 space-y-2">
          <p className="text-sm sm:text-base">
            © {currentYear} <span className="font-medium text-slate-800 dark:text-white">{name}</span>. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm">
            Built with <span className="text-indigo-500 font-medium">React</span>, <span className="text-blue-500 font-medium">TypeScript</span>, and <span className="text-teal-500 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
