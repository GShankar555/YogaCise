import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <div className="container mx-auto">
      <header
        className={`${
          header ? "top-4" : "top-9"
        } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
      >
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-[200px] w-[200px]" />
          </Link>
          <div className="hidden lg:flex">
            <Nav />
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-auto">
          <div className="flex gap-x-4 lg:gap-x-9 items-center">
            <Link
              to="/login"
              className="text-heading font-medium text-sm lg:text-base hover:text-orange transition"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition"
            >
              <span>Sign Up</span>
            </Link>
          </div>
          <NavMobile />
        </div>
      </header>
    </div>
  );
};

export default Header;
