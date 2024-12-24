import React from 'react';
import Button from './Button';
import { bghomesvg } from "../assets";
import { useNavigate } from 'react-router-dom';
import { fadeIn, slideInFromRight, slideInFromTop } from "./animations"; // Reuse the fadeIn animation
import { motion } from 'framer-motion';

const Hero = ({ backgroundImage, text }) => {
  const navigate = useNavigate();

  const handleConsultNav = () => {
    navigate("/consultation")
  }
  return (
    <motion.div variants={slideInFromRight} className="relative h-[329px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-start justify-start text-left p-5 mt-[80px] text-white ">
        <Button text="Book a consultation" onClick={handleConsultNav} className="bg-primary mt-4 font-bold text-[16px] rounded-md" />
        <div className="text-[30px] font-bold font-poppins flex flex-col gap-[-10px]">
        <motion.p variants={slideInFromTop}>
          {text}
        </motion.p>
        </div>
        <p className="font-poppins text-[12px] font-medium">chat with us today we are available for you</p>
      </div>
    </motion.div>
  );
};

export default Hero;
