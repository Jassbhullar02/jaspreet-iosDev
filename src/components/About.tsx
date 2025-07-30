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
        className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5">
            <div className="relative flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-2xl flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 mx-auto overflow-hidden">
                <img 
                  src="/assets/myphoto.jpeg" 
                  alt="Jaspreet Singh Bhullar" 
                  className="w-full h-full object-cover object-top rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                  style={{ background: 'linear-gradient(to bottom right, #1e293b, #3b82f6)' }}
                />
                {/* No tag/bubble */}
                <div className="absolute -inset-2 rounded-full border-4 border-blue-400 opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none"></div>
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Jaspreet Singh Bhullar</h2>
                <div className="text-blue-400 font-semibold text-base md:text-lg">iOS Developer</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-8"></div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
               Hi, I'm Jaspreet Singh Bhullar, a passionate and detail-oriented iOS Developer with over a years of experience building scalable and user-friendly iPhone applications. I specialize in Swift, SwiftUI, and modern Apple development frameworks, with a strong focus on performance, clean architecture, and great user experience.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My development approach blends creative UI design with robust backend integration, following MVVM architecture, best practices, and efficient version control with Git. I’ve worked on a wide range of apps — from productivity tools to API-driven platforms — always striving to deliver clean, maintainable code and seamless user interfaces.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m constantly exploring new technologies in the Apple ecosystem and love transforming ideas into real-world applications.

Let’s build something great!
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Education</h3>
                <p className="text-gray-700 dark:text-gray-300">B.Sc in computer science<br />Kurukshetra University</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">India</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Email</h3>
                <p className="text-gray-700 dark:text-gray-300">jassbhullar1502@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
                <p className="text-gray-700 dark:text-gray-300">English, Punjabi, Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;