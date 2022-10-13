import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import BoardAddInputBox from "../components/Dashboard/BoardAddInputBox";
import ListAddInputBox from "../components/Dashboard/ListAddInputBox";
import TaskAddInputBox from "../components/Dashboard/TaskAddInputBox";

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token);

  if (token.token === "") {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <div className="container pt-3 pb-6 m-auto">
        <div className="p-5">
          {/* <div className=" pb-3 w-full">
            <h1 className=" text-4xl text-center title break-words">
              React Trellor App
            </h1>
          </div> */}
          <BoardAddInputBox />
          <ListAddInputBox />
          <TaskAddInputBox />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
