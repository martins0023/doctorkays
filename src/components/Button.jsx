import React from 'react';
import { motion } from "framer-motion";
import { animateOnHover, pulse } from './animations';

const Button = ({ text, onClick, className, img }) => {
  return (
    <motion.button
      variants={pulse}
      onClick={onClick}
      className={`py-2 px-4 rounded flex items-center justify-items-center justify-center gap-3 ${className}`}
    >
      <span>{text}</span>
      {img && <span>{img}</span>} {/* Conditionally render the icon */}
    </motion.button>
  );
};

export default Button;
