import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div className="card">
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {link && (
                    <a href={link} className="card-link">
                        Learn More
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;