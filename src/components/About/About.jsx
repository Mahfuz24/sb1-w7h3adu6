import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="prose prose-lg">
          <p className="text-gray-600">
            Hello! I'm [Your Name], and I'm passionate about [your interests/profession].
            I specialize in [your skills/expertise] and love to [what you enjoy doing].
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;