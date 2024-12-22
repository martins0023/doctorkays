import React from 'react';
import { logo, facebook, twitter, linkedin, instagram } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#F9F5FF]">
      <div className="mt-3 p-4">
        <img src={logo} alt="doctorkays" />
        <p className="text-black font-semibold text-[16px]">Doctorkays</p>
        <p className="mt-1 font-medium text-[16px] font-montserrat">Donec dui massa, varius a consequat at, ultrices a neque. Ut augue erat, dignissim ultricies bibendum sed, pharetra ut neque.</p>
      </div>

      {/* company */}
      <div className="p-4">
        <p className="font-semibold text-[18px] font-montserrat">Company</p>
        <hr className="bg-primary w-[63px] h-[4px]"/>

        <div className="mt-3 flex flex-col">
          <p className="cursor-pointer font-normal text-[16px] font-montserrat text-black">About us</p>
          <p className="cursor-pointer font-normal text-[16px] font-montserrat text-black">Contact</p>
        </div>
      </div>

      {/* products */}
      <div className="p-4">
        <p className="font-semibold text-[18px] font-montserrat">Products</p>
        <hr className="bg-primary w-[63px] h-[4px]"/>

        <div className="mt-3 flex flex-col">
          <p className="cursor-pointer font-normal text-[16px] font-montserrat text-black">Dr Ai</p>
          <p className="cursor-pointer font-normal text-[16px] font-montserrat text-black">Shops</p>
        </div>
      </div>

      {/* resources */}
      <div className="p-4">
        <p className="font-semibold text-[18px] font-montserrat">Resources</p>
        <hr className="bg-primary w-[63px] h-[4px]"/>

        <div className="mt-3 flex flex-col">
          <p className="cursor-pointer font-normal text-[16px] font-montserrat text-black">Blog</p>
          <p className="cursor-pointer font-normal text-[16px] font-montserrat text-black"> FAQs</p>
          <p className="cursor-pointer font-normal text-[16px] font-montserrat text-black">MOS</p>
          <p className="cursor-pointer font-normal text-[16px] font-montserrat text-black">Clinic Series</p>
        </div>
      </div>

      {/* social media icons */}
      <div className="p-4 flex flex-row gap-3">
        <img src={facebook} className="w-[25px] h-[25px]" alt="facebook" />
        <img src={twitter} className="w-[25x] h-[25px]" alt="twitter" />
        <img src={linkedin} className="w-[40px] h-[40px] pb-3" alt="linkedin" />
        <img src={instagram} className="w-[30px] h-[30px]" alt="instagram" />
      </div>

      <footer className="bg-primary text-white p-4 text-center">
        <div>© 2024 Drkays</div>
      </footer>
    </div>
  );
};

export default Footer;
