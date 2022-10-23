import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import BoardAdd from '../../../Components/Board/BoardAdd'
import BoardBox from '../../../Components/Board/BoardBox'
import Layout from '../../../Components/Layout'

const Boards = () => {
  const token = useSelector(state=>state.auth)
  const router = useRouter()

    if(!token.token){ 
      setTimeout(()=>{
      router.push("/auth/login")
    },100)
    }

  return (
    <Layout title={"Boards"}>
        
        <div className=' text-center'>
          
      <BoardBox boardName={"Hello"} bgColor={"bg-pink-200"}boardLink={"/dashboard/boards/lists/hello"} underListNumber={10} />
      
      <BoardAdd  boardName={"Hello"} bgColor={"bg-pink-200"}boardLink={"/dashboard/boards/lists/hello"} underListNumber={10} />
        </div>

    </Layout>
  )
}

export default Boards