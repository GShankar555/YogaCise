import React from "react";
import aash from "../assets/img/aashritha.png";
import gowri from "../assets/img/gowri.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Gowri Shankar",
      role: "Backend Developer",
      image: gowri,
      description:
        "Our web design team will spend time with our digital marketing team.",
    },
    {
      name: "Aashritha",
      role: "Frontend Developer",
      image: aash,
      description:
        "Our web design team will spend time with our digital marketing team.",
    },
    {
      name: "Ram Teja",
      role: " UI/UX Specialist",
      image: "http://deothemes.com/envato/enigma/html/img/team_2.jpg",
      description:
        "Our web design team will spend time with our digital marketing team.",
    },
    {
      name: "Mahaveer",
      role: "Researcher",
      image: "http://deothemes.com/envato/enigma/html/img/team_3.jpg",
      description:
        "Our web design team will spend time with our digital marketing team.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Meet Our Team</h2>
        <p className="text-gray-600">Creative Nerds</p>
      </div>
      <div className="flex flex-wrap -mx-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="relative overflow-hidden group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full transform transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <p>{member.description}</p>
                  <div className="mt-4 space-x-3">
                    <a href="#" className="text-white hover:text-blue-500">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-red-500">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#" className="text-white hover:text-yellow-500">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="text-lg font-semibold mt-4 text-center">
              {member.name}
            </h6>
            <span className="block text-center text-gray-500">
              {member.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
