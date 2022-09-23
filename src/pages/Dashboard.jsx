import React from "react";
import BoardAddInputBox from "../components/Dashboard/BoardAddInputBox";

const Dashboard = () => {
  return (
    <>
      <div className="container pt-3 pb-6 m-auto">
        <div class="p-5">
          <div class=" pb-3 w-full">
            <h1 class=" text-4xl text-center title break-words">
              React Trellor App
            </h1>
          </div>
          <BoardAddInputBox />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
