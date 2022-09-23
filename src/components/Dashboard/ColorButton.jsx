import React from "react";

const ColorButton = ({ color }) => {
  return (
    <button
      class={`w-[2rem] h-[2rem] mr-2 rounded shadow ${color} `}
      type="button"
    ></button>
  );
};

export default ColorButton;
