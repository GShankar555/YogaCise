import React from "react";

import { MdEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="section-sm lg:section-lg bg-green min-h-[520px]">
      <div className="container mx-auto">
        <div
          className="border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12 p-3"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="150"
        >
          <h4
            className="text-[26px] text-white font-bold mb-[14px]"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="150"
          >
            Subscribe Our AI Trainer.
          </h4>
          <p
            className="text-green-200 mb-12"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-delay="150"
          >
            Subscribe our trainer for further updates about us
          </p>
          <form
            className="max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 lg:p-0 gap-x-4"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="w-full relative flex">
              <div className="absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300">
                <MdEmail />
              </div>
              <input
                className="form-control w-full border border-green-300 bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <button className="btn btn-lg btn-orange text-white w-full lg:max-w-[180px]">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
