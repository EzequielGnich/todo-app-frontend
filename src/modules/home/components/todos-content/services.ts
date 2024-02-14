import { api } from "../../../../config/api";
import { Todo } from "./models";

export const getAllTodos = async () => {
  const response = await api.get<Todo[]>("/todos");

  return response?.data;
};
