import React from "react";

const VideoStream = ({userChoice,flag}) => {
  console.log(userChoice);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <img
            src={`http://localhost:5000/video_feed?id=${userChoice}&flag=${flag}`}
            alt="Live Stream"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoStream;
