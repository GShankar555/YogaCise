import React from "react";
import aash from "../assets/img/aashritha.png";
import gowri from "../assets/img/gowri.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Aashritha",
      role: "Frontend Developer",
      image: aash,
    },
    {
      name: "Gowri Shankar",
      role: "Backend Developer",
      image: gowri,
    },
  ];

  return (
    <div className="container mx-auto px-2 py-5">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Meet Our Team</h2>
        <p className="text-gray-600">Samsthiti</p>
      </div>
      <div className="flex gap-6 mx-2 justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-2 mb-8">
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="overflow-hidden"
              />
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
