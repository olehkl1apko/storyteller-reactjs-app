import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <div className="pagesWrapper">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
