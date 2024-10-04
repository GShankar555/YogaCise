import React, { useState } from "react";
import "../BodyPartHighlight.css";

const BodyPartHighlight = () => {
  const [hoveredPart, setHoveredPart] = useState(null);

  const handleMouseEnter = (part) => {
    setHoveredPart(part);
  };

  const handleMouseLeave = () => {
    setHoveredPart(null);
  };

  return (
    <svg
      viewBox="0 0 200 400"
      xmlns="http://www.w3.org/2000/svg"
      className="human-body-svg"
    >
      <g id="body">
        <path
          d="M50 100 C 70 80, 130 80, 150 100 C 160 110, 160 140, 150 150 C 130 170, 70 170, 50 150 C 40 140, 40 110, 50 100"
          fill={hoveredPart === "chest" ? "#FFDD57" : "#cccccc"}
          onMouseEnter={() => handleMouseEnter("chest")}
          onMouseLeave={handleMouseLeave}
        />
        {/* Repeat similar <path> elements for other body parts */}
      </g>
    </svg>
  );
};

export default BodyPartHighlight;
