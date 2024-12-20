import React from 'react';
// import { whatismos } from "../assets";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="p-4 md:p-8 mt-5">
      <h2 className="text-[30px] text-center md:text-3xl font-semibold mb-3 relative">
        {/* <span className='relative z-40'>{title}</span>
        <span className="absolute left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <span className="inline-block w-12 h-12 rounded-full bg-primary opacity-50 ml-5"></span>
          <span className="absolute w-12 h-12 rounded-full bg-primary opacity-100"></span>
        </span> */}
        
      </h2>
      {children}
    </section>
  );
};

export default Section;
