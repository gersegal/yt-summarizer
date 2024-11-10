import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingScreen = ({ size, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (

    <div class="flex justify-center items-center"> 
      <div class="bg-white w-3/12 py-24">
      <PacmanLoader size={size} color={color} />
      </div>
    </div>
  
  );
};

export default LoadingScreen;
