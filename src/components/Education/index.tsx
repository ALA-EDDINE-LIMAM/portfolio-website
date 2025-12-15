import React from 'react';
import educationData from '../../../data/education';
import EducationCard from './EducationCard';
import SectionTitle from '../common/SectionTitle';

const Education: React.FC = () => {
    return (
        <section id="education">
            <SectionTitle title="Education" />
            <div className="education-container">
                {educationData.map((edu) => (
                    <EducationCard key={edu.id} {...edu} />
                ))}
            </div>
        </section>
    );
};

export default Education;