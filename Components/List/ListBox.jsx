import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getRequestSend } from '../../Api/RequestMethod';
import { S_LIST_URL, Task_URL } from '../../Api/Urls';
import AddInputTaskBox from '../Task/AddInputTaskBox';
import AddTaskBox from '../Task/AddTaskBox';
import TaskBox from '../Task/TaskBox';
import ListNameBox from './ListNameBox';

const ListBox = ({ ListId }) => {
    const [listData, setListData] = useState({
        name: '',
        color: '',
        boardId: ''
    });

    const token = useSelector((state) => state.auth);
    const router = useRouter();

    const [task, setTask] = useState([]);
    const [list, setList] = useState(null);

    useEffect(() => {
        getRequestSend(S_LIST_URL(ListId), { authorization: token.token }).then((response) => {
            setList(response.data.data);
        });
        getRequestSend(Task_URL(ListId), { authorization: token.token }).then((response) => {
            setTask(response.data.data);
        });
    }, [task, ListId, token.token]);

    return (
        <>
            <div className="w-[21rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3 relative">
                <div className=" bg-slate-200 pl-2 pr-0  pt-2 pb-2 rounded  max-h-[21rem] scrollBar overflow-auto ">
                    <ListNameBox title={list?.name} />
                    {task.map((s_task) => (
                        <TaskBox title={s_task?.task} key={s_task?._id} />
                    ))}
                </div>
                <AddTaskBox />
                {false && <AddInputTaskBox />}
            </div>
        </>
    );
};

export default React.memo(ListBox);
