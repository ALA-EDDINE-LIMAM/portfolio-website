import React from 'react';
import { experienceData } from '../../data/experience';
import './Timeline.css';

const Timeline: React.FC = () => {
    return (
        <div className="timeline">
            {experienceData.map((item, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{item.title}</h3>
                        <span className="timeline-date">{item.date}</span>
                        <p className="timeline-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;