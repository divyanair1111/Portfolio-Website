import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SaferWalk',
      description: `Engineered a solution enabling users to quickly discover a safer pedestrian route to the destination, driven by a probability-based algorithm delivering results in just 30 seconds.
                    Teamed up with the frontend team for designing the website using tools like HTML/CSS and Bootstrap.
                    Demonstrated the web application to over 50 students at the Project’s Fair.
                    Mastered Git for version control and used Trello to delegate tasks and complete goals.`,
    },
    {
      title: 'Kilburnazon',
      description: `Designed and implemented a database for a company consisting of employees across different departments by producing an Entity Relationship Diagram (ERD) in crow’s foot notation capturing all information.
                    Built an interactive web application and frontend for the database using tools like PHP and MySQL to create a seamless user experience.`,
    },
    {
      title: 'Eventlite',
      description: `Developed an enterprise web application called ‘Eventlite’ using the Spring Boot framework in Java with Eclipse as the primary development environment. 
                    Devised an efficient data model for software system entities and relationships, transforming acceptance tests into unit and integration tests to enhance system compliance and resilience against regression.
                    Collaborated alongside a team of seven to create a versatile library, amplifying functionality across numerous projects, all while ensuring compliance with industry best practices and customer requirements.`,
    },
    {
      title: 'Augmented Selfie Application',
      description: `Developed an augmented reality (AR) selfie application that enhances digital memories with interactive and contextual data overlays, facilitating richer storytelling and social sharing experiences. 
                    Implemented user-centred design practices, including design workshops and user testing, to refine application features and optimize user engagement. 
                    Integrated advanced computer vision, image processing, and machine learning algorithms to deliver personalized user interactions within the app.`,
    },
    {
      title: 'Rock paper Scissor Game',
      description: `It's a simple bot v/s human game that uses React for frontend and Flask for the backend development.`,
      // demoLink: '', // Leave empty if there's no live demo link
      codeLink: 'https://github.com/divyanair1111/RockPaperScissorGame',
    },
    {
      title: 'Weather App',
      description: `A simple weather application built with React and Flask. The app allows users to search for current weather conditions in any city using the OpenWeather API. It features a clean, user-friendly interface with real-time weather data and animated background gradients. It also includes a short video of the live demo of the app.`,
      // demoLink: '', // Leave empty if there's no live demo link
      codeLink: 'https://github.com/divyanair1111/Weather-App',
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">Latest Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.demoLink && (
                  <a href={project.demoLink} className="text-blue-400 hover:underline">Live Demo</a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} className="text-blue-400 hover:underline ml-2">Source Code</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
