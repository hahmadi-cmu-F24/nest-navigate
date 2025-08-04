// src/constants/lessonData.ts

export interface LessonContent {
  id: string;
  title: string;
  text: string;
  image: string;
}

export const lessons: LessonContent[] = [
  {
    id: 'lesson1',
    title: 'Lesson 1: "What is a Home Inspection?"',
    text: 'A home inspection is a safety and quality assessment on a property that is going to be sold. The inspector examines the structural aspects of the home, heating and cooling systems, plumbing, electrical work, water and sewage to ensure they are all functioning properly....',
    image: '/inspection.jpeg',
  },
  {
    id: 'lesson2',
    title: 'Lesson 2: "Types of Inspections"',
    text: 'Home inspections can be broadly categorized into general and specialized inspections. A general home inspection covers the major systems and components of a house, like the roof, foundation, plumbing, electrical, and HVAC systems. Specialized inspections focus on specific issues like pests, radon, mold, lead-based paint, asbestos, or structural concerns...',
    image: '/inspection_type.png',
  },
  {
    id: 'lesson3',
    title: 'Lesson 3: "Red Flags to Watch For"',
    text: 'Home inspections can uncover a variety of issues that may cause a home to fail inspection. Common failures include problems with the foundation, roof, plumbing, electrical system, and HVAC. Other issues like pest infestations, mold, water damage, and structural deficiencies can also lead to inspection failure...',
    image: '/red_flags.jpeg',
  },
];
