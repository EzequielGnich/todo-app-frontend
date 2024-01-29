import React from "react";
import { Tabs } from "antd";
import { tabs } from "../constants";

const onChange = (key: string) => {
  console.log(key);
};

const AuthTabs: React.FC = () => (
  <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
);

export default AuthTabs;
