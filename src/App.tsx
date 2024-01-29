import { RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { router } from "./app-routes";
import { ReactQueryProvider } from "./config/react-query";

function App() {
  return (
    <ReactQueryProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </ReactQueryProvider>
  );
}

export default App;
