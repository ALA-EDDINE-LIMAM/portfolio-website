import React from 'react';

interface SkillItem {
    category: string;
    items: { name: string; level: string }[];
}

interface SkillCardProps {
    skill: SkillItem;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <div className="skill-card">
            <h3>{skill.category}</h3>
            <div className="skill-list">
                {skill.items.map((item, index) => (
                    <div key={index} className="skill-item">
                        <span>{item.name}</span>
                        <span className="skill-level-badge">{item.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;