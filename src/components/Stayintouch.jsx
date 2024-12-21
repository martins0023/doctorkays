import React from 'react';
import Button from './Button';

const Stayintouch = () => {
    return (
        <div className="flex flex-row items-center justify-center justify-items-center mb-[63px]">
            <input type="email" placeholder="Your Email Address" className=" text-[14px] text-[#484848] font-regular border h-[56px] p-3 w-full max-w-md border-primary" />
            <Button text="Subscribe" className="bg-primary rounded-none text-[14px] font-semibold text-white h-[56px]" onClick={() => { }} />
        </div>
    );
};

export default Stayintouch;
