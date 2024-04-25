import { FC, Fragment } from "react";

import "./styles.css";
import { menuGroups } from "@/constants";
import { MenuGroup } from "./MenuGroup";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <section className={`menu-container ${isSidebarOpen ? "open" : ""}`}>
      {menuGroups.map((menuItem, idx) => {
        return (
          <Fragment key={idx}>
            <div className="divider" />
            <MenuGroup items={menuItem} toggleSidebar={toggleSidebar} />
          </Fragment>
        );
      })}
    </section>
  );
};
