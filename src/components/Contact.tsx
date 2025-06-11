import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send, Instagram, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Persist isSubmitted state in sessionStorage
  useEffect(() => {
    const storedSubmitted = sessionStorage.getItem('contact_isSubmitted');
    if (storedSubmitted === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('contact_isSubmitted', isSubmitted ? 'true' : 'false');
  }, [isSubmitted]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm() && formRef.current) {
      setIsSubmitting(true);

      emailjs
        .sendForm(
          'service_iglw8c6',
          'template_w5aaq3n',
          e.currentTarget,
          'Vk377MJrhxyaQ-AQ7'
        )
        .then(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        })
        .catch(() => {
          setIsSubmitting(false);
          alert('Failed to send message. Please try again later.');
        });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div ref={sectionRef} className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
            Have a project in mind or want to discuss opportunities? <span className="text-blue-700 dark:text-blue-400 font-bold">Let's connect and build something amazing!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-900 p-7 rounded-2xl shadow-lg flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl text-blue-700 dark:text-blue-400">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a href="mailto:jassbhullar1502@gmail.com" className="text-blue-700 dark:text-blue-300 hover:underline text-sm">jassbhullar1502@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl text-blue-700 dark:text-blue-400">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">India, Haryana</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Social</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/code_ka_adda/profilecard/?igsh=bjY5cjAxMGVrejRo" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Jassbhullar02" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/jaspreet-singh-087768296/" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 text-center">
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    Thank you! Your message has been sent successfully.<br />I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Your Name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="mail@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Subject (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Write your message here..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

