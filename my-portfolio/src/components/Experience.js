import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      title: 'Software Developer Intern @ TGI Group',
      date: 'July 2023 – September 2023',
      location: 'Lagos, Nigeria',
      description: [
        'Designed and developed an automated expenditure multi-level approval workflow system.',
        'Incorporated Python for backend logic, Git for version control, and a web technology stack including HTML, CSS, Bootstrap, and JavaScript for a seamless user experience.',
        'Collaborated with cross-functional teams to gather requirements, ensured the fulfilment of user needs, and presented project progress and results to both team members and management.',
        'Implemented data-driven decisions, contributing to the successful deployment in Microsoft Azure.',
      ],
    },
    // Add more experiences here
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="bg-gradient-to-r-gray text-white py-20"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Professional Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-6">
            <div
              className="flex justify-between items-center bg-navy-700 text-white p-4 rounded cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
              <div>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-sm">{experience.date}</p>
              </div>
              <div className="text-white">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {openIndex === index && (
              <div className="bg-navy-600 p-4 mt-2 rounded-md shadow-md">
                <p className="text-sm text-gray-400">{experience.location}</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  {experience.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
