
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
    return (
        <div 
            onClick={() => onSelect(project)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-light-card dark:bg-dark-card border border-white/10 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
        >
            <div className="relative">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="p-6">
                <p className="text-sm text-accent mb-1">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
