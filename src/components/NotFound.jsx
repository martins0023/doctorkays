import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-[18px] mt-4">
          Oops! The page you are looking for does not exist, It's from our end. We're working on it.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primarydark transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
