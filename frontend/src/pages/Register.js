import React from "react";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-custom bg-cover bg-center">
      <div>
        <div className="bg-slate-800 border border-slate-400 rounded-md p-24 shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-4xl text-white font-bold text-center mb-10 mt-0">
            Register
          </h1>
          <form action="">
            <div className="relative my-4">
              <input
                type="email"
                className="block w-80 py-3 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-b-orange focus:outline-none focus:ring-0 focus:text-white focus:border-b-orange peer"
              />
              <label
                htmlFor=""
                className="absolute text-md text-white transform -translate-y-6 sclae-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-200 peer-focus:dark:text-green-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold"
              >
                Your Email
              </label>
              <BiUser className="absolute top-4 right-4" />
            </div>
            <div className="relative my-4">
              <input
                type="password"
                className="block w-80 py-3 px-0 text-md
                   text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-b-orange focus:outline-none focus:ring-0 focus:text-white focus:border-b-orange peer"
              />
              <label
                htmlFor=""
                className="absolute text-md text-white transform -translate-y-6 sclae-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-200 peer-focus:dark:text-green-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold"
              >
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-4 right-4" />
            </div>
            <div className="relative my-4">
              <input
                type="password"
                className="block w-80 py-3 px-0 text-md
                   text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-b-orange focus:outline-none focus:ring-0 focus:text-white focus:border-b-orange peer"
              />
              <label
                htmlFor=""
                className="absolute text-md text-white transform -translate-y-6 sclae-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-200 peer-focus:dark:text-green-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold"
              >
                Confirm Password
              </label>
              <AiOutlineUnlock className="absolute top-4 right-4" />
            </div>
            <button
              type="submit"
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-orange hover:bg-orange hover:text-white py-2 transition-colors duration-300"
            >
              Sign Up
            </button>
            <div>
              <span className="m-4">
                Already Have Account?{" "}
                <Link to="/login" className="text-green">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
