
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AnimatedBackground from './components/AnimatedBackground';
import GlowingCursor from './components/GlowingCursor';
import BackToTopButton from './components/BackToTopButton';

export const ThemeContext = React.createContext<{ theme: string; toggleTheme: () => void; }>({
    theme: 'dark',
    toggleTheme: () => {},
});

const App: React.FC = () => {
    const [theme, setTheme] = useState('dark');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="relative min-h-screen font-sans">
                <AnimatedBackground />
                <GlowingCursor />

                <div className="lg:flex max-w-7xl mx-auto z-10 relative">
                    <Sidebar activeSection={activeSection} isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setIsMobileMenuOpen} />
                    <MainContent setActiveSection={setActiveSection} />
                </div>
                
                <BackToTopButton />
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
