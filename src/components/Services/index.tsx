import React from 'react';
import services from '../../../data/services';
import ServiceCard from './ServiceCard';
import SectionTitle from '../common/SectionTitle';

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const Services: React.FC = () => {
    return (
        <section id="services">
            <SectionTitle title="My Services" />
            <div className="services-container">
                {services.map((service: ServiceItem) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services;