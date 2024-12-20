import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  img?: React.ReactNode; // Changed from string to React.ReactNode to accept JSX
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, img }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white py-2 px-4 rounded flex items-center justify-center gap-3 ${className}`}
    >
      <span>{text}</span>
      {img && <span>{img}</span>} {/* Conditionally render the icon */}
    </button>
  );
};

export default Button;
