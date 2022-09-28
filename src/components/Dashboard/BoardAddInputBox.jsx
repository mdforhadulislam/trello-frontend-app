import React from "react";
import { Link } from "react-router-dom";
import ColorButton from "./ColorButton";

const BoardAddInputBox = () => {
  return (
    <div
      className=" rounded max-w-[26rem] bg-white m-auto mb-6"
      style={{ boxShadow: "rgb(233 233 233) 0px 0px 10px 5px" }}
    >
      <div className="p-3 pb-4 text-center">
        <form>
          <input
            type="text"
            className=" w-full border outline-none p-1 text-[18px] rounded"
            placeholder="Enter Your Board Name"
          />
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-0 sm:justify-between pt-3">
            <div className="items-center flex sm:w-[17rem]">
              <ColorButton color={"bg-red-300"} action={} />
              <ColorButton color={"bg-orange-200"} action={} />
              <ColorButton color={"bg-pink-200"} action={} />
              <ColorButton color={"bg-blue-300"} action={} />
              <ColorButton color={"bg-rose-200"} action={} />
              <ColorButton color={"bg-purple-300"} action={} />
            </div>
            <div className="right">
              <button
                type="submit"
                className="w-[8rem] bg-sky-500 text-white p-1 font-medium text-[18px] rounded ml-1"
              >
                Add Bord
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="pt-2">
        <Link to="/dashboard/boards">
          <div className="w-full h-auto p-2 flex justify-center items-center gap gap-2">
            <div className="text-base ">See All Boards</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BoardAddInputBox;
