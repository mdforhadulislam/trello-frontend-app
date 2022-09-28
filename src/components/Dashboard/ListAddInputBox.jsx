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
  const colorClick = (e) => {
    let allColorButton = e.target.parentNode.children;
    for (let i = 0; i < allColorButton.length; i++) {
      const classList = allColorButton[i].classList;
      for (let i = 0; i < classList.length; i++) {
        if (classList[i] === "border-2" || classList[i] === "border-black") {
          classList.remove("border-2");
          classList.remove("border-black");
          e.target.classList.add("border-2");
          e.target.classList.add("border-black");
        }
        if (classList[i] !== "border-2" || classList[i] !== "border-black") {
          e.target.classList.add("border-2");
          e.target.classList.add("border-black");
        }
      }
    }
  };
  return (
    <div
      className=" rounded max-w-[26rem] bg-white m-auto mb-6"
      style={{ boxShadow: "rgb(233 233 233) 0px 0px 10px 5px" }}
    >
      <div className="p-3 pb-4 text-center">
        <form>
          <div className="w-full h-auto">
            <select
              name={"board_selected_box"}
              id={""}
              className="w-full h-auto mb-3 rounded"
            >
              <option value="">Select one board</option>
              {boardArray.map((s_board) => {
                return (
                  <option value={s_board.name} key={s_board.id}>
                    {s_board.name}
                  </option>
                );
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
              <ColorButton color={"bg-red-300"} actions={colorClick} />
              <ColorButton color={"bg-orange-200"} actions={colorClick} />
              <ColorButton color={"bg-pink-200"} actions={colorClick} />
              <ColorButton color={"bg-blue-300"} actions={colorClick} />
              <ColorButton color={"bg-rose-200"} actions={colorClick} />
              <ColorButton color={"bg-purple-300"} actions={colorClick} />
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
