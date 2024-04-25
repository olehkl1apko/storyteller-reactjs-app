import { IMenuItem } from "@/modules";
import { Menu } from "antd";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuGroupProps {
  items: IMenuItem[];
}

export const MenuGroup: FC<MenuGroupProps> = ({ items }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location.pathname]);

  return (
    <Menu
      className="menu"
      mode="vertical"
      onClick={(item) => {
        navigate(item.key);
      }}
      selectedKeys={[selectedKeys]}
      items={items}
    />
  );
};
