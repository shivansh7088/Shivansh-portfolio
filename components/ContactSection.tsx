import React, { useState, forwardRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold mb-8 text-center relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
    </h2>
);


const ContactSection = forwardRef<HTMLElement>((props, ref) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate form submission
        setTimeout(() => {
            if (formData.name && formData.email && formData.message) {
                 setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    const InputField: React.FC<{name: string; type?: string; placeholder: string; value: string; required?: boolean;}> = ({ name, type = 'text', placeholder, value, required }) => (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
            className="w-full p-3 rounded-lg bg-light-card dark:bg-dark-card border border-white/20 focus:ring-2 focus:ring-accent focus:outline-none transition-all"
        />
    );
    
    if (status === 'success') {
        return (
             <section id="contact" ref={ref} className="min-h-screen/2 flex flex-col justify-center items-center py-20 text-center">
                 <div className="p-8 rounded-lg bg-light-card dark:bg-dark-card border border-white/10 backdrop-blur-md">
                    <h3 className="text-2xl font-bold text-accent mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. I'll get back to you soon.</p>
                 </div>
            </section>
        );
    }

    return (
        <section id="contact" ref={ref} className="py-20">
             <div ref={containerRef} className={`transition-all duration-700 ease-out ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                    <SectionHeader title="Get In Touch" />
                </div>
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <InputField name="name" placeholder="Your Name" value={formData.name} required />
                            </div>
                            <div className="flex-1">
                                <InputField name="email" type="email" placeholder="Your Email" value={formData.email} required />
                            </div>
                        </div>
                        <div>
                           <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-light-card dark:bg-dark-card border border-white/20 focus:ring-2 focus:ring-accent focus:outline-none transition-all"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors shadow-lg hover:shadow-neon-accent disabled:bg-gray-400 disabled:shadow-none"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        {status === 'error' && <p className="text-red-500 text-center mt-4">Please fill out all fields.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
});

ContactSection.displayName = 'ContactSection';
export default ContactSection;