import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const BlogNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-[18px] mt-4">
          Oops! The blog page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primarydark transition"
        >
          Go to Blog
        </button>
      </div>
    </div>
  )
}

export default BlogNotFound