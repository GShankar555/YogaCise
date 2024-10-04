import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const [emailTextColor, setEmailTextColor] = useState("");
  const form = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [emailMessage]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zkeguf9", "template_d9vvdwl", form.current, {
        publicKey: "2f_WdhdsUDw1DyjBe",
      })
      .then(
        () => {
          setEmailMessage("Your email was sent successfully :)");
          setEmailTextColor("green");
        },
        (error) => {
          setEmailMessage("Your email was not sent :(");
          setEmailTextColor("reed");
        }
      );
    e.target.reset();
  };
  return (
    <section className="section-sm lg:pt-[250px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]"
          data-aos="zoom"
          data-aos-offset="400"
        >
          <div
            className="flex-1 flex flex-col justify-center pl-8"
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-delay="500"
          >
            <h2 className="h2 mb-3 lg:mb-7">
              Get in touch with Us for a personalized Yoga course.
            </h2>
            <p className="mb-7 lg:mb-0">
              Get in Touch with use for any kind of help.We are here to give you
              the best and also here to help you to find your yoga course.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              sendEmail(e);
            }}
            className="bg-white flex-1 shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20"
            ref={form}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="500"
          >
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              name="user_firstname"
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              name="user_ "
              required
            />
            <input
              className="form-control"
              type="email"
              placeholder="Email Address"
              name="user_email"
              required
            />
            <textarea
              className="form-control py-5 h-[165px] resize-none"
              placeholder="Message"
              name="user_message"
            ></textarea>
            <button className="btn btn-lg btn-orange" type="submit">
              Send Message
            </button>
            <p style={{ color: emailTextColor }}>{emailMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
