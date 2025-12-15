import React from 'react';
import skillsData from '../../data/skills';
import SkillCard from './SkillCard';
import SectionTitle from '../common/SectionTitle';

interface SkillItem {
    category: string;
    items: { name: string; level: string }[];
}

const Skills: React.FC = () => {
    return (
        <section id="skills">
            <SectionTitle title="Skills" />
            <div className="skills-container">
                {skillsData.map((skill: SkillItem, index: number) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;