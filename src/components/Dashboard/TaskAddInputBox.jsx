import React from "react";

const TaskAddInputBox = () => {
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
  return (
    <div
      className=" rounded max-w-[26rem] bg-white m-auto mb-4"
      style={{ boxShadow: "rgb(233 233 233) 0px 0px 10px 5px" }}
    >
      <div className="p-3 pb-4 text-center">
        <form>
          <div className="w-full h-auto">
            <select
              name={"board_selected_box"}
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

          <div className="w-full h-auto">
            <select
              name={"list_selected_box"}
              className="w-full h-auto mb-3 rounded"
            >
              <option value="">Select one List</option>
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
            placeholder="Enter Your Task"
          />

          <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-0 sm:justify-between pt-3">
            <div className="right">
              <button
                type="submit"
                className="w-[8rem] bg-sky-500 text-white p-1 font-medium text-[18px] rounded ml-1"
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskAddInputBox;
