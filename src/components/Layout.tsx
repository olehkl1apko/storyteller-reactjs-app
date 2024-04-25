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
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <section
          className={`h-full w-full xs:bg-white opacity-0 ${
            isSidebarOpen ? "bg-black opacity-50" : "bg-white"
          }`}
        >
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Layout;
