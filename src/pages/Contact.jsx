import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { bgcontact } from "../assets"

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero backgroundImage={bgcontact} text="Contact Us Have a Question Talk to Us" />
      <main className="flex-grow">
        <div className="mt-4 gap-3 flex flex-col p-4">
          <hr className="bg-primary w-[80px] h-[4px]" />
          <p className="font-semibold text-[14px] font-poppins">
            Our Trusted Partner & our proud Investor around the globe
          </p>
        </div>
      </main>
    </div>
  )
}

export default Contact