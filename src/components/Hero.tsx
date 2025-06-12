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

  // Scroll to #about on scroll indicator click/tap
  const handleScrollDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 py-10 xs:py-14 sm:py-20 md:py-32 opacity-0 transition-opacity duration-1000 relative z-20 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto w-full">
          <h1 className="text-lg xs:text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 xs:mb-4 sm:mb-6 leading-tight">
            iOS Developer & <span className="text-blue-600 dark:text-blue-400">Mobile Design</span> Enthusiast
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-300 mb-4 xs:mb-6 sm:mb-8 md:mb-10 max-w-2xl font-semibold drop-shadow-lg">
            I craft beautiful, intuitive, and high-performance iOS applications 
            that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 w-full sm:w-auto items-center justify-center">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-4 py-2 xs:px-5 xs:py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-xs xs:text-sm sm:text-lg shadow-lg hover:shadow-xl text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-4 py-2 xs:px-5 xs:py-3 sm:px-8 sm:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300 text-xs xs:text-sm sm:text-lg text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute inset-x-0 bottom-2 xs:bottom-4 sm:bottom-8 flex justify-center items-center z-20 pointer-events-none">
        <button
          type="button"
          onClick={handleScrollDown}
          onTouchEnd={handleScrollDown}
          className="flex flex-col items-center group transition-colors pointer-events-auto"
          style={{ width: 'max-content', background: 'none', border: 'none', outline: 'none', cursor: 'pointer' }}
          tabIndex={0}
          aria-label="Scroll Down"
        >
          <span
            className="mb-1 xs:mb-2 text-xs xs:text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-black dark:text-white text-center"
          >
            Scroll Down
          </span>
          <span className="animate-bounce">
            <ArrowDown
              size={18}
              className="transition-colors text-black dark:text-white"
            />
          </span>
        </button>
      </div>
      {/* Background decoration */}
      <div className="absolute -right-4 -bottom-4 w-16 h-16 xs:w-28 xs:h-28 sm:w-60 sm:h-60 md:w-96 md:h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-4 top-4 w-10 h-10 xs:w-20 xs:h-20 sm:w-40 sm:h-40 md:w-72 md:h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;