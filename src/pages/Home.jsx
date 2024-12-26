import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom, zoomIn, zoomOut, rotateIn, rotateOut, bounce, pulse, staggerContainer, animateOnHover, animateOnClick } from "../components/animations";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Sponsor from "../components/Sponsor";
import {
  bghomesvg,
  mos,
  whatismos,
  east,
  healthnugget,
  stayintouch,
  blogsection,
  moscard1,
  north_east,
  moscard2,
  clinicseries,
  clinicseries1,
  clinicseries2,
  clinicsection,
} from "../assets";
import Stayintouch from "../components/Stayintouch";
import { doctorimage } from "../assets";
import { useNavigate } from "react-router-dom";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const healthNuggetCards = [
    {
      title: "Morbi mattis nisi id orci finibus egestas",
      content:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "11 Dec 2024",
      readTime: "9 mins read",
      img: clinicseries,
    },
    {
      title: "Morbi mattis nisi id orci finibus egestas",
      content:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "8 Dec 2024",
      readTime: "3 mins read",
      img: clinicseries2,
    },
    {
      title: "Morbi mattis nisi id orci finibus egestas",
      content:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "20 Dec 2024",
      readTime: "9 mins read",
      img: clinicseries1,
    },
    // Add more items as needed
  ];

  const clinicseriesCards = [
    {
      title: "Morbi mattis nisi id orci finibus egestas",
      content:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "11 Dec 2024",
      readTime: "9 mins read",
      img: moscard1,
    },
    {
      title: "Morbi mattis nisi id orci finibus egestas",
      content:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "8 Dec 2024",
      readTime: "3 mins read",
      img: moscard2,
    },
  ];

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

  const navigate = useNavigate();

  const handleNavigate = (blog) => {
    navigate(`/blog/${blog.id}`, { state: blog });
  };
  return (
    <motion.div className="flex flex-col min-h-screen" initial="hidden" animate="visible" variants={staggerContainer}>
      <Navbar />
      <Hero
        backgroundImage={doctorimage}
        height="500px" // Set the height dynamically
        marginTop="200px" // Override the default marginTop
        text="Turning medicine from a head-scratcher into your friendly companion "
      />
      <main className="flex-grow">
        <div className="mt-4 gap-3 flex flex-col p-4">
          <motion.hr className="bg-primary w-[80px] h-[4px]" variants={slideInFromLeft} />
          <motion.p className="font-semibold text-[14px] text-gray-700 font-poppins" variants={fadeIn}>
            Our Trusted Partner & our proud Investor around the globe
          </motion.p>
        </div>

        <Sponsor />

        {/* MOS */}
        <div className="bg-[#F9F5FF]">
          <Section title="What is MOS?">
            <motion.div className="mb-3 flex items-center justify-center" variants={zoomIn}>
              <img src={whatismos} alt="What is Medicine on the Street" />
            </motion.div>
            <motion.div className="flex flex-col md:flex-row md:justify-between md:items-center" variants={zoomIn}>
              <Card
                title="Medicine on the Street"
                description="Donec dui massa, varius a consequat at, ultrices a neque. Ut augue erat, dignissim ultricies bibendum sed, pharetra ut neque. Aliquam venenatis felis odio, eget molestie velit tristique nec. Praesent ac erat sit amet risus maximus fermentum in a urna. Vivamus nec diam volutpat, fringilla leo imperdiet, porta augue. Sed sit amet ornare purus. Nam lacinia quam non massa commodo, vel consequat elit pharetra...."
                imageUrl={mos}
                link="/mos"
              />
              <Button
                onClick={() => {}}
                className="h-[51px] w-[185px] border-1 bg-none text-black font-bold rounded-full border-primary mt-4 md:mt-0 md:ml-4 bg-white"
                img={<img src={east} alt="Icon" className="w-4 h-4" />}
                text="Know more"
              />
            </motion.div>
          </Section>
        </div>

        {/* HEALTH NUGGET */}
        <Section title="Health Nuggets">
          <div className="mb-3 flex items-center justify-center">
            <img src={healthnugget} alt="What is Health Nugget" />
          </div>
          <p className="font-montserrat text-[16px] text-black text-center font-medium">
            Donec dui massa, varius a consequat at, ultrices a neque. Ut augue
            erat, dignissim ultricies bibendum sed, pharetra ut neque. Aliquam
            venenatis felis odio, eget molestie velit tristique nec. Praesent ac
            erat sit amet risus maximus fermentum in a urna.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {healthNuggetCards.map((card, index) => (
              <div key={index} className=" bg-white rounded-t-lg w-full gap-3">
                <div className="w-full">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-primary p-3">
                    <h3 className="font-semibold text-white text-[16px] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[14px] font-poppins font-normal text-white mb-4">
                      {card.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-[12px]">
                        {card.date}
                      </span>
                      <span className="text-white text-[12px]">
                        {card.readTime}
                      </span>
                    </div>

                    {/* button */}
                    <div className="flex justify-end items-end">
                      <Button
                        onClick={() => {}}
                        className="h-[40px] w-[150px] border-1 bg-none text-black text-[12px] font-medium font-montserrat rounded-full border-primary mt-4 md:mt-0 md:ml-4 bg-white"
                        img={<img src={east} alt="Icon" className="w-5 h-5" />}
                        text="Read more"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex flex-end items-end justify-center gap-3 text-primary font-medium mt-5">
            <p className="text-black"> view more...</p>
          </div> */}
        </Section>

        {/* CLINIC SERIES */}
        <div className="bg-[#F9F5FF] mt-3">
          <div className="flex pt-5 items-center justify-center">
            <img src={clinicsection} alt="clinic series" />
          </div>
          <div className="">
            <p className="font-montserrat text-black p-4 text-[16px] text-center font-medium">
              Donec dui massa, varius a consequat at, ultrices a neque. Ut augue
              erat, dignissim ultricies bibendum sed, pharetra ut neque. Aliquam
              venenatis felis odio, eget molestie velit tristique nec. Praesent
              ac erat sit amet risus maximus fermentum in a urna.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4">
            {clinicseriesCards.map((card, index) => (
              <div key={index} className=" bg-white rounded-t-lg w-full gap-3">
                <div className="w-full">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-primary p-3">
                    <h3 className="font-semibold text-white text-[16px] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[14px] font-poppins font-normal text-white mb-4">
                      {card.content}
                    </p>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-10">
                        <span className="text-white text-[12px]">
                          {card.date}
                        </span>
                        <span className="text-white text-[12px]">
                          {card.readTime}
                        </span>
                      </div>

                      <div className="flex justify-end items-end">
                        <div className="bg-white rounded-full p-2">
                          <img src={north_east} alt="doctor kays" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOG/NEWS */}
        <Section title="Blog / News">
          <div className="mb-3 flex items-center justify-center">
            <img src={blogsection} alt="Blog" />
          </div>
          <p className="font-montserrat text-[16px] text-black text-center font-medium">
            Donec dui massa, varius a consequat at, ultrices a neque. Ut augue
            erat, dignissim ultricies bibendum sed, pharetra ut neque.
          </p>

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
                <motion.div variants={pulse} onClick={() => handleNavigate(item)} className="absolute top-3 right-3 bg-white rounded-full p-2 flex items-center justify-center">
                    <img
                      src={north_east}
                      alt="north east"
                      className="w-4 h-4"
                    />
                  </motion.div>
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
        </Section>

        <div className="p-4">
          <Testimonials />
        </div>

        {/* stay in touch */}
        <div className="bg-[#F9F5FF] mt-3 p-4">
          <div className="flex pt-5 items-center justify-center">
            <img src={stayintouch} alt="clinic series" />
          </div>
          <p className="font-montserrat text-[14px] text-black text-center font-medium mb-5">
            Stay connected to our community and never miss out on exciting
            updates.
          </p>

          <Stayintouch />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
