import React from "react";

const ColorButton = ({ color, action }) => {
  return (
    <input
      value=""
      name={color}
      className={`w-[2rem] h-[2rem] mr-2 rounded shadow cursor-pointer ${color}`}
      type="button"
      onclick={action}
    />
  );
};

export default ColorButton;
