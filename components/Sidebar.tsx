import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { PERSONAL_INFO } from '../constants';
import type { NavLink } from '../types';
import { HomeIcon, UserIcon, CodeBracketIcon, BriefcaseIcon, EnvelopeIcon, GithubIcon, LinkedInIcon, TwitterIcon, MenuIcon, XIcon } from './Icons';

const NAV_LINKS: NavLink[] = [
    { id: 'home', title: 'Home', Icon: HomeIcon },
    { id: 'about', title: 'About', Icon: UserIcon },
    { id: 'skills', title: 'Skills', Icon: CodeBracketIcon },
    { id: 'projects', title: 'Projects', Icon: BriefcaseIcon },
    { id: 'contact', title: 'Contact', Icon: EnvelopeIcon },
];

interface SidebarProps {
    activeSection: string;
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, isMobileMenuOpen, setMobileMenuOpen }) => {

    const NavContent = () => (
        <div className="flex flex-col h-full p-8 lg:p-0">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-accent">{PERSONAL_INFO.name}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{PERSONAL_INFO.title}</p>
            </div>

            <nav className="flex-grow">
                <ul>
                    {NAV_LINKS.map(link => (
                        <li key={link.id}>
                            <a 
                                href={`#${link.id}`} 
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center py-3 px-4 my-2 rounded-lg transition-all duration-300 group ${
                                    activeSection === link.id
                                    ? 'bg-accent/10 text-accent font-semibold'
                                    : 'hover:bg-gray-200/50 dark:hover:bg-white/5'
                                }`}
                            >
                                <link.Icon className={`h-5 w-5 mr-4 transition-colors duration-300 ${activeSection === link.id ? 'text-accent' : 'text-gray-500 dark:text-gray-400 group-hover:text-accent'}`} />
                                <span className="text-lg">{link.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-auto">
                <div className="flex justify-center space-x-4 mb-6">
                    <a href="#" aria-label="Github" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors"><GithubIcon className="h-6 w-6" /></a>
                    <a
                      href="https://www.linkedin.com/in/shivansh-dhakare7088650629"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors"
                    >
                      <LinkedInIcon className="h-6 w-6" />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors"><TwitterIcon className="h-6 w-6" /></a>
                </div>
                <div className="flex justify-between items-center">
                    <a href={PERSONAL_INFO.resumeUrl} download className="text-sm px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors shadow-lg hover:shadow-neon-accent-light">Download CV</a>
                    <ThemeSwitcher />
                </div>
                <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">&copy; {new Date().getFullYear()} Shivansh Dhakare</p>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                aria-label="Open menu"
                className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
                <MenuIcon className="h-6 w-6"/>
            </button>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-40 bg-light-bg dark:bg-dark-bg transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                 <NavContent />
                 <button
                    aria-label="Close menu"
                    className="absolute top-4 right-4 p-2"
                    onClick={() => setMobileMenuOpen(false)}
                 >
                     <XIcon className="h-6 w-6" />
                 </button>
            </div>


            {/* Desktop Sidebar */}
            <aside className="hidden lg:block lg:w-1/4 lg:max-w-xs h-screen sticky top-0 p-8 border-r border-gray-200 dark:border-gray-800">
                <NavContent />
            </aside>
        </>
    );
};

export default Sidebar;
