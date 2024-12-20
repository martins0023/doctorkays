import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Sponsor from '../components/Sponsor';
import { mos, whatismos, east } from "../assets"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <div className="mt-4 gap-3 flex flex-col p-4">
          <hr className="bg-primary w-[80px] h-[4px]" />
          <p className="font-semibold text-[14px] font-poppins">Our Trusted Partner & our proud
            Investor around the globe
          </p>
        </div>

        <Sponsor />

        <Section title="What is MOS?">
          <div className="mb-3 flex items-center justify-center">
            <img src={whatismos} />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <Card
              title="Medicine on the Street"
              description="Donec dui massa, varius a consequat at, ultrices a neque. Ut augue erat, dignissim ultricies bibendum sed, pharetra ut neque. Aliquam venenatis felis odio, eget molestie velit tristique nec. Praesent ac erat sit amet risus maximus fermentum in a urna. Vivamus nec diam volutpat, fringilla leo imperdiet, porta augue. Sed sit amet ornare purus. Nam lacinia quam non massa commodo, vel consequat elit pharetra...."
              imageUrl={mos}
              link="/mos"
            />
            <Button
              onClick={() => { }}
              className="h-[51px] w-[185px] border-1 bg-none text-black font-bold rounded-full border-primary mt-4 md:mt-0 md:ml-4"
              img={<img src={east} alt="Icon" className="w-4 h-4" />}
              text="Know more"
            />
          </div>
        </Section>
        <Section title="Health Nuggets">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Add cards for Health Nuggets */}
          </div>
        </Section>
        <Section title="Clinic Series">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Add cards for Clinic Series */}
          </div>
        </Section>
        <Section title="Blog / News">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add cards for Blog / News */}
          </div>
        </Section>
        <Section title="Stay in touch">
          <div className="flex flex-col items-center">
            <input type="email" placeholder="Your Email Address" className="p-2 border rounded mb-4 w-full max-w-md" />
            <Button text="Subscribe" onClick={() => { }} />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
