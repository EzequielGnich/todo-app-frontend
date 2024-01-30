import { Button, Card, Input } from "antd";
import { useSignIn } from "../domains";
import { useState } from "react";

export const SignInTab: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { handleSignIn } = useSignIn();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Card
      title="Card title"
      bordered={false}
      style={{ width: 450, height: 300 }}
    >
      <div>
        <div>
          <span>Email</span>
          <Input onChange={handleNameChange} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password onChange={handlePasswordChange} />
        </div>
        <Button onClick={() => handleSignIn({ email, password })}>
          Sign In
        </Button>
      </div>
    </Card>
  );
};
