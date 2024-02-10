import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { ReactQueryProvider } from "./config/react-query";
import AppRoutes from "./routes";

import "./shared/i18n";

function App() {
  return (
    <Suspense i18nIsDynamicList fallback="">
      <ReactQueryProvider>
        <ConfigProvider>
          <AppRoutes />
        </ConfigProvider>
      </ReactQueryProvider>
    </Suspense>
  );
}

export default App;
