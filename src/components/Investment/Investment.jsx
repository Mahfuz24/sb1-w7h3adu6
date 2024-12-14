import React from 'react';
import InvestmentCard from './InvestmentCard';

function Investment() {
  const investmentData = [
    {
      title: "Annual Revenue",
      value: "€44,625",
      description: "Per one-bedroom apartment at 70% occupancy"
    },
    {
      title: "Net Profit",
      value: "€26,468.75",
      description: "Annual profit per apartment after expenses"
    },
    {
      title: "ROI",
      value: "8.8%",
      description: "Return on investment for 25% share (€112,500)"
    }
  ];

  return (
    <section id="investment" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Investment Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investmentData.map((item, index) => (
            <InvestmentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Investment;