import React from "react";
import { sponsorship } from "../assets";

const Sponsorship = () => {
  return (
    <div>
      <div className="mb-3 flex items-center mt-20 justify-center">
        <img src={sponsorship} alt="Blog" />
      </div>
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Interested in sponsoring or collaborating with us? Click the link
          below to get started.
        </p>
        <a
          href="https://payment-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white py-2 px-4 rounded-full inline-block"
        >
          Sponsor/Collaborate
        </a>
      </div>
    </div>
  );
};

export default Sponsorship;
