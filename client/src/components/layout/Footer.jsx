import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <span>Copyright &copy; {new Date().getFullYear()} Food Printing Platform</span>
      <br />
      <span>All rights reserved</span>
    </footer>
  );
};

export default Footer;
