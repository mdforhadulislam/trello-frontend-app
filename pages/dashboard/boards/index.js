import React from 'react'
import BoardAdd from '../../../Components/Board/BoardAdd'
import BoardBox from '../../../Components/Board/BoardBox'
import Layout from '../../../Components/Layout'

const index = () => {
  return (
    <Layout title={"Boards"}>
        
      <BoardBox boardName={"Hello"} bgColor={"bg-pink-200"}boardLink={"/dashboard/boards/lists/hello"} underListNumber={10} />
      
      <BoardAdd  boardName={"Hello"} bgColor={"bg-pink-200"}boardLink={"/dashboard/boards/lists/hello"} underListNumber={10} />
    </Layout>
  )
}

export default index