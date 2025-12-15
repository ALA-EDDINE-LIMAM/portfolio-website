import { useEffect } from 'react';

const useScrollReveal = (ref, options = {}) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add('reveal');
                    observer.unobserve(element);
                }
            });
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);
};

export default useScrollReveal;