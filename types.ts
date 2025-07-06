
import React from 'react';
import type { Skill } from './types';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  iconUrl: string;
}

export interface NavLink {
    id: string;
    title: string;
    Icon: React.FC<{className?: string}>;
}
// Paths updated to reference the /icons/ folder for better organization

export const SKILLS: Skill[] = [
    { name: 'Java', iconUrl: '/images/java.png' },
    { name: 'Python', iconUrl: '/images/python.png' },
    { name: 'JavaScript', iconUrl: '/images/javascript.png' },
    { name: 'HTML', iconUrl: '/images/html.png' },
    { name: 'CSS', iconUrl: '/images/css.png' },
    { name: 'Spring Boot', iconUrl: '/images/spring.png' },
    { name: 'MySQL', iconUrl: '/images/mysql.png' },
    { name: 'Firebase', iconUrl: '/images/firebase.png' },
    { name: 'Git', iconUrl: '/images/git.png' },
    {name: 'GitHub', iconUrl: '/images/github.png' },
    { name: 'JDBC', iconUrl: '/images/jdbc.png' },
    { name: 'PHP', iconUrl: '/images/php.png' },
    { name: 'C', iconUrl: '/images/c.png' },
    { name: 'C++', iconUrl: '/images/cpp.png' },
    { name: 'DotNet', iconUrl: '/images/net.png' },

    { name: 'VS Code', iconUrl: '/images/vscode.png' },
    { name: 'Eclipse', iconUrl: '/images/eclipse.png' },
    { name: 'IntelliJ IDEA', iconUrl: '/images/intelli.png' },
    { name: 'Postman', iconUrl: '/images/postman.png' },
    { name: 'Figma', iconUrl: '/images/figma.png' },
    { name: 'Tailwind CSS', iconUrl: '/images/tailwind.png' },
    { name: 'React', iconUrl: '/images/react.png' },
    { name: 'Node.js', iconUrl: '/images/nodejs.png' }
];
