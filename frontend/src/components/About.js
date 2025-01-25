import React from "react";
import Image from "../assets/img/logo.png";

const About = () => {
  return (
    <section className="about-section mt-10 mb-20">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <div className="sec-title">
              <div
                className="title text-left font-semibold text-6xl"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                About Us
              </div>
              <h2
                className="italic text-xl mt-4 text-paragraph"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                ~ We Are Leading in AI <br /> Based Training
              </h2>
            </div>
            <div className="text text-left text-xl mt-10">
              Yogacise is an innovative AI-driven platform designed to enhance
              home fitness routines by leveraging real-time posture tracking and
              personalized feedback. Using your webcam, Yogacise monitors
              movements during workouts, correcting form to prevent injuries and
              maximize effectiveness, just like a personal trainer would but
              with free of cost.
              <br />
              Yogacise provides customized guidance tailored to your needs.
              Whether you’re a beginner or an experienced yogi, the platform
              adjusts its feedback to help you improve your form and progress at
              your own pace.
            </div>
            <div className="email text-left font-extrabold italic text-xl mt-4">
              Request Quote:{" "}
              <span className="theme_color">yogacise@gmail.com</span>
            </div>
          </div>

          <div className="rows-2">
            <div className="image">
              <img
                src={Image}
                alt="About Us"
                className="bouncing-image"
                data-aos="fade-down"
                data-aos-delay="400"
              />
              <div className="overlay-box absolute inset-0 flex items-center justify-center bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
