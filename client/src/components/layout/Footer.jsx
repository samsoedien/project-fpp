import React from 'react';
import PrivacyPolicy from '../other/PrivacyPolicy';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Samsoedien
      <ul className="list-unstyled">
        <li>Footer Link</li>
      </ul>
      <ul className="list-inline">
        <li className="list-inline-item"><a href="">Terms of Service</a></li>
        <li className="list-inline-item"><PrivacyPolicy /></li>
        <li className="list-inline-item"><a href="">Cookie Policy</a></li>
      </ul>
    </footer>
  );
};

