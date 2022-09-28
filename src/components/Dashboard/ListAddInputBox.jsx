import React from "react";
import ColorButton from "./ColorButton";

const boardArray = [
  {
    name: "Board 1",
    id: "Board 1",
    color: "Red",
  },
  {
    name: "Board 2",
    id: "Board 2",
    color: "Green",
  },
];

const ListAddInputBox = () => {
  return (
    <div
      className=" rounded max-w-[26rem] bg-white m-auto mb-5"
      style={{ boxShadow: "rgb(233 233 233) 0px 0px 10px 5px" }}
    >
      <div className="p-3 pb-4 text-center">
        <form>
          <div className="w-full h-auto">
            <label
              for="board_selected_board"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Select one board
            </label>
            <select
              name={"board_selected_board"}
              id={""}
              className="w-full h-auto mb-3 rounded"
            >
              {boardArray.map((s_board) => {
                return <option value={s_board.name}>{s_board.name}</option>;
              })}
            </select>
          </div>

          <input
            type="text"
            className=" w-full border outline-none p-1 text-[18px] rounded"
            placeholder="Enter Your List Name"
          />
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-0 sm:justify-between pt-3">
            <div className="items-center flex sm:w-[17rem]">
              <ColorButton color={"bg-red-300"} />
              <ColorButton color={"bg-orange-200"} />
              <ColorButton color={"bg-pink-200"} />
              <ColorButton color={"bg-blue-300"} />
              <ColorButton color={"bg-rose-200"} />
              <ColorButton color={"bg-purple-300"} />
            </div>
            <div className="right">
              <button
                type="submit"
                className="w-[8rem] bg-sky-500 text-white p-1 font-medium text-[18px] rounded ml-1"
              >
                Add List
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListAddInputBox;
