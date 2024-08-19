import React from 'react';

const Skills = () => {
  const skills = ['Python', 'Java', 'JavaScript', 'ReactJS', 'Flask', 'PHP', 'CSS', 'HTML', 'MySQL', 'Tailwind CSS', 'Kivy','Git'];

  return (
    <section id="skills" className="bg-black py-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-800 px-4 py-2 rounded-lg text-lg font-semibold shadow-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
