import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of your first project',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Project 2',
      description: 'Description of your second project',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;