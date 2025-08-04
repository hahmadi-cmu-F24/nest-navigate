// src/constants/quizData.ts

export interface QuizQuestion {
  lessonId: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    lessonId: 'lesson1',
    question: 'What is the purpose of a home inspection?',
    options: [
      'To determine the market value of the home',
      'To assess the safety and quality of a property',
      'To perform renovations',
      'To get insurance approval',
    ],
    correctIndex: 1,
  },
  {
    lessonId: 'lesson2',
    question: 'What does a general home inspection typically cover?',
    options: [
      'Only cosmetic features',
      'Just the foundation',
      'All major systems and components',
      'Only plumbing and electrical',
    ],
    correctIndex: 2,
  },
  {
    lessonId: 'lesson3',
    question: 'Which of the following is a common inspection red flag?',
    options: [
      'Fresh paint',
      'Modern kitchen',
      'Water damage',
      'New windows',
    ],
    correctIndex: 2,
  },
];
