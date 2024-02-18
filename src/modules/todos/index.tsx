import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Spin } from "antd";
import { useState } from "react";
import Typography from "../../shared/typography";
import { ColorVariants } from "../../shared/typography/models";
import { useGetAllTodos } from "./hooks";
import { Todo, TodoStatus } from "./models";
import "./styles.scss";
import { TodoEditModal } from "./todo-edit-modal";

const TodoSection: React.FC<{ status: string; todos: Todo[] }> = ({
  status,
  todos,
}) => {
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  return (
    <div className="todo-section-container" key={status}>
      <Typography tag="h2" color={ColorVariants.BLACK_07}>
        {status}
      </Typography>
      <div className="todo-section-container__cards-wrapper">
        {todos.map((todo) => (
          <Card
            className="todo-section-container__cards-wrapper__card"
            key={todo.id}
            hoverable
          >
            <Typography
              color={ColorVariants.BLACK_07}
              textTransform="uppercase"
              fontWeight={600}
              lineHeight={1.2}
              fontSize={14}
              tag="h3"
            >
              {todo.title}
            </Typography>

            <Typography
              color={ColorVariants.BLACK_05}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={12}
              tag="p"
            >
              {todo.content}
            </Typography>

            <div className="todo-section-container__cards-wrapper__card__buttons_container">
              <Button onClick={() => setSelectedTodo(todo)}>
                {<EditOutlined />}
              </Button>
              <Button danger>
                <DeleteOutlined />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <TodoEditModal
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
    </div>
  );
};
interface FetchProps<T> {
  children: (data: T) => React.ReactNode;
}

const Fetch = <T,>({ children }: FetchProps<T>) => {
  const { data, error, status, isLoading } = useGetAllTodos();

  if (isLoading) return <Spin size="large" />;

  if (status === "error") return <div>Error: {error?.message}</div>;

  return <div className="fetch-container">{children(data)}</div>;
};

export default function TodosContent() {
  return (
    <div>
      <Fetch<Record<TodoStatus, Todo[]> | undefined>>
        {(data) =>
          data &&
          Object.entries(data).map(([status, todos]) => (
            <TodoSection key={status} status={status} todos={todos} />
          ))
        }
      </Fetch>
    </div>
  );
}
