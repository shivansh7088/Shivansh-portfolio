
import React, { useRef, useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

interface MainContentProps {
    setActiveSection: (sectionId: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ setActiveSection }) => {
    const sectionRefs = {
        home: useRef<HTMLElement>(null),
        about: useRef<HTMLElement>(null),
        skills: useRef<HTMLElement>(null),
        projects: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null),
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4 // 40% of the section should be visible
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            Object.values(sectionRefs).forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="lg:w-3/4 p-6 sm:p-8 lg:p-12">
            <HeroSection ref={sectionRefs.home} />
            <AboutSection ref={sectionRefs.about} />
            <SkillsSection ref={sectionRefs.skills} />
            <ProjectsSection ref={sectionRefs.projects} />
            <ContactSection ref={sectionRefs.contact} />
        </main>
    );
};

export default MainContent;
