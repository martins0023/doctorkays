import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { bgabout, abouttitle, journeytitle } from "../assets";
import Stayintouch from "../components/Stayintouch";
import { stayintouch } from "../assets";
import Footer from "../components/Footer";
import {
  clinicseries1,
  clinicseries2,
  doctorimage,
  north_east,
} from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeIn,
  slideInFromRight,
  animateOnHover,
  bounce,
  slideInFromLeft,
  staggerContainer,
} from "../components/animations";

const About = () => {
  const journeyCards = [
    {
      title: "HIV TRANSMISSION",
      content:
        "Do you want a personal appointment with your time and date personalized. Know more about our journey and how we operate. Etiam ac metus diam. Ut porta ultrices pulvinar. Nulla sit amet congue neque, accumsan tempus eros. Maecenas scelerisque ipsum nec diam semper luctus.",
      img: clinicseries1,
      tag: "CLINICSERIES",
    },
    {
      title: "BREAST CANCER",
      content:
        "Do you want a personal appointment with your time and date personalized. Know more about our journey and how we operate. Etiam ac metus diam. Ut porta ultrices pulvinar. Nulla sit amet congue neque, accumsan tempus eros. Maecenas scelerisque ipsum nec diam semper luctus.",
      img: clinicseries2,
      tag: "MEDICINE ON THE STREET",
    },
  ];

  const [aboutTitleRef, aboutTitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [journeyTitleRef, journeyTitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [doctorRef, doctorInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [stayInTouchRef, stayInTouchInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Navbar />
      <Hero
        backgroundImage={bgabout}
        text="About Us Want to know More On What We Do"
      />
      <motion.div
        className="flex-grow bg-[#F9F5FF] p-4 mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="mt-4 gap-3 flex flex-col">
          <hr className="bg-primary w-[80px] h-[4px]" />
          <p className="font-semibold text-[14px] font-poppins text-gray-700">
            Know more about how we operate and do our things at doctor kays
            clinic online
          </p>
        </div>

        <motion.div
          className="mb-3 flex flex-col gap-2 items-center justify-center mt-10"
          initial="hidden"
          animate={aboutTitleInView ? "visible" : "hidden"}
          variants={slideInFromRight}
          ref={aboutTitleRef}
        >
          <img src={abouttitle} alt="About us" />
          <p className="font-poppins text-black text-[16px] font-normal mt-1">
            Do you want a personal appointment with your time and date
            personalized. Know more about our journey and how we operate. Etiam
            ac metus diam. Ut porta ultrices pulvinar. Nulla sit amet congue
            neque, accumsan tempus eros. Maecenas scelerisque ipsum nec diam
            semper luctus. Donec at volutpat odio. Pellentesque congue vitae
            justo vitae sagittis. Suspendisse iaculis augue elementum, iaculis
            lectus eget, blandit erat. Integer congue neque non luctus blandit.
            Donec accumsan massa ut ipsum bibendum ornare. Proin nec laoreet
            augue. Morbi ut augue imperdiet, egestas neque a, suscipit ex.
            Mauris vitae tortor et erat dictum ornare quis vitae est. suscipit
            ex. Mauris vitae tortor et erat dictum ornare quis vitae est
            accumsan massa ut ipsum dictum ornare quis.
          </p>
        </motion.div>
      </motion.div>

      {/* Journey section */}
      <motion.div
        className="p-4"
        initial="hidden"
        animate={journeyTitleInView ? "visible" : "hidden"}
        variants={fadeIn}
        ref={journeyTitleRef}
      >
        <div className="flex items-center justify-center">
          <img src={journeytitle} alt="Journey title" />
        </div>

        {journeyCards.map((card, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col mt-5"
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
          >
            <div className="relative bg-cover bg-center rounded-xl overflow-hidden">
              <img
                src={card.img}
                alt="Clinic series"
                className="w-full h-[198px] object-cover rounded-xl"
              />
              <div className="absolute top-3 left-3 bg-white rounded-full p-2 text-black font-semibold text-[12px] h-[31px] font-montserrat flex items-center justify-center">
                {card.title}
              </div>
              <motion.div
                variants={slideInFromLeft}
                className="absolute top-3 right-3 w-[40.03px] h-[40.03px] bg-white rounded-full p-1 flex items-center justify-center"
              >
                <img src={north_east} alt="Go" className="w-4 h-4" />
              </motion.div>

              <motion.div
                variants={bounce}
                className="absolute bottom-3 left-3 font-bold text-[14px]"
              >
                <p className="text-white text-[12px] font-montserrat">
                  #{card.tag}
                </p>
              </motion.div>
            </div>
            <p className="text-[16px] font-poppins font-normal mt-4 text-black">
              {card.content}
            </p>
          </motion.div>
        ))}

        <motion.div
          className="mt-5"
          initial="hidden"
          animate={doctorInView ? "visible" : "hidden"}
          variants={slideInFromRight}
          ref={doctorRef}
        >
          <p className="text-black font-semibold text-[30px] font-montserrat">
            Meet Doctor Kays
          </p>
          <hr className="bg-primary w-[80px] h-[4px]" />

          <div className="mt-5 flex gap-5 flex-col">
            <img
              src={doctorimage}
              alt="doctor kays"
              className="h-[467px] w-full object-cover rounded-3xl"
            />
            <p className="text-[16px] text-black font-poppins">
              Doctor Olayiwola is not your run-of-the-mill medical doctor. He is
              a tech lover, family advocate and firm believer in preventive and
              community medicine. His passion lies in promoting health awareness
              through engaging, relatable content that combines storytelling and
              humor.
              <br className="pt-3" />
              Weekly, through our unique content pillars—Health Nuggets, Clinic
              Series, Clinic online and the interactive street segment Medicine
              on the Street with Dr. Kays— We explore lifestyle, disease
              prevention, general health and wellness.
              <br />
              Our mission? Is to turn medicine from a head-scratcher into your
              friendly companion - relatable, understandable, and yes, even a
              bit fun!
              <br />
              We align our works with the World Health Organization calendar and
              delve into trending medical topics to ensure our audience stays
              informed and empowered. That’s our promise - making your health
              journey an adventure you won’t want to miss!
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-[#F9F5FF] mt-3 p-4"
        initial="hidden"
        animate={stayInTouchInView ? "visible" : "hidden"}
        variants={fadeIn}
        ref={stayInTouchRef}
      >
        <div className="flex pt-5 items-center justify-center">
          <img src={stayintouch} alt="stay in touch" />
        </div>
        <p className="font-montserrat text-[14px] text-black text-center font-medium mb-5">
          Stay connected to our community and never miss out on exciting
          updates.
        </p>

        <Stayintouch />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default About;
