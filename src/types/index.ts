export type UserRole = 'OWNER' | 'ADMIN' | 'EMPLOYEE';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Project {
  id: string;
  name: string;
  budget: number;
  spent: number;
  adminId: string;
  teamMembers: string[];
}

export interface Expense {
  id: string;
  projectId: string;
  userId: string;
  amount: number;
  category: string;
  description: string;
  date: Date;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  attachmentUrl?: string;
}

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Projects: undefined;
  ProjectDetails: { projectId: string };
  NewExpense: { projectId: string };
  ExpenseDetails: { expenseId: string };
  TeamManagement: { projectId: string };
  Reports: undefined;
};