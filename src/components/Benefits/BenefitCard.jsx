import React from 'react';

function BenefitCard({ icon, title, description }) {
  return (
    <div className="p-6 backdrop-blur-md bg-dark-lighter/70 rounded-lg border border-primary/20">
      <div className="text-primary mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default BenefitCard;