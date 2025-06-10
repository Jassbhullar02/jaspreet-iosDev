import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/hero-bg.mp4"
        style={{ pointerEvents: 'none' }}
      />
      {/* Light mode overlay for text visibility */}
      <div className="absolute inset-0 z-10 bg-white/70 dark:bg-transparent"></div>
      {/* Content */}
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 py-32 opacity-0 transition-opacity duration-1000 relative z-20"
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            iOS Developer & <span className="text-blue-600 dark:text-blue-400">Mobile Design</span> Enthusiast
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-300 mb-10 max-w-2xl font-semibold drop-shadow-lg">
            I craft beautiful, intuitive, and high-performance iOS applications 
            that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300 text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <ArrowDown size={24} />
        </a>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 top-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;