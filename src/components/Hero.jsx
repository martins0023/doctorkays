import React from "react";
import Button from "./Button";
import { bghomesvg } from "../assets";
import { useNavigate } from "react-router-dom";
import { fadeIn, slideInFromRight, slideInFromTop } from "./animations"; // Reuse the fadeIn animation
import { motion } from "framer-motion";

const Hero = ({
  backgroundImage,
  text,
  className,
  height,
  width,
  marginTop,
}) => {
  const navigate = useNavigate();

  const handleConsultNav = () => {
    navigate("/consultation");
  };

  // Framer Motion animation variants for the text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Split the text into words or letters
  const words = text.split(" ");
  return (
    <motion.div
      variants={slideInFromRight}
      className={`relative h-[329px] bg-cover bg-center w-full`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height || "329px",
      }}
    >
      <div
        className={`flex flex-col items-start justify-start text-left p-5 mt-[100px] text-white ${className}`}
        style={{
          marginTop: marginTop || "100px", // Dynamically set marginTop
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[30px] font-bold font-poppins flex flex-col gap-[-10px]"
        >
          <motion.p variants={slideInFromRight}>{text}</motion.p>
        </motion.div>
        <p className="font-poppins text-[12px] font-medium">
          chat with us today we are available for you
        </p>
        <Button
          text="Book a consultation"
          onClick={handleConsultNav}
          className="bg-primary mt-4 font-bold text-[16px] rounded-md border-none"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
