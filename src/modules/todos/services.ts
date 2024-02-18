import { api } from "../../config/api";
import { Todo, UpdateTodoPayload } from "./models";

export const getAllTodos = async () => {
  const response = await api.get<Todo[]>("/todos");

  return response?.data;
};

export const updateTodo = async ({ todo, todoId }: UpdateTodoPayload) => {
  const response = await api.patch<Todo>(`/todos/${todoId}`, todo);

  return response?.data;
};
