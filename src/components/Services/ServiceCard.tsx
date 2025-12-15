import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="service-card">
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
        </div>
    );
};

export default ServiceCard;