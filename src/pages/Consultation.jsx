import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { bgconsult } from "../assets";
import ConsultCarousel from "../components/ConsultCarousel";
import { north_east } from "../assets";
import { doctorimage } from "../assets";
import Button from "../components/Button";
import { stayintouch } from "../assets";
import Stayintouch from "../components/Stayintouch";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Consultation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero
        backgroundImage={bgconsult}
        text="Health Consultation Talk to an Expert Today"
      />
      <ConsultCarousel />
      <main className="flex-grow p-4">
        <p className="font-poppins text-black font-semibold text-[30px]">
          Meet
        </p>
        <span className="text-[18px] text-black font-semibold font-poppins">
          Doctor Olayiwola Babatunde
        </span>

        <div className="bg-[#5215b37a] p-4 rounded-lg flex flex-row mt-1">
          <p className="text-black font-semibold flex gap-2 text-[20px]">
            A Licensed Professional Doctor
            <div className="w-[40.03px] h-[40.03px] bg-white rounded-full p-1 flex items-center justify-center">
              <img src={north_east} alt="Go" className="w-4 h-4" />
            </div>
          </p>
        </div>

        <p className="mt-5 font-poppins text-[16px] font-normal">
          About Olayiwola Babatunde Emmanuel (Doctor Kays) ‘Hey folks, I’m not
          your run-of-the-mill medical doctor. I am a tech lover, family
          advocate and firm believer in preventive and community medicine. My
          passion lies in promoting health awareness through engaging, relatable
          content that combines storytelling and humor.
          <br className="pt-3" />
          Weekly, through our unique content pillars—Health Nuggets, Clinic
          Series, Clinic online and the interactive street segment Medicine on
          the Street with Dr. Kays— We explore lifestyle, disease prevention,
          general health and wellness.
          <br className="pt-3" />
          Our mission? Is to turn medicine from a head-scratcher into your
          friendly companion - relatable, understandable, and yes, even a bit
          fun! We align our works with the World Health Organization calendar
          and delve into trending medical topics to ensure our audience stays
          informed and empowered. That’s our promise - making your health
          journey an adventure you won’t want to miss!
        </p>

        <img
          src={doctorimage}
          alt="doctor kays"
          className="h-[467px] w-full object-cover rounded-3xl mt-4"
        />

        <div className="flex items-center justify-center flex-col gap-1">
          <Button
            text="Book your appointment"
            type="submit"
            className="bg-primary rounded-full text-white mt-4 font-poppins font-semibold"
          />
          <p className="underline text-[14px] text-black ">with calendly</p>
        </div>
      </main>

      <div className="mb-20 mt-3 p-4">
        <div className="mt-10">
          <p className="text-black font-semibold text-[30px] font-montserrat">
            Get in Touch
          </p>
          <hr className="bg-primary w-[80px] h-[4px]" />
        </div>

        <Form />
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

export default Consultation;
