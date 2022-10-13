import React from "react";
import { useSelector } from "react-redux";
import BoardCard from "../components/Dashboard/BoardCard";

const Boards = () => {
  const allBoard = useSelector((state) => state.board);

  return (
    <div class="w-11/12 m-auto text-center pb-4">
      {allBoard?.map((board) => (
        <BoardCard link={`/dashboard/boards/${board._id}`} title={board.name} />
      ))}
    </div>
  );
};

export default Boards;
