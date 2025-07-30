import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-4 pb-1 sm:py-3 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 animate-fade-in w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-1 md:gap-0 w-full">
          <div className="mb-1 md:mb-0 w-full md:w-auto text-center md:text-left">
            <a href="#home" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              Jaspreet<span className="text-blue-400"> Bhullar </span>
            </a>
            <p className="mt-1 text-gray-400 max-w-xs sm:max-w-md mx-auto md:mx-0 text-xs sm:text-sm md:text-base text-left">
              Creating intuitive and impactful iOS applications with a focus on performance and user experience.
            </p>
          </div>

          {/* Table-like columns for Quick Links, Socials, Contact */}
          <div className="w-full md:w-auto flex flex-row justify-center items-start gap-2 sm:gap-4 max-w-2xl">
            {/* Quick Links */}
            <div className="flex flex-col items-center text-center py-1 min-w-[100px]">
              <h3 className="text-xs sm:text-sm font-semibold mb-0.5 capitalize tracking-wide">Quick links</h3>
              <ul className="space-y-0">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">Contact</a></li>
              </ul>
            </div>
            {/* Socials */}
            <div className="flex flex-col items-center text-center py-1 min-w-[100px]">
              <h3 className="text-xs sm:text-sm font-semibold mb-0.5 capitalize tracking-wide">Socials</h3>
              <ul className="space-y-0">
                <li><a href="https://www.instagram.com/code_ka_adda/profilecard/?igsh=bjY5cjAxMGVrejRo" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/jaspreet-singh-087768296/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">LinkedIn</a></li>
                <li><a href="https://github.com/Jassbhullar02" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">GitHub</a></li>
                <li><a href="https://www.upwork.com/freelancers/jaspreets5?mp_source=share" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">Upwork</a></li>
              </ul>
            </div>
            {/* Contact */}
            {/* <div className="flex flex-col items-center text-center py-1 min-w-[100px]">
              <h3 className="text-xs sm:text-sm font-semibold mb-0.5 capitalize tracking-wide">Contact</h3>
              <ul className="space-y-0">
                <li>
                  <a href="mailto:jaspreet1502@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">
                    jaspreet1502@gmail.com
                  </a>
                </li>
                <li className="text-gray-400 text-xs sm:text-sm block">
                  Haryana, India
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <hr className="border-gray-800 my-1 sm:my-2" />

        {/* Footer bottom details - improved alignment */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Jaspreet Singh Bhullar. All rights reserved.
          </p>
          <div className="flex flex-row items-center gap-2 sm:gap-3">
            <a href="mailto:jaspreet1502@gmail.com" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
              jaspreet1502@gmail.com
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="text-gray-400 text-xs sm:text-sm">Haryana, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;