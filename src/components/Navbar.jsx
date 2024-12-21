import React, { useState } from "react";
import { menu, logo } from "../assets";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-primary text-white p-4 flex justify-between items-center w-full">
        <div className="text-xl font-bold">
          <img src={logo} alt="logo" className="w-[71px] h-[49px]" />
        </div>
        <div>
          <div
            onClick={toggleSidebar}
            className="bg-white w-[34px] h-[34px] flex justify-center items-center rounded-md cursor-pointer"
          >
            <img src={menu} alt="menu" className="w-[30px] h-[30px]" />
          </div>
        </div>
      </nav>
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </>
  );
};

export default Navbar;
