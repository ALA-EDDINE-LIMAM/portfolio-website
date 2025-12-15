import React from 'react';

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface ServiceCardProps {
    service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
        </div>
    );
};

export default ServiceCard;