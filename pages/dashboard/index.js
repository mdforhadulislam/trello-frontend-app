import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestSend } from '../../Api/RequestMethod';
import { BOARD_URL, TOKEN_TO_USER } from '../../Api/Urls';
import DashLayout from '../../Components/DashLayout';
import BoardAddInputBox from '../../Components/Dashboard/BoardAddInputBox';
import ListAddInputBox from '../../Components/Dashboard/ListAddInputBox';
import TaskAddInputBox from '../../Components/Dashboard/TaskAddInputBox';
import { fetch_to_add_board } from '../../Redux/actions/board';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [board, setBoard] = useState([]);

    const router = useRouter();
    const token = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (!token.token) {
        setTimeout(() => {
            router.push('/auth/login');
        }, 100);
    }

    useEffect(() => {
        getRequestSend(BOARD_URL, { authorization: token.token }).then((response) => {
            if (response.status === 200) {
                setBoard(response.data.data);
                dispatch(fetch_to_add_board(board));
            }
        });
    }, [board]);

    return (
        <DashLayout>
            <div className="w-full h-auto grid grid-cols-6 grid-rows-[195px_minmax(210px,_.9fr)_250px] xl:grid-rows-[100px_minmax(0px,_1.1fr)_0px] gap-5 xl:gap-4">
                <div className="xl:col-span-2 col-start-2 col-span-4 xl:row-start-2 flex">
                    <BoardAddInputBox />
                </div>
                <div className="xl:col-span-2 col-start-2 col-span-4 xl:row-start-2 flex">
                    <ListAddInputBox />
                </div>
                <div className="xl:col-span-2 col-start-2 col-span-4 xl:row-start-2 flex">
                    <TaskAddInputBox />
                </div>
            </div>
        </DashLayout>
    );
};

export default Dashboard;
