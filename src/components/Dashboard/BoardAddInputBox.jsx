import React from "react";
import ColorButton from "./ColorButton";

const BoardAddInputBox = () => {
  return (
    <div
      class=" rounded w-[25rem] bg-white m-auto mb-5"
      style={{ boxShadow: "rgb(233 233 233) 0px 0px 10px 5px" }}
    >
      <div class="p-3 pb-4 text-center">
        <form>
          <input
            type="text"
            class=" w-full border outline-none p-1 text-[18px] rounded"
            value=""
          />
          <div class="flex justify-between pt-3">
            <div class="left flex w-[17rem]">
              <ColorButton color={"bg-red-300"} />
              <ColorButton color={"bg-orange-200"} />
              <ColorButton color={"bg-pink-200"} />
              <ColorButton color={"bg-blue-300"} />
              <ColorButton color={"bg-rose-200"} />
              <ColorButton color={"bg-purple-300"} />
            </div>
            <div class="right">
              <button
                type="submit"
                class="w-[8rem] bg-sky-500 text-white p-1 font-medium text-[18px] rounded ml-1"
              >
                Add Bord
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardAddInputBox;
