import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 text-center">
      <p>© {new Date().getFullYear()} Sketchify | Built with ❤️ by Shivang</p>
      <p className="text-sm mt-2">Powered by Flask + React + AI</p>
    </footer>
  );
};

export default Footer;
