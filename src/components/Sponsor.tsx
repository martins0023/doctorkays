import React from 'react';
import { sponsor } from "../assets";

const Sponsor: React.FC = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap p-4">
      <div className="flex flex-row gap-5">
        <img src={sponsor} className="inline-block" />
        <img src={sponsor} className="inline-block" />
        <img src={sponsor} className="inline-block" />
      </div>
    </div>
  );
};

export default Sponsor;
