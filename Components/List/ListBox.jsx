import React, { useState } from 'react';
import AddInputTaskBox from '../Task/AddInputTaskBox';
import AddTaskBox from '../Task/AddTaskBox';
import TaskBox from '../Task/TaskBox';
import ListNameBox from './ListNameBox';

const ListBox = () => {
    const [listData, setListData] = useState({
        name: '',
        color: '',
        boardId: ''
    });

    return (
        <>
            <div className="w-[21rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3 relative">
                <div className=" bg-slate-200 pl-2 pr-0  pt-2 pb-2 rounded  max-h-[21rem] scrollBar overflow-auto ">
                    <ListNameBox title={'Hello'} />
                    <TaskBox title={'Tasd kcc cccccc cccccc ccccc cccc cccc cccc ggrdfg jyuikj'} />
                </div>
                <AddTaskBox />
                {false && <AddInputTaskBox />}
            </div>
        </>
    );
};

export default React.memo(ListBox);
