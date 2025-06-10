import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [previewMedia, setPreviewMedia] = useState<null | { src: string; type: 'image' | 'video'; alt: string }>(null);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>('right');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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
    setSwipeDirection('right');
    setActiveProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setSwipeDirection('left');
    setActiveProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const active = projectsData[activeProject];

  // Touch event handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    const threshold = 50; // Minimum px to be considered a swipe

    if (diff > threshold) {
      // Swipe right
      prevProject();
    } else if (diff < -threshold) {
      // Swipe left
      nextProject();
    }
    setTouchStartX(null);
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-white dark:bg-gray-900"
    >
      {/* Fullscreen Preview Overlay */}
      {previewMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setPreviewMedia(null)}
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold z-50"
            onClick={e => { e.stopPropagation(); setPreviewMedia(null); }}
            aria-label="Close preview"
          >
            &times;
          </button>
          <div className="max-w-3xl w-full flex items-center justify-center">
            {previewMedia.type === 'image' ? (
              <img
                src={previewMedia.src}
                alt={previewMedia.alt}
                className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
            ) : (
              <video
                src={previewMedia.src}
                controls
                autoPlay
                loop
                className="max-h-[80vh] max-w-full rounded-lg shadow-2xl bg-black"
                onClick={e => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000"
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
          <div
            key={active.title}
            className={`
              bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden
              transition-transform duration-500
              ${swipeDirection === 'right' ? 'animate-swipe-in-right' : 'animate-swipe-in-left'}
              flex
            `}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col lg:flex-row w-full h-full">
              {/* Media */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                {active.image.endsWith('.mp4') ? (
                  <video
                    src={active.image}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                )}
              </div>
              {/* Text */}
              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center h-full">
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
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-transform duration-300 flex flex-col min-h-[370px] md:min-h-[420px] cursor-pointer hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-full h-60 flex items-center justify-center overflow-hidden group relative">
                {project.image.endsWith('.mp4') ? (
                  <video
                    src={project.image}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-lg transition-none"
                    style={{ objectFit: 'cover' }}
                    onClick={() =>
                      setPreviewMedia({
                        src: project.image,
                        type: 'video',
                        alt: project.title,
                      })
                    }
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transition-none"
                    style={{ objectFit: 'cover' }}
                    onClick={() =>
                      setPreviewMedia({
                        src: project.image,
                        type: 'image',
                        alt: project.title,
                      })
                    }
                  />
                )}
                {/* Remove overlay on hover */}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="mb-2 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full self-start">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">{tech}</span>
                  ))}
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

// Add this to your Tailwind CSS config (tailwind.config.js):
// theme: {
//   extend: {
//     animation: {
//       'swipe-in-right': 'swipe-in-right 0.5s cubic-bezier(0.4,0,0.2,1)',
//       'swipe-in-left': 'swipe-in-left 0.5s cubic-bezier(0.4,0,0.2,1)',
//     },
//     keyframes: {
//       'swipe-in-right': {
//         '0%': { opacity: '0', transform: 'translateX(80px)' },
//         '100%': { opacity: '1', transform: 'translateX(0)' },
//       },
//       'swipe-in-left': {
//         '0%': { opacity: '0', transform: 'translateX(-80px)' },
//         '100%': { opacity: '1', transform: 'translateX(0)' },
//       },
//     },
//   },
// },
