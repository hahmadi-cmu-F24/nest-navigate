import React from 'react';

interface ProgressTrackerProps {
  lessonId: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ lessonId }) => {
  const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');

  const isQuizCompleted = completedLessons.includes(lessonId);

  return (
    <div className="flex items-center justify-center my-6">
      <div className="flex items-center space-x-4">
        {/* Step 1: Lesson Read */}
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-sm font-bold 
              bg-green-500">
            ✓
          </div>
          <span className="text-sm font-medium">Lesson</span>
        </div>

        {/* Connector Line */}
        <div className="w-10 h-1 bg-gray-300" />

        {/* Step 2: Quiz */}
        <div className="flex items-center space-x-2">
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-sm font-bold ${
              isQuizCompleted ? 'bg-green-500' : 'bg-gray-400'
            }`}
          >
            {isQuizCompleted ? '✓' : '2'}
          </div>
          <span className="text-sm font-medium">Quiz</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
