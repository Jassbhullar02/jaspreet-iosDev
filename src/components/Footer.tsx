import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Jaspreet<span className="text-blue-400"> Bhullar </span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating intuitive and impactful iOS applications with a focus on performance and user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.instagram.com/code_ka_adda/profilecard/?igsh=bjY5cjAxMGVrejRo" className="text-gray-400 hover:text-white transition-colors">
                    Instagram 
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jaspreet-singh-087768296/" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Jassbhullar02" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.upwork.com/freelancers/jaspreets5?mp_source=share" className="text-gray-400 hover:text-white transition-colors">
                    Upwork
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  Haryana, India
                </li>
                <li>
                  <a href="mailto:jaspreet1502@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    jaspreet1502@gmail.com
                  </a>
                </li>
                {/* <li>
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jaspreet Singh Bhullar. All rights reserved.
          </p>
          
          {/* <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;