import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

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

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const active = projectsData[activeProject];

  return (
    <section 
      id="projects" 
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000 animate-fade-in"
      >
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Check out some of my recent work. Each project represents my passion
            for creating intuitive and impactful iOS applications.
          </p>
        </div>
        
        {/* Featured Project Showcase */}
        <div className="mb-20 relative">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Media */}
              <div className="w-full lg:w-1/2 aspect-video bg-black flex items-center justify-center">
                {active.image.endsWith('.mp4') ? (
                  <video
                    src={active.image}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
              {/* Text */}
              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                <span className="mb-4 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full self-start">
                  {active.category}
                </span>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{active.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{active.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {active.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 flex flex-col min-h-[400px] md:min-h-[440px] border border-blue-100 dark:border-blue-900/30 hover:-translate-y-2 relative"
            >
              <div className="w-full h-60 flex items-center justify-center overflow-hidden group relative">
                {project.image.endsWith('.mp4') ? (
                  <video
                    src={project.image}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-100/20 dark:bg-blue-900/10 rounded-t-2xl"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="mb-2 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full self-start">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-semibold">{tech}</span>
                  ))}
                </div>
              </div>
              {/* Removed the bottom accent bar */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
