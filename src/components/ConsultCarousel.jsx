import React, { useEffect, useRef } from "react";
import { north_east } from "../assets";

const ConsultCarousel = () => {
  const scrollContainerRef = useRef(null);

  const data = [
    // "Psychotic",
    // "Anxiety",
    // "Mental",
    // "Depression",
    // "Bipolar",
    "Schizophrenia",
    "OCD",
    "PTSD",
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 2; // Adjust scroll speed as needed

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);
  return (
    <div className="bg-[#E3EAFF] w-full overflow-x-auto whitespace-nowrap scrollbar-hide h-[81px] items-center flex flex-row gap-3" ref={scrollContainerRef}>
      {data.map((item, index) => (
        <div key={index} className="border border-primary h-[51px] p-3 rounded-full">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-[16px] font-bold">{item}</p>
            <img src={north_east} className="w-5 h-5" alt={`${item} icon`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsultCarousel;
