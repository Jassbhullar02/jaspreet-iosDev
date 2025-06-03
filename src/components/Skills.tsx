import React, { useRef } from 'react';
import { Code2, Layers, Database, Cpu, Smartphone, GitBranch, Store, Workflow } from 'lucide-react';

type Skill = {
  name: string;
};

const SKILLS: Skill[] = [
  { name: 'Swift' },
  { name: 'SwiftUI' },
  { name: 'UIKit' },
  { name: 'Core Data' },
  { name: 'iOS Architecture' },
  { name: 'Xcode' },
  { name: 'App Store Connect' },
  { name: 'CI/CD' },
  { name: 'WebKit' },
];

const Skills: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Swift':
        return <Code2 className="w-6 h-6" />;
      case 'SwiftUI':
        return <Layers className="w-6 h-6" />;
      case 'UIKit':
        return <Smartphone className="w-6 h-6" />;
      case 'Core Data':
        return <Database className="w-6 h-6" />;
      case 'iOS Architecture':
        return <Cpu className="w-6 h-6" />;
      case 'Xcode':
        return <Code2 className="w-6 h-6" />;
      case 'App Store Connect':
        return <Store className="w-6 h-6" />;
      case 'CI/CD':
        return <Workflow className="w-6 h-6" />;
      case 'WebKit':
        return <Workflow className="w-6 h-6" />;
      default:
        return <GitBranch className="w-6 h-6" />;
    }
  };

  const getSkillDescription = (name: string) => {
    switch (name) {
      case 'Swift':
        return 'Expert in Swift programming with deep understanding of protocol-oriented programming, generics, and concurrency.';
      case 'SwiftUI':
        return 'Building modern, declarative UIs with custom animations, complex layouts, and state management.';
      case 'UIKit':
        return 'Extensive experience with UIKit, custom controls, and responsive layouts using Auto Layout.';
      case 'Core Data':
        return 'Proficient in data persistence, complex relationships, and efficient data management.';
      case 'iOS Architecture':
        return 'Implementing clean architectures (MVVM, Clean Swift) with dependency injection and modular design.';
      case 'Xcode':
        return 'Advanced debugging, performance optimization, and profiling using Xcode tools.';
      case 'App Store Connect':
        return 'Managing app releases, TestFlight beta testing, and App Store optimization.';
      case 'CI/CD':
        return 'Setting up automated build pipelines, testing, and deployment workflows.';
      case 'WebKit':
        return 'Experienced in using WebKit to render and customize web content within iOS applications for seamless in-app browsing and advanced UI integration';
      default:
        return '';
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-3 md:px-5">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            With over 2 years of experience in iOS development, I've mastered various
            technologies and frameworks to create exceptional mobile applications.
          </p>
        </div>
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill: Skill) => (
            <div 
              key={skill.name}
              className="group p-6 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark group-hover:scale-110 transition-transform duration-300">
                  {getSkillIcon(skill.name)}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {getSkillDescription(skill.name)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;// import React, { useEffect, useRef } from 'react';
// import { skillsData } from '../data/skillsData';
// import { Code2, Smartphone, Palette, Terminal, Wrench, Apple } from 'lucide-react';

// const getIconForCategory = (category: string) => {
//   switch (category) {
//     case 'iOS Development':
//       return <Apple className="w-8 h-8 text-blue-600 dark:text-blue-400" />;
//     case 'Tools & Frameworks':
//       return <Wrench className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />;
//     case 'Design & UI':
//       return <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />;
//     case 'Programming Languages':
//       return <Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />;
//     case 'Other Skills':
//       return <Terminal className="w-8 h-8 text-orange-600 dark:text-orange-400" />;
//     case 'Apple Technologies':
//       return <Smartphone className="w-8 h-8 text-red-600 dark:text-red-400" />;
//     default:
//       return <Code2 className="w-8 h-8 text-gray-600 dark:text-gray-400" />;
//   }
// };

// const Skills: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

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

//   return (
//     <section 
//       id="skills" 
//       className="py-24 bg-gray-50 dark:bg-gray-800"
//     >
//       <div 
//         ref={sectionRef}
//         className="container mx-auto px-3 md:px-5 opacity-0 transition-opacity duration-1000"
//       >
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
//             Skills & Expertise
//           </h2>
//           <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-700 dark:text-gray-300">
//             With over 2 years of experience in iOS development, I've mastered various
//             technologies and frameworks to create exceptional mobile applications.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillsData.map((category) => (
//             <div 
//               key={category.name}
//               className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
//             >
//               <div className="p-8">
//                 <div className="flex items-center mb-6">
//                   {getIconForCategory(category.name)}
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
//                     {category.name}
//                   </h3>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-3">
//                   {category.skills.map((skill) => (
//                     <div 
//                       key={skill.name}
//                       className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                     >
//                       <span className="font-medium text-gray-900 dark:text-white text-sm">
//                         {skill.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="px-8 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-600 dark:text-gray-400">
//                     {category.skills.length} Skills
//                   </span>
//                   <span className="text-blue-600 dark:text-blue-400 font-medium">
//                     Expert Level
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
//             <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//               10+
//             </div>
//             <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
//           </div>
          
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
//             <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//               6+
//             </div>
//             <p className="text-gray-700 dark:text-gray-300">Happy Clients</p>
//           </div>
          
//           {/* <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
//             <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//               10+
//             </div>
//             <p className="text-gray-700 dark:text-gray-300">App Store Releases</p>
//           </div> */}
          
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
//             <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//               3+
//             </div>
//             <p className="text-gray-700 dark:text-gray-300">Industry Awards</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;