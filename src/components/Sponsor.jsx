import React from "react";
import { sponsor } from "../assets";
import Button from "./Button";

const Sponsor = () => {
  return (
    <div>
      <div className="overflow-x-auto whitespace-nowrap p-4 scrollbar-hide">
        <div className="flex flex-row gap-5">
          <img src={sponsor} className="inline-block" />
          <img src={sponsor} className="inline-block" />
          <img src={sponsor} className="inline-block" />
        </div>
      </div>
      {/* <Button text="Become a sponsor" className="bg-primary mt-2 text-white rounded-3xl ml-5" /> */}
    </div>
  );
};

export default Sponsor;
