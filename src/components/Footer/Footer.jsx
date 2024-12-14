import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark-light text-gray-300 py-6 text-center">
      <p>© {new Date().getFullYear()} BNB Bookings Hotel. All rights reserved.</p>
    </footer>
  );
}

export default Footer;