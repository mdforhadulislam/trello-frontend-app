import React from 'react'
import Layout from '../../../../Components/Layout'
import AddListInputBox from '../../../../Components/List/AddListInputBox'
import ListBox from '../../../../Components/List/ListBox'

const List = () => {

  return (
    <Layout title={"Board Name"}>
      <div className='w-full h-full lg:h-[105vh] flex md:flex-row flex-col md:items-start items-center  align-top '>
      <ListBox/>
      <AddListInputBox/>
      </div>
    </Layout>
  )
}

export default List