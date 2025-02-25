import React from "react";
import { Parallax } from "react-parallax";

import Image from "../assets/img/hero/guy.png";

import Header from "./Header";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
      <div className="container mx-auto">
        <Header />
        <div
          className="flex flex-col items-center lg:flex-row
        lg:items-start pt-32"
        >
          <div className="flex-1 lg:mt-12">
            <h1
              className="h1 mb-3 lg:mb-[22px]"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Yoga to
              <br />
              Release Stress
            </h1>
            <p
              className="mb-6 lg:mb-12 max-w-[480px] lg:text-lg"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Yoga is a way of life, rather than a chore. It's not about having
              time, it's about making time. Nothing will work unless you
              workout.
            </p>
            <div
              className="mb-12 space-x-3"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <Link
                className="btn btn-sm lg:btn-lg btn-orange p-5 hover:text-white"
                to="/asanas"
              >
                Get Started
              </Link>
              <button className="btn btn-sm lg:btn-lg text-heading bg-transparent border border-stroke-1 px-4 hover:bg-stroke-3">
                Learn more
              </button>
            </div>
          </div>
          <div className="w-full bg-circle bg-cover lg:bg-none lg:w-auto">
            <div
              className="flex-1 flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="w-[234px] h-[234px] lg:w-[504px] lg:h-[744px] lg:mt-0">
                <Parallax
                  className="w-full h-full p-20 lg:p-10"
                  bgImage={Image}
                  bgImageAlt="guy Image"
                  strength={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
