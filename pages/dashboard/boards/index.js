import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestSend } from '../../../Api/RequestMethod';
import { BOARD_URL } from '../../../Api/Urls';
import BoardAdd from '../../../Components/Board/BoardAdd';
import BoardBox from '../../../Components/Board/BoardBox';
import BoardInputBox from '../../../Components/Board/BoardInputBox';
import DashLayout from '../../../Components/DashLayout';
import { fetch_to_add_board } from '../../../Redux/actions/board';

const Boards = () => {
    const token = useSelector((state) => state.auth);
    const [isBoardAdd, setIsBoardAdd] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch();
    const s_board = useSelector((state) => state.board);

    useEffect(() => {
        getRequestSend(BOARD_URL, { authorization: token.token }).then((response) => {
            if (response.status === 200) {
                dispatch(fetch_to_add_board(response.data.data));
            }
        });
    }, [s_board, dispatch, token.token]);

    if (!token.token) {
        setTimeout(() => {
            router.push('/auth/login');
        }, 1500);
    }

    if (token.token) {
        return (
            <DashLayout title={'Boards'}>
                <div className=" text-center">
                    {s_board?.map((board) => {
                        return (
                            <BoardBox
                                key={board?._id}
                                boardId={board?._id}
                                boardName={board?.name}
                                bgColor={board?.color || 'bg-pink-200'}
                                boardLink={`/dashboard/boards/lists/${board._id}`}
                                underListNumber={10}
                            />
                        );
                    })}
                    {!isBoardAdd && (
                        <BoardAdd
                            boardName={'Hello'}
                            bgColor={'bg-pink-200'}
                            boardLink={'/dashboard/boards/lists/hello'}
                            underListNumber={10}
                            onclick={() => setIsBoardAdd(!isBoardAdd)}
                        />
                    )}

                    {isBoardAdd && <BoardInputBox closeButton={() => setIsBoardAdd(!isBoardAdd)} />}
                </div>
            </DashLayout>
        );
    }
};

export default Boards;
