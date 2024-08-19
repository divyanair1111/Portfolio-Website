import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Make sure to install react-icons if not already

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Divya Nair</h2>
          <p>A passionate software developer focused on creating intuitive and impactful digital experiences.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/divyanair1111" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/divyaradhakrishnannair1111/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:divyaradhakrishnannair@gmail.com" className="text-white hover:text-gray-400 transition-colors duration-200">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Divya Nair. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
