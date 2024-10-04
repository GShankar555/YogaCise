import React, { useEffect, useState } from "react";
import Speech from "./Speech";

const VideoStream = ({ userChoice, flag }) => {
  const [feedback, setFeedback] = useState("");
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState("");

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
    fetchFeedback();
    const interval = setInterval(fetchFeedback, 1000);
    return () => clearInterval(interval);
  }, []);
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
    const handleBeforeUnload = (event) => {
      const confirmationMessage = "Do you want to stop user training?";
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    const handleUnload = (event) => {
      if (videoElement) {
        videoElement.src = "";
      }
      cancelFeed();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
      const shouldStop = window.confirm("Do you want to stop user training?");
      if (videoElement && shouldStop) {
        videoElement.src = "";
        cancelFeed();
      } else {
        window.onsubmit((event) => {
          event.preventdefaults();
        });
        console.log("Video stream continues.");
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <img
            src={`http://localhost:5000/video_feed?id=${userChoice}&flag=${flag}`}
            alt="Live Stream"
          />
        </div>
        <div className="col-lg-4">
          <h3>Feedback: {feedback}</h3>
          <h3>Counter: {counter}</h3>
          <h3>State: {state}</h3>
          <Speech text={feedback}/>
        </div>
      </div>
    </div>
  );
};

export default VideoStream;