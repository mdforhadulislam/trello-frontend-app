import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestSend } from "../api/RequestSendMethod";
import BoardCard from "../components/Board/BoardCard";

const Boards = () => {
  const allBoard = useSelector((state) => state.board);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    getRequestSend("https://trello-apps.herokuapp.com/api/v1/boards/", {
      authorization: token.token,
    }).then((response) => {
      dispatch({ type: "ALL_BOARD_FETCH", payload: response.data });
    });
  }, []);

  return (
    <div className="w-11/12 m-auto text-center pb-4">
      {allBoard?.map((board) => (
        <BoardCard
          link={`/dashboard/boards/${board._id}`}
          title={board.name}
          key={`${board.name}${Math.floor(Math.random() * 10000)}`}
          color={board.color}
        />
      ))}
    </div>
  );
};

export default Boards;
