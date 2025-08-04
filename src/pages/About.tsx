import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center pt-20 text-center px-6">
      <img
        src="/nest_navigate_logo.jpeg"
        alt="Nest Navigate Logo"
        className="w-24 h-24 mb-6"
      />
      <h2 className="text-2xl font-bold mb-4">About This App</h2>
      <p className="max-w-xl">
        Nest Navigate is an education-focused PropTech platform built to help future homeowners, especially first‑time buyers, gain confidence through step‑by‑step learning, smart rewards, and personalized support.
      </p>
      <br></br>
      <Link
        to="https://www.nestnavigate.com"
        className="text-blue-600 hover:underline font-medium"
      >
        Official Website →
      </Link>
    </div>
  );
};

export default About;
