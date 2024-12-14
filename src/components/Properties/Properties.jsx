import React from 'react';
import PropertyCard from './PropertyCard';

function Properties() {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Dublin City Center",
      units: "6 One-Bedroom Apartments",
      status: "Fully Operational"
    },
    {
      image: "https://images.unsplash.com/photo-1551361415-69c87624334f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Cork Airport Area",
      units: "6 One-Bedroom Apartments",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Our Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;