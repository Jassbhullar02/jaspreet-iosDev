import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
      id="about" 
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000 animate-fade-in"
      >
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Profile Image with effect */}
          <div className="md:w-2/5 flex flex-col items-center">
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl mx-auto transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-200 bg-gradient-to-br from-blue-100 via-white to-blue-200">
                <img 
                  src="/assets/myphoto.jpeg" 
                  alt="Jaspreet Singh Bhullar" 
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900">
                <span className="text-blue-800 font-bold text-lg">2+ Years</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Jaspreet Singh Bhullar</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">iOS Developer</p>
            </div>
          </div>
          
          {/* About Content */}
          <div className="md:w-3/5">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                About Me
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full mb-8"></div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                Hi, I'm <span className="font-bold text-blue-600 dark:text-blue-400">Jaspreet Singh Bhullar</span>, a passionate iOS Developer with <span className="font-semibold text-blue-700 dark:text-blue-300">2+ years</span> of experience building scalable, user-centric iPhone applications. I specialize in <span className="font-semibold">Swift, SwiftUI, and modern Apple frameworks</span>, always focusing on clean architecture, performance, and delightful user experiences.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My approach blends creative UI/UX design with robust backend integration, following MVVM architecture, best practices, and efficient version control with Git. I’ve delivered a wide range of apps—from productivity tools to API-driven platforms—always striving for maintainable code and seamless interfaces.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m constantly exploring new technologies in the Apple ecosystem and love transforming ideas into real-world applications. <span className="font-semibold text-blue-600 dark:text-blue-400">Let’s build something great together!</span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="flex items-start gap-3">
                <span className="inline-block w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-xl flex items-center justify-center text-xl font-bold">🎓</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Education</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">B.Sc in Computer Science<br />Kurukshetra University</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="inline-block w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-xl flex items-center justify-center text-xl font-bold">📍</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="inline-block w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-xl flex items-center justify-center text-xl font-bold">✉️</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">jassbhullar1502@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="inline-block w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-xl flex items-center justify-center text-xl font-bold">🌐</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Languages</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">English, Punjabi, Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;