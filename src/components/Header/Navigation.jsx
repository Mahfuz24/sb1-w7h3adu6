import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <a href="#why-us" className="text-gray-300 hover:text-primary transition duration-300">
            Why Choose Us
          </a>
        </li>
        <li>
          <a href="#investment" className="text-gray-300 hover:text-primary transition duration-300">
            Investment
          </a>
        </li>
        <li>
          <a href="#properties" className="text-gray-300 hover:text-primary transition duration-300">
            Properties
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-300 hover:text-primary transition duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;