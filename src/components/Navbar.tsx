import Logo from "../assets/logo.svg";
import BellIcon from "../assets/bell-icon.svg";
import BudgetIcon from "../assets/budget-icon.svg";
import ChatIcon from "../assets/chat-icon.svg";
import AvatarIcon from "../assets/avatar-icon.svg";
import { FaCalendarDays } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-[#191919] border  py-7 px-19 flex w-full items-center justify-between">
      <img src={Logo} alt="logo" />
      <div className="flex items-center justify-end gap-6 w-full">
        <img src={BellIcon} alt="" />
        <img src={BudgetIcon} alt="" />
        <FaCalendarDays color="white" size={25} />
        <img src={ChatIcon} alt="" />
        <img src={AvatarIcon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
