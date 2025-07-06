import React, { forwardRef, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ChevronDownIcon } from './Icons';

const useTypewriter = (words: string[], delay = 200, pause = 2000) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const typeSpeed = isDeleting ? delay / 2 : delay;

        const handleTyping = () => {
            if (isDeleting) {
                setText(currentWord.substring(0, text.length - 1));
            } else {
                setText(currentWord.substring(0, text.length + 1));
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, delay, pause]);

    return text;
};


const AnimatedSection = forwardRef<HTMLElement>((props, ref) => {
    const typewriterText = useTypewriter([
        "I build web apps.",
        "I solve problems.",
        "I write clean code.",
        "I love new tech."
    ]);
    
    return (
        <section id="home" ref={ref} className="h-screen flex flex-col justify-center items-center text-center -mt-16 lg:mt-0">
            <div className="flex flex-col items-center">
                <img
                    src={PERSONAL_INFO.profilePicture}
                    alt={PERSONAL_INFO.name}
                    className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-accent/50 shadow-lg hover:scale-105 hover:shadow-neon-accent-light transition-all duration-300"
                    loading="eager"
                />
                <h2 className="text-4xl md:text-6xl font-bold mb-2">
                    Hey, I'm <span className="text-accent">{PERSONAL_INFO.name}</span>
                </h2>
                <h3 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 min-h-[48px] md:min-h-[56px]">
                    {typewriterText}
                    <span className="animate-ping">|</span>
                </h3>
            </div>
            <a href="#about" className="absolute bottom-10 animate-bounce">
                <ChevronDownIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </a>
        </section>
    );
});

AnimatedSection.displayName = "HeroSection";
export default AnimatedSection;