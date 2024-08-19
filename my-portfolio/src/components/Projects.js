import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css'; 

const Projects = () => {
  const projects = [
    {
      title: 'SaferWalk',
      date: 'November 2021 - May 2022',
      description: [
        'Engineered a solution enabling users to quickly discover a safer pedestrian route to the destination, driven by a probability-based algorithm delivering results in just 30 seconds.',
        'Teamed up with the frontend team for designing the website using tools like HTML/CSS and Bootstrap.',
        'Demonstrated the web application to over 50 students at the Project’s Fair.',
        'Mastered Git for version control and used Trello to delegate tasks and complete goals.',
      ],
    },
    {
      title: 'Kilburnazon',
      date: 'December 2022',
      description: [
        'Designed and implemented a database for a company consisting of employees across different departments by producing an Entity Relationship Diagram (ERD) in crow’s foot notation capturing all information.',
        'Built an interactive web application and frontend for the database using tools like PHP and MySQL to create a seamless user experience.',
      ],
    },
    {
      title: 'Eventlite',
      date: 'February 2023 - May 2023',
      description: [
        'Developed an enterprise web application called ‘Eventlite’ using the Spring Boot framework in Java with Eclipse as the primary development environment.',
        'Devised an efficient data model for software system entities and relationships, transforming acceptance tests into unit and integration tests to enhance system compliance and resilience against regression.',
        'Collaborated alongside a team of seven to create a versatile library, amplifying functionality across numerous projects, all while ensuring compliance with industry best practices and customer requirements.',
      ],
    },
    {
      title: 'Augmented Selfie Application',
      date: 'October 2023 - March 2024',
      description: [
        'Developed an augmented reality (AR) selfie application that enhances digital memories with interactive and contextual data overlays, facilitating richer storytelling and social sharing experiences.',
        'Implemented user-centred design practices, including design workshops and user testing, to refine application features and optimize user engagement.',
        'Integrated advanced computer vision, image processing, and machine learning algorithms to deliver personalized user interactions within the app.',
      ],
    },
    {
      title: 'Rock paper Scissor Game',
      date: 'July 2024',
      description: [
        'It\'s a simple bot v/s human game that uses React for frontend and Flask for the backend development.',
      ],
      codeLink: 'https://github.com/divyanair1111/RockPaperScissorGame',
    },
    {
      title: 'Weather App',
      date: 'August 2024',
      description: [
        'A simple weather application built with React and Flask. The app allows users to search for current weather conditions in any city using the OpenWeather API.',
        'It features a clean, user-friendly interface with real-time weather data and animated background gradients.',
        'It also includes a short video of the live demo of the app.',
      ],
      codeLink: 'https://github.com/divyanair1111/Weather-App',
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-900 py-20 text-white overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-center">PROJECTS</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-500 mb-4">{project.date}</p>
                  <ul className="list-disc list-inside text-gray-400 mb-4">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 md:mt-0">
                  {project.codeLink && (
                    <a href={project.codeLink} className="text-blue-400 hover:underline ml-2">Source Code</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <div className="star-field"></div>
      </div>
    </section>
  );
};

export default Projects;
