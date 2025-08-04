import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 max-h-40 overflow-hidden">
      <img
        src="/nest_navigate_cover.png"
        alt="Footer"
        className="w-full object-cover object-center"
      />
    </footer>
  );
};

export default Footer;
