import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingScreen = ({ size, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="content-center">
      <PacmanLoader size={size} color={color} />
    </div>
  );
};

export default LoadingScreen;
