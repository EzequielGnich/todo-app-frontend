import { Button, Card, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import { useGetAllTodos } from "./hooks";
import { Todo, TodoStatus } from "./models";

const TodoSection: React.FC<{ status: string; todos: Todo[] }> = ({
  status,
  todos,
}) => {
  return (
    <div key={status}>
      <h2>{status}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todos.map((todo) => (
          <Card
            hoverable
            style={{ width: 160, marginBottom: 16 }}
            key={todo.id}
          >
            <span>{todo.status}</span>

            <Meta title={todo.title} description={todo.content} />

            <div style={{ marginTop: 10 }}>
              <Button type="primary">Edit</Button>
              <Button type="primary" danger>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
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

  return <>{children(data)}</>;
};

export default function TodosContent() {
  return (
    <div>
      <Fetch<Record<TodoStatus, Todo[]> | undefined>>
        {(data) =>
          data &&
          Object.entries(data).map(([status, todos]) => (
            <TodoSection status={status} todos={todos} />
          ))
        }
      </Fetch>
    </div>
  );
}
