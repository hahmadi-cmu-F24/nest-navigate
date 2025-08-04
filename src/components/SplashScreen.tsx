import React, { useEffect } from 'react';

interface Props {
  onFinish: () => void;
}

const SplashScreen: React.FC<Props> = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img
        src="/NestNavigate_logo.jpeg"
        alt="Logo"
        className="w-91 animate-fadeIn"
      />
    </div>
  );
};

export default SplashScreen;
