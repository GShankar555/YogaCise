import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { asanadetaildesc } from "../data";
import { BsArrowLeft } from "react-icons/bs";
import getready from "../assets/img/asanas/getready.png";
import VideoStream from "../components/VideoStream";

const YogaAsanaDescription = () => {
  const { id } = useParams();
  const asana = asanadetaildesc.find((item) => item.id === id);
  const [start, setStart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setStart(true);
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container") {
      handleModalClose();
    }
  };

  if (!asana) {
    return <div>Asana not found.</div>;
  }

  return (
    <>
      <div className="min-h-screen w-full flex items-start bg-gray-100 p-6 relative mt-40">
        <div
          onClick={handleGoBack}
          className="absolute top-6 left-6 cursor-pointer flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 transition duration-300 hover:text-orange-200"
        >
          <BsArrowLeft className="mr-2" />
          Go Back
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-1/4 flex justify-center">
            <img
              src={asana.image}
              alt={asana.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-5xl font-bold mb-5">{asana.title}</h1>
              <p className=" text-xl text-gray-700 mb-4">{asana.desc}</p>
              <h3 className="text-3xl font-semibold mt-6 mb-4">Benefits:</h3>
              <p className="text-gray-600 whitespace-pre-line text-xl">
                {asana.benefits}
              </p>
            </div>

            {/* Start Training Button */}
            <div className="mt-6">
              <button
                onClick={handleModalOpen}
                className="px-6 py-3 bg-orange-500 text-white bg-orange rounded-lg hover:bg-orange-200 transition duration-300"
              >
                Start Training
              </button>
            </div>
          </div>
        </div>

        {/* Modal Component */}
        {isModalOpen && (
          <div
            id="modal-container"
            onClick={handleOutsideClick}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
          >
            <div className="bg-white p-10 rounded-lg shadow-2xl w-[90%] md:w-[50%] h-[70%] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Start Training</h2>
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-red-600 text-orange rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Close
                </button>
              </div>

              {/* Centering the image */}
              <div className="flex justify-center items-center mt-4">
                <img
                  src={getready}
                  alt="Get Ready"
                  className="h-[400px] w-[400px]"
                />
              </div>

              <div className="mt-4 text-lg">
                <p className="">
                  You're about to start training for the pose{" "}
                  <strong>{asana.title}</strong>. Make sure you're in a
                  comfortable environment and ready to practice!
                </p>
                <button
                  onClick={handleModalClose}
                  className="bg-orange text-white rounded-lg hover:bg-orange-200 hover:text-white transition duration-300 float-right px-4 py-2"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {start && (
          <VideoStream
            userChoice={id}
            flag={"yoga"}
            className="w-[800px] h-[450px] object-cover"
          />
        )}
      </div>
    </>
  );
};

export default YogaAsanaDescription;
