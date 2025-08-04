import React from 'react';
import { useParams } from 'react-router-dom';
import { lessons } from '../constants/lessonData';
import { Link } from 'react-router-dom';
import ProgressTracker from '../components/ProgressTracker';

const LessonPage: React.FC = () => {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) {
    return <div className="p-6 text-center text-red-600">Lesson not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <img
        src={lesson.image}
        alt={lesson.title}
        className="w-full h-auto rounded mb-6"
      />
      <p className="text-lg leading-relaxed">{lesson.text}</p>
        <Link
        to={`/Lesson/${lesson.id}/quiz`}
        className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
        Take Quiz
        </Link>
        <ProgressTracker lessonId={lesson.id} />
    </div>
  );
};

export default LessonPage;
