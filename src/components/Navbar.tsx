import Logo from "../assets/logo.svg";
import BellIcon from "../assets/bell-icon.svg";
import BudgetIcon from "../assets/budget-icon.svg";
import ChatIcon from "../assets/chat-icon.svg";
import AvatarIcon from "../assets/avatar-icon.svg";
import { FaCalendarDays } from "react-icons/fa6";
import CalendarView from "./CalendarView";
import { useState } from "react";

const Navbar = () => {
  const [isCalendarShown, setIsCalendarShown] = useState(false);
  return (
    <>
      <nav className="bg-[#191919] border  py-7 px-19 flex w-full items-center justify-between fixed top-0 left-0 right-0">
        <img src={Logo} alt="logo" className="cursor-pointer" />
        <div className="flex items-center justify-end gap-6 w-full">
          <img src={BellIcon} alt="" className="cursor-pointer" />
          <img src={BudgetIcon} alt="" className="cursor-pointer" />
          <FaCalendarDays
            color="white"
            size={25}
            onClick={() => setIsCalendarShown(!isCalendarShown)}
            className="cursor-pointer"
          />
          <img src={ChatIcon} alt="" className="cursor-pointer" />
          <img src={AvatarIcon} alt="" className="cursor-pointer" />
        </div>
      </nav>
      <CalendarView isOpen={isCalendarShown} setIsOpen={setIsCalendarShown} />
    </>
  );
};

export default Navbar;
