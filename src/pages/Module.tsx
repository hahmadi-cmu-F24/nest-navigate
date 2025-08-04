// src/pages/ModulePage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Lesson {
  id: string;
  title: string;
}

const lessons: Lesson[] = [
  { id: 'lesson1', title: 'Lesson 1: "What is a Home Inspection?"' },
  { id: 'lesson2', title: 'Lesson 2: "Types of Inspections"' },
  { id: 'lesson3', title: 'Lesson 3: "Red Flags to Watch For"' },
];

const ModulePage: React.FC = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    setCompletedLessons(stored);
  }, []);

  const isCompleted = (id: string) => completedLessons.includes(id);

  const nextLesson = lessons.find((lesson) => !isCompleted(lesson.id)) || lessons[0];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Understanding Home Inspections</h1>

      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className="flex justify-between items-center border p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-2">
              {isCompleted(lesson.id) && (
                <span className="text-green-500 text-xl">✅</span>
                )}
              <Link to={`/Lesson/${lesson.id}`} className="text-blue-600 hover:underline font-medium">
                {lesson.title}
              </Link>

            </div>
            <div className="flex items-center gap-1 text-yellow-500 font-semibold">
              <img src="/coin.jpeg" alt="coin" className="w-5 h-5" />
              +50
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center mt-10">
        <Link
          to={`/Lesson/${nextLesson.id}`}
          className="inline-block px-8 py-3 bg-green-600 text-white text-lg rounded hover:bg-green-700 transition"
        >
          {completedLessons.length === 0 ? 'Start Module' : 'Continue Module'}
        </Link>
      </div>
    </div>
  );
};

export default ModulePage;
