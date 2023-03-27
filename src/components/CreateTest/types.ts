export interface NameStepFields {
  testName: string;
}

export interface QuestionsStepFields {
  testQuestions: QuestionItem[];
}

interface QuestionItem {
  id: number;
  image?: string;
  questionTitle: string;
  correctAnswer: string;
  answers: string[];
}

export interface GradesFields {
  testGrades: GradeItem[];
}

interface GradeItem {
  id: number;
  gradeName: string;
  from: string;
  to: string;
  placeholder?: string;
}
