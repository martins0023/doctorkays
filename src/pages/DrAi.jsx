import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import logo from '../assets/logo.png'; // Adjust the path as needed
// import avatar from '../assets/avatar.png'; // Adjust the path as needed
// import menuIcon from '../assets/menu-icon.png'; // Adjust the path as needed
import Navbar from "../components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { aivoice } from "../assets";
import { aivoicestatic } from "../assets";
import { north_east } from "../assets";
import { northeastwhite } from "../assets";

const DrAi = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center bg-[#F9F5FF]"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <Navbar />

      <div className="flex flex-col items-center mt-10 p-4">
        <h1 className="text-3xl font-bold">Doctor AI</h1>
        <img
          src={aivoicestatic}
          alt="AI Avatar"
          className="w-[140px] h-[140px] rounded-full mt-5"
        />
        <p className="mt-5 text-center text-gray-600 font-montserrat font-medium text-[16px]">
          <Typewriter
            words={['Hola',
                'Bonjour',
                'Hallo',
                'Ẹ n lẹ', 'Hello']}
            loop={false}
            cursor
          />
          , how can I help you today?
        </p>

        <div className="mt-5 w-full">
          <div className="flex flex-col gap-4">
            <button className="flex justify-between items-center w-full p-4 border border-primary rounded-lg hover:bg-purple-100">
              How often should I take water before going to bed?
              <img src={north_east} className="w-[21.35px] h-[21.35px]" />
            </button>
            <button className="flex justify-between items-center w-full p-4 border border-primary rounded-lg hover:bg-purple-100">
              Some guidelines for a pregnant woman
              <img src={north_east} className="w-[21.35px] h-[21.35px]" />
            </button>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="flex items-center border border-primary rounded-full p-2">
            <input
              type="text"
              placeholder="Enter your message"
              className="flex-grow px-4 py-2 rounded-full outline-none"
            />
            <button className="bg-primary text-white p-2 rounded-full">
              <img src={northeastwhite} className="w-[21.35px] h-[21.35px]" />
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-gray-600 text-sm">
          Please contact your <span className="text-primary">doctor</span>{" "}
          before taking any recommended medications.
        </p>
      </div>
    </motion.div>
  );
};

export default DrAi;
