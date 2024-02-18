import { useMutation, useQuery } from "@tanstack/react-query";
import { isNull, isUndefined } from "lodash";
import { TEN_MINUTES } from "../../../../config/constants";
import { queryClient } from "../../../../config/react-query/constants";
import { splitTodosByStatus } from "./functions";
import { GET_ALL_TODOS, Todo } from "./models";
import { getAllTodos, updateTodo } from "./services";

export const useGetAllTodos = () => {
  const { data: todos, ...args } = useQuery({
    queryKey: [GET_ALL_TODOS],
    queryFn: getAllTodos,
    staleTime: TEN_MINUTES,
  });

  return {
    data: splitTodosByStatus(todos),
    ...args,
  };
};

export const useGetEditTodo = () => {
  const { mutate: handleEditTodo, ...mutations } = useMutation({
    mutationFn: updateTodo,
    onSuccess: (data, variables) => {
      queryClient.setQueryData<Todo[] | undefined>(
        [GET_ALL_TODOS],
        (cachedData) => {
          const todoIndex = cachedData?.findIndex(
            (todo) => todo.id === variables.todoId
          );

          if (isUndefined(todoIndex) || isNull(todoIndex) || todoIndex === -1) {
            return cachedData;
          }

          cachedData?.splice(todoIndex, 1, data);

          return cachedData;
        }
      );
    },
  });

  return {
    handleEditTodo,
    ...mutations,
  };
};
