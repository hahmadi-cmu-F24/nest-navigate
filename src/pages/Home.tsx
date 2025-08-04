import React, { useState } from 'react';
import '../style/Home.css';
import { FaQuestionCircle } from "react-icons/fa";

const widgets = [
  { id: 1, label: 'Read', image: '/read.png' },
  { id: 2, label: 'Watch', image: '/watch.webp' },
  { id: 3, label: 'Take Quiz', image: '/quiz.jpeg' },
  { id: 4, label: 'Create Content', image: '/house.png' },
];

const Home: React.FC = () => {
  const [clickedId, setClickedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setClickedId(id);
    setTimeout(() => setClickedId(null), 400); // animation duration matches CSS
  };

  return (
    <div className="p-6 max-w-7.5xl mx-auto mb-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Nest Navigate</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        
        {widgets.map((widget) => (
          <div key={widget.id} className="text-center">
            <img
              src={widget.image}
              alt={widget.label}
              onClick={() => handleClick(widget.id)}
              className={`w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${
                clickedId === widget.id ? 'shake' : ''
              }`}
            />
            <p className="mt-2 font-medium text-lg">{widget.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
