import React, { useState, useEffect } from "react";

const Marquee = ({ text }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => position + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        width: "100%",
        color: "#ffffff"
      }}
    >
      <div
        style={{
          position: "absolute",
          left: position % 100 + "%",
          transition: "left 0.5s linear",
          background: "#000000"
        }}
      >
        {text ? text : "This is a sample text for the marquee component."}
      </div>
    </div>
  );
};

export default Marquee;