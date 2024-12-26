import React from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaSyringe,
  FaHeartbeat,
  FaPills,
  FaXRay,
} from "react-icons/fa";
import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom,
  zoomIn,
  zoomOut,
  rotateIn,
  rotateOut,
  bounce,
  pulse,
  staggerContainer,
  animateOnHover,
  animateOnClick,
} from "../components/animations";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

import { sponsorship } from "../assets";
import { reviews } from "../assets";
import { pricingIcon } from "../assets";
import Sponsorship from "../components/Sponsorship";
import Testimonials from "../components/Testimonials";
import { east } from "../assets";
import { servicesIcon } from "../assets";
import { stayintouch } from "../assets";
import Stayintouch from "../components/Stayintouch";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const pricing = [
  {
    id: 1,
    title: "One-time Consultation",
    whatyouwillget:
      "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    price: "₦3,000",
    duration: "One time",
  },
  {
    id: 2,
    title: "Weekly Consultation",
    whatyouwillget:
      "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur..",
    price: "₦10,000",
    duration: "One week",
  },
];

const services = [
  {
    id: 1,
    icon: <FaStethoscope className="w-12 h-12 text-primary" />,
    title: "General Checkup",
    description: "Comprehensive health checkups to ensure your well-being.",
  },
  {
    id: 2,
    icon: <FaSyringe className="w-12 h-12 text-primary" />,
    title: "Medicine On The Street",
    description:
      "Protect yourself and your family with our MOS awareness on the streets of Nigeria.",
  },
  {
    id: 3,
    icon: <FaHeartbeat className="w-12 h-12 text-primary" />,
    title: "Clinic Series",
    description: "Expert cardiac care for your heart health.",
  },
  {
    id: 4,
    icon: <FaPills className="w-12 h-12 text-primary" />,
    title: "Prescription",
    description: "Get a medical prescription from a licensed doctor.",
  },
  {
    id: 5,
    icon: <FaXRay className="w-12 h-12 text-primary" />,
    title: "Consultation",
    description: "Get a special consultation for your medical diagnosis.",
  },
];


const Services = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  }
  return (
    <motion.div
      className="flex flex-col min-h-screen max-w-screen-desktop max-w"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Navbar />
      <main className="flex-grow bg-[#F9F5FF]">
        <div className="mt-4 gap-3 flex flex-col p-4">
          {/* <motion.hr
            className="bg-primary w-[80px] h-[4px]"
            variants={slideInFromLeft}
          />
          <motion.p
            className="font-semibold text-[14px] text-gray-700 font-poppins"
            variants={fadeIn}
          >
            Become a trusted partner,
          </motion.p> */}

          <div className="flex flex-col gap-3">
            <Button
              text="Schedule a Consultation"
              className="bg-primary text-white font-medium rounded-full"
            />

            <Button
              onClick={handleContact}
              variants={zoomOut}
              text="Contact Us"
              className="bg-white border-primary text-black  font-medium rounded-full"
            />
          </div>

          <div className=" py-10">
            <div className="container mx-auto px-4">
              {/* Services Section */}
              {/* <h2 className="text-3xl font-bold text-center text-primary mb-10">
                Our Services
              </h2> */}
              <div className="mb-5 flex items-center mt-5 justify-center">
                <img src={servicesIcon} alt="services" />
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing Section */}
              {/* <h2 className="text-3xl font-bold text-center text-primary mt-20 mb-10">
                Appointment Pricing
              </h2> */}
              <div className="mb-5 flex items-center mt-20 justify-center">
                <img src={pricingIcon} alt="Pricing" />
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
                {pricing.map((plan) => (
                  <div
                    key={plan.id}
                    className="bg-primary p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl text-white font-semibold text-center mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-2xl text-white font-bold text-center mb-2">
                      {plan.price}
                    </p>
                    <p className="text-white text-center mb-4">
                      {plan.duration}
                    </p>
                    <p className="mb-8 text-white">{plan.whatyouwillget}</p>
                    <Button className="bg-white text-primary py-2 px-4 rounded-full block mx-auto" text="Book Now"
                        img={<img src={east} alt="Icon" className="w-5 h-5" />}
                    >
                    </Button>
                  </div>
                ))}
              </div>

              {/* Sponsorship and Collaborations Section */}
              {/* <h2 className="text-3xl font-bold text-center text-primary mt-20 mb-10">
                Sponsorship & Collaborations
              </h2> */}
              <Sponsorship />

              {/* Testimonials Section */}
              {/* <h2 className="text-3xl font-bold text-center text-primary mt-20 mb-10">
                What People Are Saying
              </h2> */}
              <div className="pt-10">
              < Testimonials />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* stay in touch */}
      <div className="bg-[#F9F5FF] p-4">
          <div className="flex pt-5 items-center justify-center">
            <img src={stayintouch} alt="clinic series" />
          </div>
          <p className="font-montserrat text-[14px] text-black text-center font-medium mb-5">
            Stay connected to our community and never miss out on exciting
            updates.
          </p>

          <Stayintouch />
        </div>
        < Footer />
    </motion.div>
  );
};

export default Services;
