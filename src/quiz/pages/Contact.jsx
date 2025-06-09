import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">Feel free to reach out to us through any of the following channels:</p>
        
        <div className="mb-4">
          <strong>Email:</strong> <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
        </div>

        <div className="mb-4">
          <strong>WhatsApp:</strong> 
          <a href="https://wa.me/1234567890" className="text-green-500" target="_blank" rel="noopener noreferrer">
            Chat with us on WhatsApp
          </a>
        </div>

        <div className="mb-4">
          <strong>Instagram:</strong> 
          <a href="https://www.instagram.com/example" className="text-pink-500" target="_blank" rel="noopener noreferrer">
            @example on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
