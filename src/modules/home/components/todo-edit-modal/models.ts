import { Dispatch, SetStateAction } from "react";
import { Todo } from "../todos-content/models";

export interface TodoEditModalProps {
  selectedTodo: Todo | null;
  setSelectedTodo: Dispatch<SetStateAction<Todo | null>>;
}
