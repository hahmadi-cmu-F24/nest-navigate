import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizQuestions } from '../constants/quizData';
import ProgressTracker from '../components/ProgressTracker';
import { useNavigate } from 'react-router-dom';

const QuizPage: React.FC = () => {
  const { id } = useParams();
  const question = quizQuestions.find((q) => q.lessonId === id);
    const navigate = useNavigate(); 

  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [coinVisible, setCoinVisible] = useState(false);

  if (!question) {
    return <div className="p-6 text-center text-red-600">No quiz found for this lesson.</div>;
  }

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);

    if (selected === question.correctIndex) {
      // Save lesson ID as completed
      const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
      if (!completed.includes(id)) {
        completed.push(id);
        localStorage.setItem('completedLessons', JSON.stringify(completed));

        // Add 50 coins
        const coins = Number(localStorage.getItem('coins') || '0') + 50;
        localStorage.setItem('coins', coins.toString());
        window.dispatchEvent(new Event('coinsUpdated'));

      }

      // Trigger coin animation
      setCoinVisible(true);
      const coinSound = new Audio('/coin.mp3'); // add sound file to public folder
      coinSound.play();

      setTimeout(() => {
        setCoinVisible(false);
      }, 2000); // hide coin after 2s
    }
  };

  const formatLessonTitle = (id: string | undefined) => {
    if (!id) return '';
    const num = id.replace(/lesson/i, '');
    return `Lesson ${num}`;
  };

  return (
    <div className="relative max-w-2xl mx-auto p-6 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Quiz for {formatLessonTitle(id)}</h2>
      <p className="mb-6 text-lg">{question.question}</p>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctIndex;
          const isSelected = selected === index;
          const feedbackStyle =
            submitted && isSelected
              ? isCorrect
                ? 'bg-green-200'
                : 'bg-red-200'
              : '';

          return (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`block w-full text-left px-4 py-2 rounded border ${feedbackStyle} ${
                isSelected ? 'border-blue-500' : 'border-gray-300'
              } hover:bg-gray-100 transition`}
              disabled={submitted}
            >
              {option}
            </button>
          );
        })}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      )}

      {submitted && (
        <button
        onClick={() => navigate('/modules/understanding-home-inspections')}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Module
      </button>
      )
      }

      {submitted && (
        <div className="mt-4 text-lg font-semibold">
          {selected === question.correctIndex
            ? '✅ Correct!'
            : `❌ Incorrect. The correct answer is: ${question.options[question.correctIndex]}`}
        </div>
      )}

      {/* Coin animation */}
      {coinVisible && (
        <img
          src="/coin.jpeg"
          alt="Coin"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-20 animate-bounce z-50"
        />
      )}

      <ProgressTracker lessonId={id!} />

    </div>
  );
};

export default QuizPage;
