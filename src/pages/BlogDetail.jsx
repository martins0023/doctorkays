import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stayintouch from "../components/Stayintouch";
import { keyboard_backspace } from "../assets";
import { navigate_before } from "../assets";
import {
  bgblog,
  north_east,
  clinicseries1,
  clinicseries2,
  clinicsection,
  clinicseries,
} from "../assets";
import { stayintouch } from "../assets";
import BlogNotFound from "../components/BlogNotFound";
import { pulse, slideInFromRight } from "../components/animations";

const dummyData = [
  {
    id: 1,
    category: "Blood Sugar",
    title: "Morbi mattis nisi id orci finibus egestas",
    date: "18 Dec 2024",
    readTime: "9 mins read",
    description:
      "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    imgSrc: clinicseries1,
  },
  {
    id: 2,
    category: "Pregnancy",
    title: "Morbi mattis nisi id orci finibus egestas",
    date: "18 Dec 2024",
    readTime: "9 mins read",
    description:
      "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    imgSrc: clinicseries2,
  },
  {
    id: 3,
    category: "Diabetes",
    title: "Morbi mattis nisi id orci finibus egestas",
    date: "18 Dec 2024",
    readTime: "9 mins read",
    description:
      "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    imgSrc: clinicseries,
  },
  {
    id: 4,
    category: "Diabetes",
    title: "Morbi mattis nisi id orci finibus egestas",
    date: "18 Dec 2024",
    readTime: "9 mins read",
    description:
      "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    imgSrc: clinicseries,
  },
];
const BlogDetail = () => {
  const { id } = useParams(); // Get the ID from the route
  const location = useLocation();
  const blog = location.state; // Access blog data from state
  const navigate = useNavigate();

  const handleNavigate = (blog) => {
    navigate(`/blog/${blog.id}`, { state: blog });
  };

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

  const [doctorRef, doctorInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="">
        <div
          onClick={handleBack}
          className="flex p-2 overflow-hidden flex-row gap-1 items-center cursor-pointer"
        >
          <img src={navigate_before} className="w-8 h-8" />
          <p className="font-montserrat font-semibold text-black text-[18px]">
            Back
          </p>
        </div>

        <div className="mt-2 p-4">
          <div className="flex justify-center">
            <p className="text-xs text-white font-semibold font-montserrat rounded-full bg-primary items-center justify-center flex justify-items-center p-2 w-fit ">
              #{blog.category}
            </p>
          </div>

          <h1 className="text-2xl font-bold text-black mt-3">{blog.title}</h1>
          <div className="mt-1 flex row justify-between">
            <p className="text-sm font-medium font-montserrat text-black">{`${blog.date} • ${blog.readTime}`}</p>
            <p className="text-sm font-medium font-montserrat text-black">
              By Doctor Kays
            </p>
          </div>

          <img
            src={blog.imgSrc}
            alt={blog.title}
            className="w-full h-[280.48px] object-cover mt-4 rounded-2xl"
          />
          <p className="mt-4 text-black">{blog.description}</p>
        </div>

        <motion.div
          className="mt-5 p-4"
          initial="hidden"
          animate={doctorInView ? "visible" : "hidden"}
          variants={slideInFromRight}
          ref={doctorRef}
        >
          <p className="text-black font-semibold text-[30px] font-montserrat">
            Recommended
          </p>
          <hr className="bg-primary w-[80px] h-[4px]" />

          <div className="mt-5">
            {dummyData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNavigate(item)} // Pass full blog data
                className="bg-primary relative rounded-xl cursor-pointer shadow-lg mb-5 overflow-hidden flex"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-[150px] h-[200px] object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-grow p-4">
                  {/* Tag and Date */}
                  <div className="flex justify-between items-center">
                    <p className="text-black font-medium text-xs py-1 px-2 bg-white rounded-full">
                      {`#${item.category}`}
                    </p>
                    {/* <p className="text-gray-400 text-xs">{item.date}</p> */}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-white text-[16px] font-bold mt-2">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-gray-200 mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Read More Action */}
                  <motion.div
                    variants={pulse}
                    onClick={() => handleNavigate(item)}
                    className="absolute bottom-3 left-3 bg-white rounded-full p-2 flex items-center justify-center"
                  >
                    <img
                      src={north_east}
                      alt="north east"
                      className="w-5 h-5"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
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
