export const SURVEY_QUESTIONS = [
  {
    id: '1',
    question: "What is React primarily used for?",
    type: 'multiple-choice',
    options: ["Backend development", "Building user interfaces", "Database management"],
    correctAnswer: "Building user interfaces",
    points: 25
  },
  {
    id: '2', 
    question: "Which hook is used for side effects in React?",
    type: 'multiple-choice',
    options: ["useState", "useEffect", "useContext"],
    correctAnswer: "useEffect",
    points: 25
  },
  {
    id: '3',
    question: "What is JSX?",
    type: 'multiple-choice', 
    options: ["A JavaScript library", "Syntax extension for JavaScript", "A database"],
    correctAnswer: "Syntax extension for JavaScript",
    points: 25
  },
  {
    id: '4',
    question: "Which company maintains React?",
    type: 'multiple-choice',
    options: ["Google", "Facebook", "Microsoft"],
    correctAnswer: "Facebook", 
    points: 25
  },
  {
    id: '5',
    question: "What is the virtual DOM in React?",
    type: 'multiple-choice',
    options: ["A real DOM element", "A lightweight copy of the real DOM", "A database object"],
    correctAnswer: "A lightweight copy of the real DOM",
    points: 25
  },
  {
    id: '6',
    question: "Which method is used to update state in React?",
    type: 'multiple-choice',
    options: ["setState", "updateState", "changeState"],
    correctAnswer: "setState",
    points: 25
  },
  {
    id: '7',
    question: "What is the purpose of keys in React lists?",
    type: 'multiple-choice',
    options: ["For styling", "To identify elements uniquely", "For routing"],
    correctAnswer: "To identify elements uniquely",
    points: 25
  },
  {
    id: '8',
    question: "Which hook is used for performance optimization?",
    type: 'multiple-choice',
    options: ["useMemo", "useEffect", "useState"],
    correctAnswer: "useMemo",
    points: 25
  },
  {
    id: '9',
    question: "What does React component return?",
    type: 'multiple-choice',
    options: ["HTML", "JSX", "CSS"],
    correctAnswer: "JSX",
    points: 25
  },
  {
    id: '10',
    question: "Which tool is commonly used with React for state management?",
    type: 'multiple-choice',
    options: ["Redux", "jQuery", "Express"],
    correctAnswer: "Redux",
    points: 25
  },
  {
    id: '11',
    question: "What is React Router used for?",
    type: 'multiple-choice',
    options: ["State management", "Navigation and routing", "API calls"],
    correctAnswer: "Navigation and routing",
    points: 25
  },
  {
    id: '12',
    question: "Which method is called after component renders?",
    type: 'multiple-choice',
    options: ["componentDidMount", "componentWillMount", "componentRender"],
    correctAnswer: "componentDidMount",
    points: 25
  },
  {
    id: '13',
    question: "What is the default port for React development server?",
    type: 'multiple-choice',
    options: ["3000", "8080", "5000"],
    correctAnswer: "3000",
    points: 25
  },
  {
    id: '14',
    question: "Which command creates a new React app?",
    type: 'multiple-choice',
    options: ["npx create-react-app", "npm init react-app", "react create app"],
    correctAnswer: "npx create-react-app",
    points: 25
  },
  {
    id: '15',
    question: "What are React Fragments used for?",
    type: 'multiple-choice',
    options: ["Grouping elements without extra nodes", "Styling components", "API calls"],
    correctAnswer: "Grouping elements without extra nodes",
    points: 25
  }
];

// Function to get 4 random questions
export function getRandomQuestions() {
  const shuffled = [...SURVEY_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}