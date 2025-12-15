import React from 'react';

const CVDownload: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/documents/cv.pdf';
        link.download = 'cv.pdf';
        link.click();
    };

    return (
        <button onClick={handleDownload} className="cv-download-button">
            Download CV
        </button>
    );
};

export default CVDownload;