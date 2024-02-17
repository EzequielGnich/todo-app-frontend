import { Spin } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Suspense
        fallback={
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
