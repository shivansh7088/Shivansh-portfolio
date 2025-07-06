import React, { forwardRef } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../constants';
import { SKILLS } from '@/types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const generateAboutText = () => {
    const keySkills = SKILLS.slice(0, 3).map(s => s.name).join(', ');
    const projectTypes = [...new Set(PROJECTS.map(p => p.category))].join(' and ');

    return `
        Hello! I'm ${PERSONAL_INFO.name}, a dedicated Full-Stack Developer with a passion for creating intuitive and powerful web applications.
        With a strong foundation in technologies like ${keySkills}, I specialize in bringing ideas to life from concept to deployment.
        My experience spans across building various applications, including ${projectTypes}.
        I thrive on solving complex problems and am constantly exploring new technologies to enhance my skill set and deliver exceptional user experiences.
        When I'm not coding, I enjoy contributing to open-source projects and staying up-to-date with the latest industry trends.
    `;
};

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold mb-8 text-center relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
    </h2>
);


const AboutSection = forwardRef<HTMLElement>((props, ref) => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const aboutText = generateAboutText();

    return (
        <section id="about" ref={ref} className="min-h-screen flex flex-col justify-center py-20">
            <div ref={containerRef} className={`transition-all duration-700 ease-out ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                    <SectionHeader title="About Me" />
                </div>
                <div className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    <p>{aboutText}</p>
                </div>
            </div>
        </section>
    );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;