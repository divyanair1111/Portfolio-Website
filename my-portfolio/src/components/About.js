import React from 'react';
import divyaImage from './divya.jpg';
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="relative bg-black py-20 text-white overflow-hidden mb-20">
      <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-center relative z-10">
        <div className="mb-8 md:mb-0 md:mr-8">
          <img
            src={divyaImage}
            alt="Divya Nair"
            className="w-64 h-64 object-cover rounded-full mx-auto md:mx-0 border-4 border-white" 
          />
        </div>
        <div className="text-lg max-w-3xl">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p>
            Hi, I'm Divya! A recent Computer Science graduate from the University of Manchester with a passion for software development and cybersecurity. I love creating intuitive, beautiful digital experiences, and I'm always eager to bring innovative ideas to life.
          </p>
        </div>
      </div>

      {/* Minimal Starry Background */}
      <div className="absolute inset-0 z-0">
        <div className="minimal-star-field"></div> {/* Subtle star field with fewer stars */}
      </div>
    </section>
  );
};

export default About;
