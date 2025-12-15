import React from 'react';
// Import the file directly so Vite can handle the path
import cvFile from '../../assets/documents/cv.pdf';

const CVDownload: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        // You can set a custom name for the downloaded file here
        link.download = 'Alaa_Eddine_Limam_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload} className="cv-download-button">
            Download CV
        </button>
    );
};

export default CVDownload;