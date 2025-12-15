import React from 'react';

interface SkillCardProps {
    skill: {
        name: string;
        level: number; // Level from 0 to 100
        description: string;
    };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <div className="skill-card">
            <h3>{skill.name}</h3>
            <div className="skill-level">
                <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
            <p>{skill.description}</p>
        </div>
    );
};

export default SkillCard;