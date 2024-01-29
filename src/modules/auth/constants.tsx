import { TabsProps } from "antd";
import { SignInTab } from "./components/signin.tab";
import { SignUpTab } from "./components/signup.tab";

export const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: "Sign In",
    children: <SignInTab />,
  },
  {
    key: "2",
    label: "Sign Up",
    children: <SignUpTab />,
  },
];
