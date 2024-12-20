import React from 'react';
import { menu, logo } from "../assets";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-primary text-white p-4 flex justify-between items-center w-full">
            <div className="text-xl font-bold">
                <img src={logo} className="w-[71px] h-[49px]" />
            </div>
            <div>
                <div className="bg-white w-[34px] h-[34px] flex justify-center items-center rounded-md">
                    <img src={menu} className="w-[30px] h-[30px]" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
