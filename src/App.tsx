import { ConfigProvider } from "antd";
import { ReactQueryProvider } from "./config/react-query";
import AppRoutes from "./routes";

function App() {
  return (
    <ReactQueryProvider>
      <ConfigProvider>
        <AppRoutes />
      </ConfigProvider>
    </ReactQueryProvider>
  );
}

export default App;
