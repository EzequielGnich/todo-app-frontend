import { useQuery } from "react-query";
import { TEN_MINUTES } from "../../../../config/constants";
import { GET_ALL_TODOS, Todo, TodoStatus } from "./models";
import { getAllTodos } from "./services";

const splitTodosByStatus = (todos: Todo[]) => {
  return todos.reduce(
    (acc, todo) => {
      acc[todo.status].push(todo);

      return acc;
    },
    {
      [TodoStatus.ACTIVE]: [],
      [TodoStatus.COMPLETED]: [],
      [TodoStatus.DELETED]: [],
    } as Record<TodoStatus, Todo[]>
  );
};

export const useGetAllTodos = () => {
  return useQuery(
    GET_ALL_TODOS,
    async () => {
      const todos = await getAllTodos();

      return splitTodosByStatus(todos);
    },
    {
      staleTime: TEN_MINUTES,
    }
  );
};
