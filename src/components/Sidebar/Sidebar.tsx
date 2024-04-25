import { FC, Fragment } from "react";

import "./styles.css";
import { menuGroups } from "@/constants";
import { MenuGroup } from "./MenuGroup";

interface SidebarProps {
  isSidebarOpen: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <section className={`menu-container ${isSidebarOpen ? "open" : ""}`}>
      {menuGroups.map((menuItem, idx) => {
        return (
          <Fragment key={idx}>
            <div className="divider" />
            <MenuGroup items={menuItem} />
          </Fragment>
        );
      })}
    </section>
  );
};
