import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Spin } from "antd";

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
