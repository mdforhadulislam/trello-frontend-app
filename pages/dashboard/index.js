import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRequestSend } from '../../Api/RequestMethod'
import { BOARD_URL, TOKEN_TO_USER } from '../../Api/Urls'
import BoardAddInputBox from '../../Components/Dashboard/BoardAddInputBox'
import ListAddInputBox from '../../Components/Dashboard/ListAddInputBox'
import TaskAddInputBox from '../../Components/Dashboard/TaskAddInputBox'
import Layout from '../../Components/Layout'
import { fetch_to_add_board } from '../../Redux/actions/board'

const Dashboard = () => {
  const [user,setUser] = useState(null)
  const [board,setBoard] = useState([])

  const router = useRouter()
  const token = useSelector(state=>state.auth)
  const dispatch = useDispatch()

  if(!token.token){
      setTimeout(()=>{
        router.push("/auth/login")
      },100)
  }

  useEffect(()=>{
    getRequestSend(TOKEN_TO_USER(token.token),{"authorization":token.token}).then(response=>{
      if(response.status===200){
        setUser(response.data.message)
      }
    })

    getRequestSend(BOARD_URL,{"authorization":token.token}).then(response=>{
      if(response.status===200){
        setBoard(response.data)
        dispatch(fetch_to_add_board(board))
      }
    })

  },[board, dispatch, token.token])


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