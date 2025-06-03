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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.title}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col"
            >
              {project.image.endsWith('.mp4') ? (
                <video
                  src={project.image}
                  controls
                  muted
                  loop
                  playsInline
                  className="w-full h-48 object-cover mb-4"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4"
                />
              )}
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
//               <div className="w-full lg:w-2/3 h-72 lg:h-96 flex items-center justify-center bg-black">
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
//               <div className="w-full lg:w-1/3 p-8 flex flex-col justify-center">
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
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project) => (
//             <div 
//               key={project.title}
//               className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col"
//             >
//               {project.image.endsWith('.mp4') ? (
//                 <video
//                   src={project.image}
//                   controls
//                   muted
//                   loop
//                   playsInline
//                   className="w-full h-48 object-cover mb-4"
//                 />
//               ) : (
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover mb-4"
//                 />
//               )}
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

// // // import { projectsData } from '../data/projectsData';
// // // import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

// // // const Projects: React.FC = () => {
// // //   const sectionRef = useRef<HTMLDivElement>(null);
// // //   const [activeProject, setActiveProject] = useState(0);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add('animate-fade-in');
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     if (sectionRef.current) {
// // //       observer.observe(sectionRef.current);
// // //     }

// // //     return () => {
// // //       if (sectionRef.current) {
// // //         observer.unobserve(sectionRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   const nextProject = () => {
// // //     setActiveProject((prev) => (prev + 1) % projectsData.length);
// // //   };

// // //   const prevProject = () => {
// // //     setActiveProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
// // //   };

// // //   return (
// // //     <section 
// // //       id="projects" 
// // //       className="py-24 bg-white dark:bg-gray-900"
// // //     >
// // //       <div 
// // //         ref={sectionRef}
// // //         className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000"
// // //       >
// // //         <div className="max-w-3xl mx-auto text-center mb-14">
// // //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
// // //             Featured Projects
// // //           </h2>
// // //           <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8"></div>
// // //           <p className="text-lg text-gray-700 dark:text-gray-300">
// // //             Check out some of my recent work. Each project represents my passion
// // //             for creating intuitive and impactful iOS applications.
// // //           </p>
// // //         </div>
        
// // //         {/* Featured Project Showcase */}
// // //         <div className="mb-20 relative">
// // //           <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
// // //             <div className="flex flex-col lg:flex-row">
// // //               <div className="lg:w-1/2 h-80 lg:h-auto relative">
// // //                 {projectsData[activeProject].image.endsWith('.mp4') ? (
// // //                   <video
// // //                     src={projectsData[activeProject].image}
// // //                     controls
// // //                     playsInline
// // //                     className="w-full h-full object-cover rounded-lg"
// // //                     // poster="/assets/medicaled-poster.jpg" // optional: add a poster image
// // //                   />
// // //                 ) : (
// // //                   <img 
// // //                     src={projectsData[activeProject].image} 
// // //                     alt={projectsData[activeProject].title}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 )}
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
// // //               </div>
              
// // //               <div className="lg:w-1/2 p-8 md:p-10">
// // //                 <div className="flex items-center mb-4">
// // //                   <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full">
// // //                     {projectsData[activeProject].category}
// // //                   </span>
// // //                 </div>
                
// // //                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
// // //                   {projectsData[activeProject].title}
// // //                 </h3>
                
// // //                 <p className="text-gray-700 dark:text-gray-300 mb-6">
// // //                   {projectsData[activeProject].description}
// // //                 </p>
                
// // //                 <div className="flex flex-wrap gap-2 mb-8">
// // //                   {projectsData[activeProject].technologies.map((tech) => (
// // //                     <span 
// // //                       key={tech}
// // //                       className="px-3 py-1 text-sm text-gray-700 bg-gray-200 dark:text-gray-300 dark:bg-gray-700 rounded-full"
// // //                     >
// // //                       {tech}
// // //                     </span>
// // //                   ))}
// // //                 </div>
                
// // //                 {/* <a 
// // //                   href={projectsData[activeProject].link} 
// // //                   target="_blank" 
// // //                   rel="noopener noreferrer"
// // //                   className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
// // //                 >
// // //                   View Project <ExternalLink size={16} className="ml-2" />
// // //                 </a> */}
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           <button
// // //             onClick={prevProject}
// // //             className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
// // //             aria-label="Previous project"
// // //           >
// // //             <ChevronLeft size={20} />
// // //           </button>
          
// // //           <button
// // //             onClick={nextProject}
// // //             className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
// // //             aria-label="Next project"
// // //           >
// // //             <ChevronRight size={20} />
// // //           </button>
// // //         </div>
        
// // //         {/* Project Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {projectsData.map((project) => (
// // //             <div 
// // //               key={project.title}
// // //               className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
// // //             >
// // //               <div className="relative h-48 overflow-hidden">
// // //                 {project.image.endsWith('.mp4') ? (
// // //                   <video
// // //                     src={project.image}
// // //                     controls
// // //                     playsInline
// // //                     className="w-full h-full object-cover rounded-lg"
// // //                     // poster="/assets/medicaled-poster.jpg" // optional: add a poster image
// // //                   />
// // //                 ) : (
// // //                   <img 
// // //                     src={project.image} 
// // //                     alt={project.title}
// // //                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// // //                   />
// // //                 )}
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
// // //                   <div className="p-4 w-full">
// // //                     <a 
// // //                       href={project.link} 
// // //                       target="_blank" 
// // //                       rel="noopener noreferrer"
// // //                       className="text-white font-medium flex items-center justify-between"
// // //                     >
// // //                       <span>View Details</span>
// // //                       <ExternalLink size={16} />
// // //                     </a>
// // //                   </div>
// // //                 </div>
// // //               </div>
              
// // //               <div className="p-6">
// // //                 <div className="flex items-center mb-3">
// // //                   <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full">
// // //                     {project.category}
// // //                   </span>
// // //                 </div>
                
// // //                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
// // //                   {project.title}
// // //                 </h3>
                
// // //                 <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mb-4">
// // //                   {project.description}
// // //                 </p>
                
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {project.technologies.slice(0, 3).map((tech) => (
// // //                     <span 
// // //                       key={tech}
// // //                       className="px-2 py-1 text-xs text-gray-700 bg-gray-200 dark:text-gray-300 dark:bg-gray-700 rounded-full"
// // //                     >
// // //                       {tech}
// // //                     </span>
// // //                   ))}
// // //                   {project.technologies.length > 3 && (
// // //                     <span className="px-2 py-1 text-xs text-gray-700 bg-gray-200 dark:text-gray-300 dark:bg-gray-700 rounded-full">
// // //                       +{project.technologies.length - 3}
// // //                     </span>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;