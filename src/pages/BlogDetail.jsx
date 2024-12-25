import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stayintouch from "../components/Stayintouch";
import { keyboard_backspace } from "../assets";
import { navigate_before } from "../assets";
import { stayintouch } from "../assets";

const BlogDetail = () => {
  const { id } = useParams(); // Get the ID from the route
  const location = useLocation();
  const blog = location.state; // Access blog data from state

  if (!blog) {
    return <p>Blog post not found.</p>; // Fallback in case state is missing
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4">
        <div className="flex flex-row gap-3 items-center">
          <img src={navigate_before} className="w-8 h-8" />
          <p className="font-montserrat font-semibold text-[18px]">Back</p>
        </div>

        <div className="mt-5">
          <div className="flex justify-center">
            <p className="text-xs text-white font-semibold font-montserrat rounded-full bg-primary items-center justify-center flex justify-items-center p-2 w-fit ">
              #{blog.category}
            </p>
          </div>
          <div>
            <div>
          <h1 className="text-2xl font-bold mt-3">{blog.title}</h1>
          <p className="text-sm text-gray-500">{`${blog.date} • ${blog.readTime}`}</p>
          </div>
          <div>By Doctor Kays</div>
          </div>
          <img
            src={blog.imgSrc}
            alt={blog.title}
            className="w-full mt-4 rounded-lg"
          />
          <p className="mt-4">{blog.description}</p>
        </div>
      </div>
      {/* newsletter */}
      <div className="bg-[#F9F5FF] p-4">
        <div className="flex pt-5 items-center justify-center">
          <img src={stayintouch} alt="stay in touch" />
        </div>
        <p className="font-montserrat text-[14px] text-center font-medium mb-5">
          Stay connected to our community and never miss out on exciting
          updates.
        </p>

        <Stayintouch />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
