import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 sm:py-10 w-full">
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 animate-fade-in w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-8 md:gap-0 w-full">
          <div className="mb-8 md:mb-0 w-full md:w-auto text-center md:text-left">
            <a href="#home" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              Jaspreet<span className="text-blue-400"> Bhullar </span>
            </a>
            <p className="mt-2 text-gray-400 max-w-xs sm:max-w-md mx-auto md:mx-0 text-xs sm:text-sm md:text-base">
              Creating intuitive and impactful iOS applications with a focus on performance and user experience.
            </p>
          </div>
          
          <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.instagram.com/code_ka_adda/profilecard/?igsh=bjY5cjAxMGVrejRo" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    Instagram 
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jaspreet-singh-087768296/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Jassbhullar02" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.upwork.com/freelancers/jaspreets5?mp_source=share" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    Upwork
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-xs sm:text-sm md:text-base">
                  Haryana, India
                </li>
                <li>
                  <a href="mailto:jaspreet1502@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    jaspreet1502@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6 sm:my-8" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 w-full">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left w-full">
            © {currentYear} Jaspreet Singh Bhullar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;