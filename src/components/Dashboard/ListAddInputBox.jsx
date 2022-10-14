import React from "react";
import { useSelector } from "react-redux";
import ColorButton from "./ColorButton";

const ListAddInputBox = () => {
  const allBoard = useSelector((state) => state.board);

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
              {allBoard.length > 0 &&
                allBoard?.map((s_board) => {
                  return (
                    <option
                      value={s_board.name}
                      key={`${s_board.name}${Math.floor(
                        Math.random() * 10000
                      )}`}
                    >
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
              <ColorButton color={"#f8b4b4"} actions={colorClick} />
              <ColorButton color={"#fcd9bd"} actions={colorClick} />
              <ColorButton color={"#fad1e8"} actions={colorClick} />
              <ColorButton color={"#a4cafe"} actions={colorClick} />
              <ColorButton color={"#ffcce3"} actions={colorClick} />
              <ColorButton color={"#cabffd"} actions={colorClick} />
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
