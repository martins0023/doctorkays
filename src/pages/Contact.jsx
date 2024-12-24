import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { bgcontact } from "../assets";
import { contacttitle } from "../assets";
import Button from "../components/Button";
import { north_east } from "../assets";
import { east } from "../assets";
import { stayintouch } from "../assets";
import Stayintouch from "../components/Stayintouch";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { motion } from 'framer-motion';
import { fadeIn, slideInFromBottom, slideInFromLeft, staggerContainer } from "../components/animations";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);
    // Add logic to send confirmation email here
  };
  return (
    <motion.div className="flex flex-col min-h-screen" initial="hidden" animate="visible" variants={staggerContainer}>
      <Navbar />
      <Hero
        backgroundImage={bgcontact}
        text="Contact Us Have a Question Talk to Us"
      />
      <main className="flex-grow p-4">
        <div className="flex items-center justify-center mt-10">
          <img src={contacttitle} alt="Contact Us" />
        </div>
        <motion.p variants={slideInFromLeft} className="text-[16px] font-poppins font-normal">
          Do you want a personal appointment with your time and date
          personalized?
        </motion.p>

        <motion.div variants={slideInFromBottom} className="items-center justify-center justify-items-center flex flex-col">
          <Button
            text="Book your appointment"
            className="bg-primary text-white rounded-full mt-4 h-[42px]"
            // img={<div className="w-[40.03px] h-[40.03px] bg-white rounded-full p-1 flex items-center justify-center"><img src={east} alt="Icon" className="w-5 h-5" /> </div>}
          />
          <p className="text-[16px] font-poppins underline mt-2 font-normal">
            with calendly
          </p>
        </motion.div>

        <div className="mt-10">
          <p className="text-black font-semibold text-[30px] font-montserrat">
            Get in Touch
          </p>
          <hr className="bg-primary w-[80px] h-[4px]" />
          <motion.p variants={slideInFromLeft} className="mt-5 font-poppins text-[16px]">
            Etiam ac metus diam. Ut porta ultrices pulvinar. Nulla sit amet
            congue neque, accumsan tempus eros.
          </motion.p>
        </div>

        <motion.div variants={slideInFromLeft} className="mt-3">
          <Form onSubmit={handleFormSubmit} />
        </motion.div>
      </main>

      <div className="bg-[#F9F5FF] mt-3 p-4">
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
    </motion.div>
  );
};

export default Contact;
