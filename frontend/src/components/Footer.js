import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Logo from "../assets/img/orange_bg_logo.png";

import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <footer className="pb-[70px] bg-orange text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-y-5">
          <a href="#">
            <img className="w-[300px] h-[300px]" src={Logo} alt="" />
          </a>
          <p>&copy; 2024. All Rights Reserved.</p>
          <div className="flex gap-x-4 text-orange text-lg">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaYoutube />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaInstagram />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
