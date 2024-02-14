import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useGetAllTodos } from "./hooks";

export default function TodosContent() {
  const { data } = useGetAllTodos();

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%",
        width: "35%",
      }}
    >
      <Row gutter={16}>
        {data?.map((item) => (
          <Col key={item.id} span={8}>
            <Card hoverable style={{ width: 160, marginBottom: 16 }}>
              {/* <span>{item.status}</span> */}

              <Meta title={item.title} description={item.content} />

              <div style={{ marginTop: 10 }}>
                <Button type="primary">Edit</Button>
                <Button type="primary" danger>
                  Delete
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
