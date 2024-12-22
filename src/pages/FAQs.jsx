import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { bgfaq, faqs } from "../assets";
import Stayintouch from "../components/Stayintouch";
import { stayintouch } from "../assets";
import Footer from "../components/Footer";

const FAQs = () => {
  const faqsCard = [
    {
      id: 1,
      question: "Pellentesque tristique elit orci 1 ?",
      answer:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "Pellentesque tristique elit orci 2 ?",
      answer:
        "Morbi mattis nisi id orci finibus egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero backgroundImage={bgfaq} text="FAQs Frequently Asked Questions" />
      <main className="flex-grow p-4">
        <div className="mt-4 gap-3 flex flex-col">
          <hr className="bg-primary w-[80px] h-[4px]" />
          <p className="font-semibold text-[14px] font-poppins">
            See frequently asked questions about our programs and thoughts
          </p>
        </div>

        <div className="mb-3 flex flex-col gap-2 items-center justify-center mt-8">
          <img src={faqs} alt="Frequently asked questions" />
          <p className="font-montserrat text-[14px] text-center font-medium">
            Donec dui massa, varius a consequat at, ultrices a neque. Ut augue
            erat, dignissim ultricies bibendum sed, pharetra ut neque. Aliquam
            venenatis felis odio, eget molestie velit tristique nec. Praesent ac
            erat sit amet risus maximus fermentum in a urna.
          </p>
        </div>

        {/* loop faqs */}
        {faqsCard.map((card, index) => (
          <div key={index} className="flex flex-col mt-10 mb-10">
            <div className="bg-primary flex items-center justify-center justify-items-center w-[56px] h-[36px] rounded-md">
              <p className="text-white font-semibold text-[20px]">{card.id}</p>
            </div>

            <div className="flex flex-col mt-3">
              <p className="font-semibold font-poppins text-[18px]">
                {card.question}
              </p>
              <p className="font-poppins font-normal text-[14px]">
                {card.answer}
              </p>

              <hr className="bg-primary w-full h-[1px] mt-3" />
            </div>
          </div>
        ))}
      </main>
      {/* stay in touch */}
      <div className="bg-[#F9F5FF] mt-3 p-4">
        <div className="flex pt-5 items-center justify-center">
          <img src={stayintouch} alt="clinic series" />
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

export default FAQs;
