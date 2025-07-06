
import React from 'react';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 -left-1/4 w-96 h-96 bg-sky-400/30 dark:bg-sky-500/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-1/4 w-96 h-96 bg-indigo-400/30 dark:bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-400/30 dark:bg-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
    );
};

export default AnimatedBackground;
