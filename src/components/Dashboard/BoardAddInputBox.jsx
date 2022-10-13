import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { postRequestSend } from "../../api/RequestSendMethod";
import ColorButton from "./ColorButton";

const BoardAddInputBox = () => {
  const [boardData, setBoardData] = useState({
    name: "",
    color: "",
  });
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const cheangeHendler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBoardData({
      ...boardData,
      [name]: value,
    });
  };

  const colorClick = (e) => {
    let allColorButton = e.target.parentNode.children;
    for (let i = 0; i < allColorButton.length; i++) {
      const classList = allColorButton[i].classList;
      for (let i = 0; i < classList.length; i++) {
        if (classList[i] === "border-2" || classList[i] === "border-black") {
          classList.remove("border-2");
          classList.remove("border-black");
          setBoardData({ ...boardData, color: e.target.style.background });
          e.target.classList.add("border-2");
          e.target.classList.add("border-black");
        }
        if (classList[i] !== "border-2" || classList[i] !== "border-black") {
          setBoardData({ ...boardData, color: e.target.style.background });
          e.target.classList.add("border-2");
          e.target.classList.add("border-black");
        }
      }
    }
  };

  const onSubmitHendler = (e) => {
    e.preventDefault();
    dispatch({ type: "SPRING_RUN" });
    postRequestSend(
      "https://trello-apps.herokuapp.com/api/v1/boards/",
      { authorization: token.token },
      boardData
    ).then((response) => {
      dispatch({ type: "SPRING_STOP" });
      if (response.status === 200) {
        setBoardData({
          name: "",
          color: "",
        });
        toast.success(response.data.message);
      }
      if (response.status === 400) {
        toast.error(response.data.message);
      }
      if (response.status === 500) {
        toast.error(response.data.message);
      }
    });
  };

  return (
    <div
      className=" rounded max-w-[26rem] bg-white m-auto mb-6"
      style={{ boxShadow: "rgb(233 233 233) 0px 0px 10px 5px" }}
    >
      <div className="p-3 pb-4 text-center">
        <form>
          <input
            name="name"
            type="text"
            className=" w-full border outline-none p-1 text-[18px] rounded"
            placeholder="Enter Your Board Name"
            value={boardData.name}
            onChange={cheangeHendler}
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
                onClick={onSubmitHendler}
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
