
import React, { forwardRef } from 'react';
import { SKILLS } from '@/types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold mb-8 text-center relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
    </h2>
);

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="skills" ref={ref} className="min-h-screen/2 flex flex-col justify-center py-20">
             <div ref={containerRef} className={`transition-all duration-700 ease-out ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                    <SectionHeader title="My Skills" />
                </div>
                <div className="relative group">
                    <div className="flex items-center gap-8 overflow-x-auto pb-4 scrollbar-hide">
                        {SKILLS.map(({ name, iconUrl }) => (
                            <div key={name} className="flex-shrink-0 flex flex-col items-center justify-center gap-2 p-4 w-32 h-32 rounded-lg bg-light-card dark:bg-dark-card border border-white/10 backdrop-blur-md hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-1">
                                <img src={iconUrl} alt={`${name} icon`} className="h-12 w-12 object-contain" />
                                <span className="font-medium text-sm">{name}</span>
                            </div>
                        ))}
                    </div>
                     <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                </div>
            </div>
        </section>
    );
});

SkillsSection.displayName = 'SkillsSection';
export default SkillsSection;