
import React, { useState, useEffect } from 'react';

const GlowingCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
            );
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    return (
        <div 
            className="hidden lg:block fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-200"
            style={{ 
                left: position.x, 
                top: position.y,
                width: isPointer ? '40px' : '32px',
                height: isPointer ? '40px' : '32px',
                background: 'rgba(14, 165, 233, 0.2)', // sky-500
                border: '1px solid rgba(14, 165, 233, 0.5)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
                transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
            }}
        />
    );
};

export default GlowingCursor;
