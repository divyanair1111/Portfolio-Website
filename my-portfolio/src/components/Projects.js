import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SaferWalk',
      description: 'An application that helps users find the safest pedestrian route to their destination.',
      image: 'path/to/image1.jpg',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Kilburnazon',
      description: 'A database-driven web application for managing employees across departments.',
      image: 'path/to/image2.jpg',
      demoLink: '#',
      codeLink: '#',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">Latest Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.demoLink} className="text-blue-400 hover:underline">Live Demo</a> | 
                <a href={project.codeLink} className="text-blue-400 hover:underline ml-2">Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
