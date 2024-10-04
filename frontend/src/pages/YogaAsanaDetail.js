import React from "react";
import { asanas } from "../data";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const YogaAsanaDetail = () => {
  return (
    <section className="section-sm lg:section-lg">
      <div className="w-full px-4">
        <div className="text-center mb-16 lg:mb-32">
          <h2
            className="h2 mb-3 lg:mb-[18px]"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Yoga Asanas
          </h2>
          <p
            className="max-w-[480px] mx-auto"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Yoga is a light, which once lit will never dim. The better your
            practice, the brighter your flame with YOGACISE.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-y-24 lg:gap-x-[33px] mb-7 lg:mb-14">
          {asanas.map((item, index) => {
            const { id,image, title, desc, delay } = item;
            return (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-20px)] bg-white hover:shadow-primary max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[14px] mx-auto transition"
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                  <img src={image} alt={title} />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                    {title}
                  </h4>
                  <p>{desc}</p>
                </div>
                <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0 ">
                  <Link
                    to={`/yoga-asana/${id}`}
                    className="font-medium absolute bottom-[30px] w-full left-0 right-0 px-[30px]"
                  >
                    Start Training
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YogaAsanaDetail;
