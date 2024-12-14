import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Secure Your Spot Today</h2>
        <p className="text-xl mb-8 text-gray-300">
          Don't miss out on this exceptional opportunity to build wealth in a growing market.
          With demand increasing, spots are limited!
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;