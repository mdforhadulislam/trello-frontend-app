import React, { useState } from "react";
import { Link } from "react-router-dom";

const BoardCard = ({ link, title, listNumber, color }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isOption, setIsOption] = useState(false);

  return (
    <div className="w-[17rem] h-[6rem] inline-block m-2 bg-white p-2 rounded shadow-lg relative">
      <div className="h-[5rem] p-2 rounded flex" style={{ background: color }}>
        <Link to={link} className="w-full text-left">
          <div className={`w-full p-[3px] ${isEdit ? "hidden" : "block"} `}>
            <h1 className=" font-semibold text-xl capitalize">{title}</h1>
          </div>
        </Link>

        <div className="cursor-pointer z-50 w-[2rem] h-[1.8rem] flex justify-center items-center absolute rounded-md border border-slate-800 right-3 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
