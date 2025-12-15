import React from 'react';
import skillsData from '../../data/skills';
import SkillCard from './SkillCard';
import SectionTitle from '../common/SectionTitle';

const Skills: React.FC = () => {
    return (
        <section id="skills">
            <SectionTitle title="Skills" />
            <div className="skills-container">
                {skillsData.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;