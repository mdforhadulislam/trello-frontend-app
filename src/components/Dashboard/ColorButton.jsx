import React from "react";

const ColorButton = ({ color, actions }) => {
  return (
    <input
      value=""
      name={color}
      className={`w-[2rem] h-[2rem] mr-2 rounded shadow cursor-pointer`}
      type="button"
      style={{ background: color }}
      onClick={(e) => actions(e)}
    />
  );
};

export default ColorButton;
