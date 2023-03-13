export interface NameStepFields {
  testName: string;
}

export interface QuestionsStepFields {
  questionsTest: QuestionItem[];
}

interface QuestionItem {
  id: number;
  image?: string;
  questionTitle: string;
  correctAnswer: string | string[];
  answers: string[];
}

export interface GradesFields {
  gradesTest: GradeItem[];
}

interface GradeItem {
  id: number;
  gradeName: string;
  from: string;
  to: string;
  placeholder?: string;
}
