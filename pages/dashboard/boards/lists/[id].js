import React from 'react';
import Layout from '../../../../Components/Layout';
import AddListBox from '../../../../Components/List/AddListBox';
import AddListInputBox from '../../../../Components/List/AddListInputBox';
import ListBox from '../../../../Components/List/ListBox';

const List = () => {
    return (
        <Layout title={'Board Name'}>
            <div className='w-full h-auto overflow-x-scroll'>
            <div className="w-full h-full lg:h-[80vh] flex md:flex-row flex-col md:items-start items-center  align-top ">
                <ListBox />
                <ListBox />
                {false && <AddListBox />}
                {true && <AddListInputBox/>}
            </div>
            </div>
        </Layout>
    );
};

export default List;
