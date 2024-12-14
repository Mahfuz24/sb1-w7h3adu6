import React from 'react';

function Hero() {
  return (
    <section className="pt-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/2 backdrop-blur-sm"></div>
        <div className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Gateway to <span className="text-primary">Profitable</span> Property Investment
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Earn passive income through our fully managed short-term rental properties
          </p>
          <button className="bg-primary text-dark px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300">
            Start Investing Today
          </button>
        </div>
      </div>
    </section>
  );
}