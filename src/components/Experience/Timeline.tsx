import React from 'react';
import experienceData from '../../data/experience';
import './Timeline.css';

interface ExperienceItem {
    id: number;
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

const Timeline: React.FC = () => {
    return (
        <div className="timeline">
            {experienceData.map((item: ExperienceItem, index: number) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{item.jobTitle}</h3>
                        <span className="timeline-date">{item.startDate} - {item.endDate}</span>
                        <p className="timeline-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;