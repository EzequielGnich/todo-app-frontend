import { ConfigProvider, theme } from "antd";
import { ReactQueryProvider } from "./config/react-query";
import AppRoutes from "./routes";

function App() {
  return (
    <ReactQueryProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <AppRoutes />
      </ConfigProvider>
    </ReactQueryProvider>
  );
}

export default App;
