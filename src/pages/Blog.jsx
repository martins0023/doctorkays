import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { bgblog } from "../assets"

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero backgroundImage={bgblog} text="Latest Blog Delve Deeper Into Our Writing Collection" />
      <main className="flex-grow">
        <div className="mt-4 gap-3 flex flex-col p-4">
          <hr className="bg-primary w-[80px] h-[4px]" />
          <p className="font-semibold text-[14px] font-poppins">
            Our Trusted Partner & our proud Investor around the globe
          </p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
