
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Navigation from '../components/Navigation';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';
import Achievements from '@/components/sections/Achievements';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* About Section */}
          <About />
          
          {/* Skills Section */}
          <Skills />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Experience Section */}
          <Experience />
          
          {/* Education Section */}
          <Education />

          {/* Achievements Section */}
          <Achievements />

          {/* Contact Section */}
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
