import { Menu } from "antd";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./styles.css";
import {
  Schedule,
  Ads,
  Apps,
  Analytics,
  CMSUsers,
  EngagementUnits,
  Roles,
  Stories,
  UserGuide,
} from "@/assets/svg";

interface SidebarProps {
  isSidebarOpen: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location.pathname]);

  return (
    <section className={`menu-container ${isSidebarOpen ? "open" : ""}`}>
      <Menu
        className="menu"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Schedule",
            icon: <Schedule />,
            key: "/schedule",
          },
          {
            label: "Analytics",
            icon: <Analytics />,
            key: "/analytics",
          },
          {
            label: "Stories",
            icon: <Stories />,
            key: "/stories",
          },
          {
            label: "EngagementUnits",
            icon: <EngagementUnits />,
            key: "/units",
          },
          {
            label: "Ads",
            icon: <Ads />,
            key: "/ads",
          },
          {
            label: "CMSUsers",
            icon: <CMSUsers />,
            key: "/users",
          },
          {
            label: "Roles",
            icon: <Roles />,
            key: "/roles",
          },
          {
            label: "Apps",
            icon: <Apps />,
            key: "/apps",
          },
          {
            label: "UserGuide",
            icon: <UserGuide />,
            key: "/guide",
          },
        ]}
      />
    </section>
  );
};
