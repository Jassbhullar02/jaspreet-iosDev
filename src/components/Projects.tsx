import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const [previewMedia, setPreviewMedia] = useState<null | { src: string; type: 'image' | 'video'; alt: string }>(null);

  // Safari fullscreen fallback for images/videos
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent background scroll when preview is open (fixes iOS Safari)
    if (previewMedia) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [previewMedia]);

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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    const threshold = 50;
    if (diff > threshold) {
      prevProject();
    } else if (diff < -threshold) {
      nextProject();
    }
    touchStartX.current = null;
  };

  // Safari/iOS fix: request fullscreen for images/videos if available
  const handlePreviewClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    // Try to request fullscreen on the preview container
    if (previewRef.current) {
      // @ts-ignore
      const el = previewRef.current;
      if (el.requestFullscreen) el.requestFullscreen();
      // Safari
      // @ts-ignore
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    }
  };

  const active = projectsData[activeProject];

  return (
    <section 
      id="projects" 
      className="py-24 bg-white dark:bg-gray-900"
    >
      {/* Fullscreen Preview Overlay */}
      {previewMedia && (
        <div
          ref={previewRef}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setPreviewMedia(null)}
          style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
            touchAction: 'manipulation',
          }}
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold z-50"
            onClick={e => { e.stopPropagation(); setPreviewMedia(null); }}
            aria-label="Close preview"
            type="button"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            &times;
          </button>
          <div
            className="max-w-3xl w-full flex items-center justify-center"
            onClick={handlePreviewClick}
            style={{
              WebkitTapHighlightColor: 'transparent',
              outline: 'none',
            }}
            tabIndex={-1}
          >
            {previewMedia.type === 'image' ? (
              <img
                src={previewMedia.src}
                alt={previewMedia.alt}
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl select-none"
                onClick={e => e.stopPropagation()}
                draggable={false}
                style={{
                  objectFit: 'contain',
                  width: 'auto',
                  height: 'auto',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  touchAction: 'manipulation',
                }}
              />
            ) : (
              <video
                src={previewMedia.src}
                controls
                autoPlay
                loop
                playsInline
                muted={false}
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl bg-black"
                onClick={e => e.stopPropagation()}
                style={{
                  objectFit: 'contain',
                  width: 'auto',
                  height: 'auto',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  touchAction: 'manipulation',
                  background: '#000',
                }}
                // Safari fix: force play on click
                onPlay={e => {
                  const video = e.currentTarget as HTMLVideoElement;
                  if (video.paused) video.play();
                }}
              />
            )}
          </div>
        </div>
      )}
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
        <div 
          className="mb-20 relative"
        >
          <div
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Media */}
              <div className="w-full lg:w-1/2 aspect-video bg-black flex items-center justify-center">
                {active.image.endsWith('.mp4') ? (
                  <video
                    src={active.image}
                    controls
                    muted
                    playsInline
                    preload="auto"
                    poster="/assets/video-poster.jpg"
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                    onClick={e => {
                      const video = e.currentTarget as HTMLVideoElement;
                      if (video.paused) video.play();
                      setPreviewMedia({
                        src: active.image,
                        type: 'video',
                        alt: active.title,
                      });
                    }}
                  />
                ) : (
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                    onClick={() =>
                      setPreviewMedia({
                        src: active.image,
                        type: 'image',
                        alt: active.title,
                      })
                    }
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
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none shadow-none bg-transparent"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none shadow-none bg-transparent"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 flex flex-col min-h-[340px] sm:min-h-[400px] md:min-h-[440px] border border-blue-100 dark:border-blue-900/30 relative"
            >
              <div className="w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center overflow-hidden relative">
                {project.image.endsWith('.mp4') ? (
                  <video
                    src={project.image}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    poster="/assets/video-poster.jpg"
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 cursor-pointer"
                    // Safari fix: ensure video loads and can play on click
                    onClick={e => {
                      const video = e.currentTarget as HTMLVideoElement;
                      // Safari/iOS: force play on click
                      if (video.paused) {
                        video.play();
                      }
                      setPreviewMedia({
                        src: project.image,
                        type: 'video',
                        alt: project.title,
                      });
                    }}
                    onLoadedMetadata={e => {
                      // Safari: sometimes needs a play() call after metadata loads
                      const video = e.currentTarget as HTMLVideoElement;
                      if (video.paused && video.readyState >= 2) {
                        // Try to play silently (Safari blocks autoplay with sound)
                        video.play().catch(() => {});
                      }
                    }}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center rounded-t-2xl transition-transform duration-500 cursor-pointer"
                    style={{ aspectRatio: '16/10', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    onClick={() =>
                      setPreviewMedia({
                        src: project.image,
                        type: 'image',
                        alt: project.title,
                      })
                    }
                  />
                )}
                {/* No hover/active effect overlays on image */}
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/10 transition-colors duration-300">
                <span className="mb-2 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40 rounded-full self-start">
                  {project.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-3 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-semibold">{tech}</span>
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
