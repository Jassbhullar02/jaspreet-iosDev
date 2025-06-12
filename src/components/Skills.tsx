import React, { useRef } from 'react';
import { Code2, Layers, Database, Cpu, Smartphone, GitBranch, Store, Workflow, Globe } from 'lucide-react';

type Skill = {
  name: string;
  level: string;
  description: string;
};

const SKILLS: Skill[] = [
  { name: 'Swift', level: 'Expert', description: 'Deep understanding of protocol-oriented programming, generics, concurrency, and best practices for scalable iOS codebases.' },
  { name: 'SwiftUI', level: 'Advanced', description: 'Building modern, declarative UIs with custom animations, complex layouts, and state management.' },
  { name: 'UIKit', level: 'Advanced', description: 'Extensive experience with UIKit, custom controls, and responsive layouts using Auto Layout.' },
  { name: 'Core Data', level: 'Proficient', description: 'Efficient data persistence, complex relationships, and optimized data management.' },
  { name: 'iOS Architecture', level: 'Advanced', description: 'Implementing MVVM, Clean Swift, dependency injection, and modular design for maintainable apps.' },
  { name: 'Xcode', level: 'Expert', description: 'Advanced debugging, performance optimization, and profiling using Xcode tools.' },
  { name: 'App Store Connect', level: 'Proficient', description: 'Managing app releases, TestFlight beta testing, and App Store optimization.' },
  { name: 'CI/CD', level: 'Proficient', description: 'Automated build pipelines, testing, and deployment workflows.' },
  { name: 'WebKit', level: 'Proficient', description: 'Rendering and customizing web content within iOS apps for seamless in-app browsing and UI integration.' },
];

const getSkillIcon = (name: string) => {
  switch (name) {
    case 'Swift':
      return <Code2 className="w-7 h-7" />;
    case 'SwiftUI':
      return <Layers className="w-7 h-7" />;
    case 'UIKit':
      return <Smartphone className="w-7 h-7" />;
    case 'Core Data':
      return <Database className="w-7 h-7" />;
    case 'iOS Architecture':
      return <Cpu className="w-7 h-7" />;
    case 'Xcode':
      return <Code2 className="w-7 h-7" />;
    case 'App Store Connect':
      return <Store className="w-7 h-7" />;
    case 'CI/CD':
      return <Workflow className="w-7 h-7" />;
    case 'WebKit':
      return <Globe className="w-7 h-7" />;
    default:
      return <GitBranch className="w-7 h-7" />;
  }
};

const Skills: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-3 md:px-5 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
            With over <span className="text-blue-700 dark:text-blue-400 font-bold">2 years</span> of iOS development experience, I specialize in building robust, scalable, and visually stunning mobile applications using the latest Apple technologies.
          </p>
        </div>
        <div
          ref={skillsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {SKILLS.map((skill: Skill) => (
            <div
              key={skill.name}
              className="group p-5 sm:p-7 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 flex flex-col cursor-pointer hover:-translate-y-2 relative overflow-hidden border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            >
              {/* Light effect background */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-white/20 dark:bg-blue-900/10 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 group-hover:scale-110 transition-transform duration-300 shadow">
                    {getSkillIcon(skill.name)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded ml-1">{skill.level}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2 flex-1 text-sm sm:text-base">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;