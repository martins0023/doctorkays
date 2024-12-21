import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { bgabout, abouttitle, journeytitle } from "../assets";
import Stayintouch from "../components/Stayintouch";
import { stayintouch } from "../assets";
import Footer from "../components/Footer";
import { clinicseries1 } from "../assets";

const About = () => {
  const journeyCards = [
    {
      title: "Morbi mattis nisi id orci finibus egestas",
      content:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "11 Dec 2024",
      readTime: "9 mins read",
      img: "",
    },
    {
      title: "Morbi mattis nisi id orci finibus egestas",
      content:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "8 Dec 2024",
      readTime: "3 mins read",
      img: "",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero
        backgroundImage={bgabout}
        text="About Us Want to know More On What We Do"
      />
      <div className="flex-grow bg-[#F9F5FF] p-4 mb-10">
        <div className="mt-4 gap-3 flex flex-col">
          <hr className="bg-primary w-[80px] h-[4px]" />
          <p className="font-semibold text-[14px] font-poppins">
            Know more about how we operate and do our things at doctor kays
            clinic online
          </p>
        </div>

        <div className="mb-3 flex flex-col gap-2 items-center justify-center mt-10">
          <img src={abouttitle} alt="ABout us" />

          <p className="font-poppins text-[14px] font-normal mt-1">
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
        </div>
      </div>

      <div className="flex pt-5 items-center justify-center">
        <img src={journeytitle} alt="Journey title" />
      </div>

      <div className="flex flex-col">
        <div>
          <img src={clinicseries1} alt="Clinic series" className="w-full h-40 object-cover" />
        </div>
      </div>

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
    </div>
  );
};

export default About;
