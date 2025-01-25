import React, { useEffect, useState } from "react";
import Speech from "./Speech";

const VideoStream = ({ userChoice, flag }) => {
  const [feedback, setFeedback] = useState("");
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState("");
  const [streamActive, setStreamActive] = useState(true);

  const fetchFeedback = async () => {
    try {
      const response = await fetch("http://localhost:5000/feedback");
      const data = await response.json();
      setFeedback(data.feedback);
      setCounter(data.counter);
      setState(data.state);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  useEffect(() => {
    if (flag !== "yoga" && streamActive) {
      fetchFeedback();
      const interval = setInterval(fetchFeedback, 1000);
      return () => clearInterval(interval);
    }
  }, [flag, streamActive]);

  useEffect(() => {
    const videoElement = document.querySelector("img");

    const cancelFeed = async () => {
      try {
        const response = await fetch("http://localhost:5000/cancel_feed");
        if (response.ok) {
          console.log("Feed canceled successfully");
        } else {
          console.error("Failed to cancel feed");
        }
      } catch (error) {
        console.error("Error canceling feed:", error);
      }
    };

    return () => {
      if (videoElement) {
        videoElement.src = "";
      }
      cancelFeed();
    };
  }, []);

  const handleStopStream = async () => {
    const confirmStop = window.confirm("Do you want to stop training?");
    if (confirmStop) {
      await fetch("http://localhost:5000/cancel_feed");
      setStreamActive(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="flex justify-center">
          {streamActive ? (
            <img
              src={`http://localhost:5000/video_feed?id=${userChoice}&flag=${flag}`}
              alt="Live Stream"
              className={` object-cover border-4 border-blue-500 rounded-lg shadow-lg ${flag==="gym"?'mt-40':""}`}
            />
          ) : (
            <div>Stream stopped</div>
          )}
        </div>

        {flag === "gym" && streamActive && (
          <div className="col-lg-4">
            <h3>Feedback: {feedback}</h3>
            <h3>Counter: {counter}</h3>
            <h3>State: {state}</h3>
          </div>
        )}

        <Speech text={feedback} />
      </div>

      {/* Stop Training Button */}
      {streamActive && (
        <div className="mt-6 flex justify-center ">
          <button
            onClick={handleStopStream}
            className="px-4 py-3 bg-red-600 text-white rounded-lg bg-orange hover:bg-orange-200 transition duration-300"
          >
            Stop Training
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoStream;
