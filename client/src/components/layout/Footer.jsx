import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Samsoedien
      <ul className="list-unstyled">
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </footer>
  );
};
