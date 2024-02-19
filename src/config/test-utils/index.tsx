import { render, RenderOptions } from "@testing-library/react";
import { ConfigProvider } from "antd";
import React, { ReactElement } from "react";
import { ReactQueryProvider } from "../react-query";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ConfigProvider>{children}</ConfigProvider>
    </ReactQueryProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
