import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { bgconsult } from "../assets"

const Consultation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero backgroundImage={bgconsult} text="Health Consultation Talk to an Expert Today" />
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

export default Consultation