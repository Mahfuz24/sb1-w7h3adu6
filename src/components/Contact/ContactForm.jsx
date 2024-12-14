import React from 'react';

function ContactForm() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 rounded bg-dark-light text-gray-300 border border-primary/20 focus:border-primary focus:outline-none"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 rounded bg-dark-light text-gray-300 border border-primary/20 focus:border-primary focus:outline-none"
      />
      <input
        type="tel"
        placeholder="Your Phone"
        className="w-full px-4 py-2 rounded bg-dark-light text-gray-300 border border-primary/20 focus:border-primary focus:outline-none"
      />
      <button
        type="submit"
        className="w-full bg-primary text-dark px-6 py-3 rounded font-semibold hover:bg-primary-dark transition duration-300"
      >
        Request Information
      </button>
    </form>
  );
}

export default ContactForm;