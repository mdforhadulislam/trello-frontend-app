import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 bg-gray-100 opacity-40 z-50">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
