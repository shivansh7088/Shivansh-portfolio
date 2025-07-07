import React, { forwardRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold mb-8 text-center relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
    </h2>
);

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({ name, value, onChange, ...rest }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    className="w-full p-3 rounded-lg bg-light-card dark:bg-dark-card border border-white/20 focus:ring-2 focus:ring-accent focus:outline-none transition-all"
    {...rest}
  />
);

import React, { useState } from 'react';

const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="py-20">
      <div ref={containerRef} className={`transition-all duration-700 ease-out ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <SectionHeader title="Get In Touch" />
        </div>
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/mrbkvdwb"
            method="POST"
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <InputField
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex-1">
                <InputField
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="w-full p-3 rounded-lg bg-light-card dark:bg-dark-card border border-white/20 focus:ring-2 focus:ring-accent focus:outline-none transition-all"
                value={form.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors shadow-lg hover:shadow-neon-accent"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});


ContactSection.displayName = 'ContactSection';
export default ContactSection;

