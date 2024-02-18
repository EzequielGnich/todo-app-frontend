import { Todo, TodoStatus } from "./models";

export const splitTodosByStatus = (todos?: Todo[]) => {
  return todos?.reduce(
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
