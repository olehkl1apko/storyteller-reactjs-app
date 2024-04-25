import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout: FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData === null) {
      navigate("/login");
    } else {
      const userObj = JSON.parse(userData);
      setUsername(userObj.username);
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        username={username}
      />
      <div className="flex flex-1">
        {isSidebarOpen && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
