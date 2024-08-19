import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-black bg-opacity-90 text-white py-4 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-wide">Divya Nair</h1>
        <nav className="space-x-8">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
