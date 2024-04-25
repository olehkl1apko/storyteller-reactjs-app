import { FC } from "react";

import burgerMenu from "@/assets/images/burgerMenu.svg";
import close from "@/assets/images/close.svg";
import logoIcon from "@/assets/images/logoIcon.svg";
import logoName from "@/assets/images/logoName.svg";
import questionMark from "@/assets/images/questionMark.svg";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  username: string;
}

export const Header: FC<HeaderProps> = ({
  isSidebarOpen,
  toggleSidebar,
  username,
}) => {
  return (
    <header className="flex justify-between items-center py-3 px-4 xs:px-7">
      <div className="flex items-center gap-4 xs:gap-6">
        <button
          onClick={toggleSidebar}
          className="w-6 h-5 xs:hidden xs:w-0 xs:h-0"
        >
          {isSidebarOpen ? (
            <img src={close} alt="close" />
          ) : (
            <img src={burgerMenu} alt="close" />
          )}
        </button>
        <div className="flex items-center gap-3">
          <img src={logoIcon} alt="logo" />
          <img src={logoName} alt="logoName" />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img src={questionMark} alt="close" />
        <div className="flex items-center justify-center w-9 h-9 bg-[#103B8E] rounded-full">
          <span className="text-lg text-white">
            {username.substring(0, 2).toUpperCase()}
          </span>
        </div>
      </div>
    </header>
  );
};
