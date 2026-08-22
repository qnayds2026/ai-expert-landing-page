export interface CourseSpec {
  label: string;
  value: string;
  subtext?: string;
  iconName: string;
}

export interface ModuleItem {
  id: number;
  number: number;
  title: string;
  category: 'Fundamentals' | 'Creative Media' | 'Web & Tech' | 'Digital Business';
  description?: string;
  topics: string[];
  practicalProject: string;
  keyTools: string[];
  estimatedHours: string;
  isCapstone?: boolean;
}

export interface LearningStep {
  step: number;
  action: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface CareerRole {
  title: string;
  category: string;
  description: string;
  averageRate: string;
  demandLevel: 'High' | 'Very High' | 'Explosive';
  coreSkills: string[];
  deliverable: string;
}

export interface StudentOutcome {
  id: number;
  title: string;
  category: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Program Format' | 'Requirements' | 'Support & Mentoring' | 'Career & Business';
}
