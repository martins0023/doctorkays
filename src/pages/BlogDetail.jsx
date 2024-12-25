import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stayintouch from "../components/Stayintouch";
import { keyboard_backspace } from "../assets";
import { navigate_before } from "../assets";
import { stayintouch } from "../assets";
import BlogNotFound from "../components/BlogNotFound";

const BlogDetail = () => {
  const { id } = useParams(); // Get the ID from the route
  const location = useLocation();
  const blog = location.state; // Access blog data from state
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (!blog) {
    return (
      <div className="">
        <BlogNotFound />
      </div>
    ); // Fallback in case state is missing
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4">
        <div onClick={handleBack} className="flex flex-row gap-2 items-center cursor-pointer">
          <img src={navigate_before} className="w-8 h-8" />
          <p className="font-montserrat font-semibold text-black text-[18px]">Back</p>
        </div>

        <div className="mt-3 ">
          <div className="flex justify-center">
            <p className="text-xs text-white font-semibold font-montserrat rounded-full bg-primary items-center justify-center flex justify-items-center p-2 w-fit ">
              #{blog.category}
            </p>
          </div>

          <h1 className="text-2xl font-bold text-black mt-3">{blog.title}</h1>
          <div className="mt-1 flex row justify-between">
            <p className="text-sm font-medium font-montserrat text-black">{`${blog.date} • ${blog.readTime}`}</p>
            <p className="text-sm font-medium font-montserrat text-black">By Doctor Kays</p>
          </div>

          <img
            src={blog.imgSrc}
            alt={blog.title}
            className="w-full h-[280.48px] object-cover mt-4 rounded-2xl"
          />
          <p className="mt-4 text-black">{blog.description}</p>
        </div>
      </div>

      {/* newsletter */}
      <div className="bg-[#F9F5FF] p-4">
        <div className="flex pt-5 items-center justify-center">
          <img src={stayintouch} alt="stay in touch" />
        </div>
        <p className="font-montserrat text-[14px] text-black text-center font-medium mb-5">
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
