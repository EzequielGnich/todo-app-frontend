export const GET_ALL_TODOS = "GET_ALL_TODOS";

export enum TodoStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  DELETED = "DELETED",
}

export interface Todo {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  userId: string;
  status: TodoStatus;
}
