import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 sm:py-10 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 animate-fade-in w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-3 md:gap-0 w-full">
          <div className="mb-3 md:mb-0 w-full md:w-auto text-center md:text-left">
            <a href="#home" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              Jaspreet<span className="text-blue-400"> Bhullar </span>
            </a>
            <p className="mt-2 text-gray-400 max-w-xs sm:max-w-md mx-auto md:mx-0 text-xs sm:text-sm md:text-base">
              Creating intuitive and impactful iOS applications with a focus on performance and user experience.
            </p>
          </div>

          {/* Three headings in a row, always aligned, less spacing */}
          <div className="w-full md:w-auto flex flex-row justify-center items-start gap-1 sm:gap-2 text-center md:text-left">
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start min-w-[80px]">
              <h3 className="text-xs sm:text-sm font-semibold mb-0.5 capitalize tracking-wide">Quick links</h3>
              <ul className="space-y-0">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center md:items-start min-w-[80px]">
              <h3 className="text-xs sm:text-sm font-semibold mb-0.5 capitalize tracking-wide">Socials</h3>
              <ul className="space-y-0">
                <li>
                  <a href="https://www.instagram.com/code_ka_adda/profilecard/?igsh=bjY5cjAxMGVrejRo" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Instagram 
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jaspreet-singh-087768296/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Jassbhullar02" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.upwork.com/freelancers/jaspreets5?mp_source=share" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Upwork
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start min-w-[80px]">
              <h3 className="text-xs sm:text-sm font-semibold mb-0.5 capitalize tracking-wide">Contact</h3>
              <ul className="space-y-0">
                <li className="text-gray-400 text-xs sm:text-sm">
                  Haryana, India
                </li>
                <li>
                  <a href="mailto:jaspreet1502@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    jaspreet1502@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-3 sm:my-4" />

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