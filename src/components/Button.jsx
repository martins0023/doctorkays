import React from 'react';

const Button = ({ text, onClick, className, img }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded flex items-center justify-center gap-3 ${className}`}
    >
      <span>{text}</span>
      {img && <span>{img}</span>} {/* Conditionally render the icon */}
    </button>
  );
};

export default Button;
