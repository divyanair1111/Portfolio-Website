import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8">Contact Me</h2>
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          {/* Hidden input to enable Netlify form handling */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              className="w-full px-3 py-2 border rounded-lg text-black" 
              id="name" 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="w-full px-3 py-2 border rounded-lg text-black" 
              id="email" 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea 
              className="w-full px-3 py-2 border rounded-lg text-black" 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300" 
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
