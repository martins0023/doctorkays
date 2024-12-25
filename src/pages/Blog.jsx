import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer"; // Assuming you have a Footer component
import Button from "../components/Button"; // Assuming you have a Button component
import {
  bgblog,
  north_east,
  clinicseries1,
  clinicseries2,
  clinicsection,
  clinicseries,
} from "../assets"; // Adjust your import path accordingly
import { motion } from "framer-motion";
import { staggerContainer } from "../components/animations";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    category: "Blood Sugar",
    title: "Morbi mattis nisi id orci finibus egestas",
    date: "18 Dec 2024",
    readTime: "9 mins read",
    description: "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    imgSrc: clinicseries1,
  },
  {
    id: 2,
    category: "Pregnancy",
    title: "Morbi mattis nisi id orci finibus egestas",
    date: "18 Dec 2024",
    readTime: "9 mins read",
    description: "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    imgSrc: clinicseries2,
  },
  {
    id: 3,
    category: "Diabetes",
    title: "Morbi mattis nisi id orci finibus egestas",
    date: "18 Dec 2024",
    readTime: "9 mins read",
    description: "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    imgSrc: clinicseries,
  },
  {
    id: 4,
    category: "Diabetes",
    title: "Morbi mattis nisi id orci finibus egestas",
    date: "18 Dec 2024",
    readTime: "9 mins read",
    description: "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    imgSrc: clinicseries,
  },
];

const Blog = () => {
  const navigate = useNavigate();

  const handleNavigate = (blog) => {
    navigate(`/blog/${blog.id}`, { state: blog });
  };
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Navbar />
      <Hero
        backgroundImage={bgblog}
        text="Latest Blog Delve Deeper Into Our Writing Collection"
      />
      <main className="flex-grow">
        <div className="mt-4 gap-3 flex flex-col p-4">
          <hr className="bg-primary w-[80px] h-[4px]" />
          <p className="font-semibold text-[14px] font-poppins">
            Read the latest news and trending blogs regarding health matters and
            issues
          </p>
          {/* <div className="flex flex-row gap-3 mt-4 overflow-x-auto scrollbar-hide">
            <button className="bg-primary text-white px-4 py-2 rounded-full">All</button>
            <button className="bg-white text-primary border border-primary px-4 py-2 rounded-full">Pregnancy</button>
            <button className="bg-white text-primary border border-primary px-4 py-2 rounded-full">HIV</button>
            <button className="bg-white text-primary border border-primary px-4 py-2 rounded-full">Diabetes</button>
            <button className="bg-white text-primary border border-primary px-4 py-2 rounded-full">Blood sugar</button>
          </div> */}
          <div className="mt-4">
            {dummyData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNavigate(item)} // Pass full blog data
                className="bg-primary relative rounded-xl shadow-lg mb-5 overflow-hidden"
              >
                {/* Image Section */}
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-[198px] object-cover"
                />

                {/* Tag and Action */}
                <div className="px-4 mt-2 flex justify-between items-center">
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 flex items-center justify-center">
                    <img
                      src={north_east}
                      alt="north east"
                      className="w-4 h-4"
                    />
                  </div>
                  <p className="absolute top-3 left-3 items-start text-black font-medium text-xs py-1 px-2 bg-white rounded-full">
                    {`#${item.category}`}
                  </p>
                </div>

                {/* Content Section */}
                <div className="px-4 py-3">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  <p className="text-[16px] text-gray-200 mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Date and Read Time */}
                <div className="px-4 pb-3 flex justify-between items-center text-gray-400 text-xs">
                  <p className="text-[14px]">{item.date}</p>
                  <p className="text-[14px]">{item.readTime}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Button
              text="1"
              className="mx-1 px-3 py-2 rounded-md bg-primary text-white border border-primary"
            />
            <Button
              text="2"
              className="mx-1 px-3 py-2 rounded-md border border-primary text-primary"
            />
            <Button
              text="3"
              className="mx-1 px-3 py-2 rounded-md border border-primary text-primary"
            />
            <Button
              text="..."
              className="mx-1 px-3 py-2 rounded-md border border-primary text-primary"
            />
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Blog;
