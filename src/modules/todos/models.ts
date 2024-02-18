export const GET_ALL_TODOS = "GET_ALL_TODOS";

export enum TodoStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  DELETED = "DELETED",
}

export interface TodoDTO {
  title: string;
  content: string;
  status: TodoStatus;
}

export interface UpdateTodoPayload {
  todo: TodoDTO;
  todoId?: string;
}

export interface Todo extends TodoDTO {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  userId: string;
}
