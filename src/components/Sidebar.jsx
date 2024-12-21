import React from "react";
import { Link, useLocation } from "react-router-dom";
import { close, east } from "../assets";
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleConsultNav = () => {
    navigate("/consultation")
  }

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <aside className="w-[323px] bg-white text-black h-full fixed top-0 right-0 shadow-lg">
        <div className="flex justify-end items-center p-4">
          <button
            onClick={onClose}
            className="text-black text-2xl font-bold focus:outline-none"
          >
            <img src={close} alt="close" className="w-[30px] h-[30px]" />
          </button>
        </div>
        <ul className="mt-4">
          <li>
            <Link
              to="/"
              className={`p-4 block font-semibold text-[18px] cursor-pointer ${
                isActive("/") ? "text-primary border-b-2 border-primary" : "text-[#595959]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`p-4 block font-semibold text-[18px] cursor-pointer ${
                isActive("/about") ? "text-primary border-b-2 border-primary" : "text-[#595959]"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`p-4 block font-semibold text-[18px] cursor-pointer ${
                isActive("/blog") ? "text-primary border-b-2 border-primary" : "text-[#595959]"
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/dr-ai"
              className={`p-4 block font-semibold text-[18px] cursor-pointer ${
                isActive("/dr-ai") ? "text-primary border-b-2 border-primary" : "text-[#595959]"
              }`}
            >
              Dr Ai
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={`p-4 block font-semibold text-[18px] cursor-pointer ${
                isActive("/shop") ? "text-primary border-b-2 border-primary" : "text-[#595959]"
              }`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`p-4 block font-semibold text-[18px] cursor-pointer ${
                isActive("/services") ? "text-primary border-b-2 border-primary" : "text-[#595959]"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`p-4 block font-semibold text-[18px] cursor-pointer ${
                isActive("/contact") ? "text-primary border-b-2 border-primary" : "text-[#595959]"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className={`p-4 block font-semibold text-[18px] cursor-pointer ${
                isActive("/faqs") ? "text-primary border-b-2 border-primary" : "text-[#595959]"
              }`}
            >
              FAQs
            </Link>
          </li>
        </ul>
        <div className="mt-4 p-4">
          <Button
            onClick={handleConsultNav}
            className="h-[51px] w-[260px] text-[14px] border-1 bg-white text-black font-bold rounded-full border-primary mt-4 md:mt-0 md:ml-4"
            img={<img src={east} alt="Icon" className="w-5 h-5" />}
            text="Book your appointment"
          />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;