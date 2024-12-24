import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer"; // Assuming you have a Footer component
import Button from "../components/Button"; // Assuming you have a Button component
import { bgblog, north_east,
  clinicseries1,
  clinicseries2,
  clinicsection, clinicseries } from "../assets"; // Adjust your import path accordingly

const dummyData = [
  { id: 1, category: "Blood Sugar", title: "Morbi mattis nisi id orci finibus egestas", date: "18 Dec 2024", readTime: "9 mins read", imgSrc: clinicseries1 },
  { id: 2, category: "Pregnancy", title: "Morbi mattis nisi id orci finibus egestas", date: "18 Dec 2024", readTime: "9 mins read", imgSrc: clinicseries2 },
  { id: 3, category: "Diabetes", title: "Morbi mattis nisi id orci finibus egestas", date: "18 Dec 2024", readTime: "9 mins read", imgSrc: clinicseries },
  { id: 4, category: "Diabetes", title: "Morbi mattis nisi id orci finibus egestas", date: "18 Dec 2024", readTime: "9 mins read", imgSrc: clinicseries },
];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
                <img src={item.imgSrc} alt={item.title} className="w-full h-[198px] object-cover rounded-lg" />
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-primary font-semibold text-[12px]">{`#${item.category}`}</p>
                  <div className="bg-white rounded-full p-2">
                    <img src={north_east} alt="north east" className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="mt-2 text-[16px] font-bold">{item.title}</h3>
                <p className="text-[12px] text-gray-600 mt-1">{item.date}</p>
                <p className="text-[12px] text-gray-600">{item.readTime}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button text="1" className="mx-1 px-3 py-2 rounded-full border border-primary text-primary" />
            <Button text="2" className="mx-1 px-3 py-2 rounded-full border border-primary text-primary" />
            <Button text="3" className="mx-1 px-3 py-2 rounded-full border border-primary text-primary" />
            <Button text="..." className="mx-1 px-3 py-2 rounded-full border border-primary text-primary" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
