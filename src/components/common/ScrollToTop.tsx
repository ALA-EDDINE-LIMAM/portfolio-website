import React, { useEffect } from 'react';

const ScrollToTop: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollToTopButton = document.getElementById('scrollToTop');
            if (scrollToTopButton) {
                if (window.scrollY > 300) {
                    scrollToTopButton.classList.add('visible');
                } else {
                    scrollToTopButton.classList.remove('visible');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button id="scrollToTop" className="scrollToTop" onClick={scrollToTop}>
            ↑
        </button>
    );
};

export default ScrollToTop;