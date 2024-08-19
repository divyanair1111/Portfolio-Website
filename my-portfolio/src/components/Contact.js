import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For Netlify Forms to work
    const form = e.target;
    const formData = new FormData(form);
    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => alert('Form successfully submitted'))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8">Contact Me</h2>
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-black"  // Ensure text color is black
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-black"  // Ensure text color is black
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg text-black"  // Ensure text color is black
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleChange}
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
