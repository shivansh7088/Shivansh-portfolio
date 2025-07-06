import React, { useState, forwardRef } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GithubIcon, LinkIcon } from './Icons';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold mb-8 text-center relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
    </h2>
);

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="projects" ref={ref} className="min-h-screen py-20">
             <div ref={containerRef} className={`transition-all duration-700 ease-out ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                     <SectionHeader title="My Projects" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
                    ))}
                </div>
            </div>

            <Modal isVisible={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div className="p-2 sm:p-4">
                        <img 
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-48 md:h-64 object-cover rounded-lg mb-4"
                            loading="lazy"
                        />
                        <h3 className="text-2xl font-bold mb-2 text-accent">{selectedProject.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {selectedProject.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                           <a href={selectedProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors shadow-lg hover:shadow-neon-accent-light">
                                <LinkIcon className="h-5 w-5 mr-2" /> Live Demo
                            </a>
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-600/50 dark:bg-gray-200/20 text-light-text dark:text-dark-text hover:bg-gray-500/50 dark:hover:bg-gray-200/30 transition-colors">
                                <GithubIcon className="h-5 w-5 mr-2" /> GitHub
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
});

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;