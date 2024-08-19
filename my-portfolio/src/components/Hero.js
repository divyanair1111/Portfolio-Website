import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <h1 className="text-8xl font-extrabold mb-4 animate-fade-in">Divya Nair</h1>
      <p className="text-2xl font-light mb-8">Web Developer / Software Engineer</p>
      <a href="#projects" className="mt-4 inline-block bg-transparent border-2 border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">
        View My Work
      </a>
    </section>
  );
};

export default Hero;
