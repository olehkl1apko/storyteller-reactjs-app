import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
