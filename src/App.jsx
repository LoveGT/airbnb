import React, { memo } from "react";
import {  useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import useScrollTop from "./hooks/useScrollTop";

export default memo(function App() {
  useScrollTop() // 切换页面回到顶部
  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});
