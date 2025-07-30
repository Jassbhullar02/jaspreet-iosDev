import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [fullscreenMediaIndex, setFullscreenMediaIndex] = useState<number | null>(null);

  const fullscreenMedia = fullscreenMediaIndex !== null ? projectsData[fullscreenMediaIndex] : null;

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

  useEffect(() => {
    document.body.style.overflow = fullscreenMedia ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [fullscreenMedia]);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const closeFullscreen = () => {
    setFullscreenMediaIndex(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (fullscreenMediaIndex !== null) {
      if (e.key === 'ArrowRight') {
        setFullscreenMediaIndex((prev) => (prev! + 1) % projectsData.length);
      } else if (e.key === 'ArrowLeft') {
        setFullscreenMediaIndex((prev) => (prev! - 1 + projectsData.length) % projectsData.length);
      } else if (e.key === 'Escape') {
        closeFullscreen();
      }
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-900"
      tabIndex={0}
    >
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
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Media */}
              <div className="w-full lg:w-1/2 aspect-video bg-black flex items-center justify-center">
                {projectsData[activeProject].image.endsWith('.mp4') ? (
                  <video
                    src={projectsData[activeProject].image}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={projectsData[activeProject].image}
                    alt={projectsData[activeProject].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
              {/* Text */}
              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                <span className="mb-4 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full self-start">
                  {projectsData[activeProject].category}
                </span>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {projectsData[activeProject].title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {projectsData[activeProject].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {projectsData[activeProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col min-h-[370px] md:min-h-[420px] hover:scale-105 duration-300 cursor-pointer"
              onClick={() => setFullscreenMediaIndex(index)}
              style={{ transition: 'transform 0.3s' }}
            >
              <div className="w-full h-60 flex items-center justify-center overflow-hidden relative">
                {project.image.endsWith('.mp4') ? (
                  <video
                    src={project.image}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                )}
                {/* No animation/hover effect on image itself */}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="mb-2 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full self-start">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenMedia && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4">
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 text-white z-50"
            aria-label="Close fullscreen media"
          >
            <X size={36} />
          </button>
          <div className="max-w-5xl w-full flex items-center justify-center">
            {fullscreenMedia.image.endsWith('.mp4') ? (
              <video
                src={fullscreenMedia.image}
                controls
                autoPlay
                muted
                loop
                className="w-full max-h-[80vh] rounded-lg shadow-2xl bg-black"
                style={{ background: '#000' }}
              />
            ) : (
              <img
                src={fullscreenMedia.image}
                alt="Fullscreen preview"
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                style={{ background: '#000' }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
// import React, { useEffect, useRef, useState } from 'react';
// import { projectsData } from '../data/projectsData';
// import { ChevronRight, ChevronLeft } from 'lucide-react';
  
// const Projects: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeProject, setActiveProject] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const nextProject = () => {
//     setActiveProject((prev) => (prev + 1) % projectsData.length);
//   };

//   const prevProject = () => {
//     setActiveProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
//   };

//   const active = projectsData[activeProject];

//   return (
//     <section 
//       id="projects" 
//       className="py-24 bg-white dark:bg-gray-900"
//     >
//       <div 
//         ref={sectionRef}
//         className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000"
//       >
//         <div className="max-w-3xl mx-auto text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
//             Featured Projects
//           </h2>
//           <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-700 dark:text-gray-300">
//             Check out some of my recent work. Each project represents my passion
//             for creating intuitive and impactful iOS applications.
//           </p>
//         </div>
        
//         {/* Featured Project Showcase */}
//         <div className="mb-20 relative">
//           <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
//             <div className="flex flex-col lg:flex-row">
//               {/* Media */}
//               <div className="w-full lg:w-1/2 aspect-video bg-black flex items-center justify-center">
//                 {active.image.endsWith('.mp4') ? (
//                   <video
//                     src={active.image}
//                     controls
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 ) : (
//                   <img
//                     src={active.image}
//                     alt={active.title}
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 )}
//               </div>
//               {/* Text */}
//               <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
//                 <span className="mb-4 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full self-start">
//                   {active.category}
//                 </span>
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{active.title}</h3>
//                 <p className="text-gray-700 dark:text-gray-300 mb-6">{active.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-2">
//                   {active.technologies.map((tech) => (
//                     <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs">{tech}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <button
//             onClick={prevProject}
//             className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
//             aria-label="Previous project"
//           >
//             <ChevronLeft size={20} />
//           </button>
          
//           <button
//             onClick={nextProject}
//             className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
//             aria-label="Next project"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
        
//         {/* Project Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projectsData.map((project) => (
//             <div 
//               key={project.title}
//               className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col min-h-[370px] md:min-h-[420px]"
//             >
//               <div className="w-full h-60 flex items-center justify-center overflow-hidden group relative">
//                 {project.image.endsWith('.mp4') ? (
//                   <video
//                     src={project.image}
//                     controls
//                     muted
//                     loop
//                     playsInline
//                     className="w-full h-full object-contain scale-110 transition-transform duration-500 group-hover:scale-125 group-hover:shadow-2xl rounded-lg"
//                   />
//                 ) : (
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-contain scale-110 transition-transform duration-500 group-hover:scale-125 group-hover:shadow-2xl rounded-lg"
//                   />
//                 )}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-lg"></div>
//               </div>
//               <div className="p-4 flex flex-col flex-1">
//                 <span className="mb-2 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full self-start">
//                   {project.category}
//                 </span>
//                 <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
//                 <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.technologies.map((tech) => (
//                     <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">{tech}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
