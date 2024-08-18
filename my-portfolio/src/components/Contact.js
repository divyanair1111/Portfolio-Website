import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="w-full px-3 py-2 border rounded-lg" id="name" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="w-full px-3 py-2 border rounded-lg" id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="w-full px-3 py-2 border rounded-lg" id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
