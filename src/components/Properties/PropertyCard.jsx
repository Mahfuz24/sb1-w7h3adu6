import React from 'react';

function PropertyCard({ image, location, units, status }) {
  return (
    <div className="backdrop-blur-md bg-dark-lighter/70 rounded-lg border border-primary/20 overflow-hidden">
      <img src={image} alt={location} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{location}</h3>
        <div className="space-y-2">
          <p className="text-gray-300">
            <span className="font-medium text-primary-light">Units:</span> {units}
          </p>
          <p className="text-gray-300">
            <span className="font-medium text-primary-light">Status:</span> {status}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;