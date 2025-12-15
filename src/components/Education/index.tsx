import React from 'react';
import educationData from '../../data/education';
import EducationCard from './EducationCard';
import SectionTitle from '../common/SectionTitle';

interface EducationItem {
    institution: string;
    degree: string;
    startYear: number;
    endYear: number;
    description: string;
    id?: number;
}

const Education: React.FC = () => {
    return (
        <section id="education">
            <SectionTitle title="Education" />
            <div className="education-container">
                {educationData.map((edu: EducationItem, index: number) => (
                    <EducationCard key={edu.id || index} {...edu} />
                ))}
            </div>
        </section>
    );
};

export default Education;