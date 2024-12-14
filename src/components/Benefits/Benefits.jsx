import React from 'react';
import BenefitCard from './BenefitCard';
import { FaChartLine, FaMapMarkerAlt, FaCog, FaCheckCircle } from 'react-icons/fa';

function Benefits() {
  const benefits = [
    {
      icon: <FaChartLine />,
      title: "Impressive Returns",
      description: "Earn consistent passive income with our proven business model"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Strategic Locations",
      description: "Prime locations near airports and city centers ensuring high occupancy"
    },
    {
      icon: <FaCog />,
      title: "Fully Managed",
      description: "We handle everything from maintenance to guest relations"
    },
    {
      icon: <FaCheckCircle />,
      title: "Proven Success",
      description: "Established track record in the Irish short-term rental market"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Why Choose BNB Bookings Hotel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;