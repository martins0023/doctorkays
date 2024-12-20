import React from 'react';
import Button from './Button';
import { bghomesvg } from "../assets";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[329px] bg-cover bg-center" style={{ backgroundImage: `url(${bghomesvg})` }}>
      <div className="flex flex-col items-start justify-start text-left p-5 mt-[55px] text-white ">
        <Button text="Book a consultation" onClick={() => {}} className="bg-primary mt-4 font-bold text-[16px] rounded-md" />
        <div className="text-[30px] font-bold font-poppins flex flex-col gap-[-10px]">
        <p>
          Expert Health
        </p>
        <p>
          for personalised
        </p >
        <p>
          Solutions
        </p>
        </div>
        <p className="font-poppins text-[12px] font-medium">chat with us today we are available for you</p>
      </div>
    </div>
  );
};

export default Hero;
