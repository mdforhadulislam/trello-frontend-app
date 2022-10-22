import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import BoardAddInputBox from '../../Components/Dashboard/BoardAddInputBox'
import ListAddInputBox from '../../Components/Dashboard/ListAddInputBox'
import TaskAddInputBox from '../../Components/Dashboard/TaskAddInputBox'
import Layout from '../../Components/Layout'

const Dashboard = () => {
  const router = useRouter()
  const token = useSelector(state=>state.auth)

  if(!token.token){
      router.push("/auth/login")
  }
    return (
      <Layout title={"Dashboard"}>
        <div className="container pt-3 pb-6 m-auto">
          <div className="p-3">
            <div className=" pb-3 w-full">
              <h1 className=" text-4xl text-center title break-words">
                React Trellor App
              </h1>
            </div>
            <BoardAddInputBox />
            <ListAddInputBox />
            <TaskAddInputBox />
          </div>
        </div>
      </Layout>
    )
  
  
}

export default Dashboard