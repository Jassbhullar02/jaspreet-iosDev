import React, { useRef } from 'react';
import { Code2, Layers, Database, Cpu, Smartphone, GitBranch, Store, Workflow, Globe } from 'lucide-react';

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
        return <Globe className="w-6 h-6" />; // Changed to Globe icon for WebKit
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
              className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 flex flex-col cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Light effect background */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-white/30 dark:bg-blue-900/10 blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 group-hover:scale-110 transition-transform duration-300">
                    {getSkillIcon(skill.name)}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {getSkillDescription(skill.name)}
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