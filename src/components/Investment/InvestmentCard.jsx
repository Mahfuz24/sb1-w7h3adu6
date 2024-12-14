import React from 'react';

function InvestmentCard({ title, value, description }) {
  return (
    <div className="p-6 backdrop-blur-md bg-dark-lighter/70 rounded-lg border border-primary/20">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-3xl font-bold text-primary-light mb-4">{value}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default InvestmentCard;