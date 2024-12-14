import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-dark-light/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">BNB Bookings Hotel</h1>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}