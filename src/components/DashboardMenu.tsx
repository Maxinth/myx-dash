import { dashMenuData } from "./data";
import { MdCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const DashboardMenu = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <header className="px-2 xl:px-19 max-w-[900px] overflow-x-auto lg:max-w-full lg:overflow-x-auto flex items-center gap-10 py-[15px] border-b border-b-[#F4F4F5]">
      {dashMenuData?.map((item, index) => (
        <div
          key={item.name}
          className={`flex items-center gap-[10.5px] py-[8px] px-[25px] rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${
            index === 0
              ? "bg-[#F5F5F5] font-semibold text-[#191919] hover:bg-[#e4e2e2]"
              : "font-normal hover:bg-[#f2efef]"
          }`}
        >
          <img src={item.icon.type} alt={item.name} />{" "}
          <span className="text-[#3D3D3D] text-sm">{item.name}</span>
        </div>
      ))}

      <div className="border w-full min-w-[300px] xl:min-w-auto border-[#E4E4E4] bg-[#F5F5F5] rounded-xl flex items-center gap-3 py-[10px] px-4 xl:flex-1 xl:ml-16">
        <FiSearch size={20} />
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="border-none outline-none w-full font-light text-sm"
          placeholder="Search listings, users here..."
        />
        {searchInput?.length > 0 ? (
          <MdCancel
            onClick={() => setSearchInput("")}
            className="cursor-pointer"
          />
        ) : null}
      </div>
    </header>
  );
};

export default DashboardMenu;
