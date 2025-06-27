import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const name = "Sravanthi Lopinti";

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Work" },
    { href: "#education", label: "Education" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-amber-400 bg-clip-text text-transparent">
              {name}
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:scale-105 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle + Mobile */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-md text-foreground hover:text-primary transition duration-300 hover:bg-primary/10 hover:scale-110"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-foreground hover:text-primary transition duration-300 hover:scale-110"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:bg-primary/10"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
