import React, { useState } from 'react';
import Button from './Button';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-7">
      <div className="mb-4">
        <label className="font-semibold text-[16px]">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 mt-2 h-[60px] border-primary border focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold text-[16px]">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 mt-2 h-[60px] border-primary border focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold text-[16px]">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mt-2 h-[60px] border-primary border focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold text-[16px]">Mobile Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="+1234-7666-777"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 mt-2 h-[60px] border-primary border focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold text-[16px]">Your Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mt-2 h-[160px] border-primary border focus:outline-none focus:border-purple-500"
          required
        />
      </div>
      <div className="flex justify-end items-end">
        <Button 
            text="Submit a Request"
            className="bg-primary font-semibold text-[16px] text-white rounded-full h-[51px] p-3"
        />
      </div>
    </form>
  );
};

export default Form;
