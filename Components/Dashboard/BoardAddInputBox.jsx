import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postRequestSend } from '../../Api/RequestMethod';
import { BOARD_URL } from '../../Api/Urls';
import { run_spinner, stop_spinner } from '../../Redux/actions/spinner';
import ColorButton from '../utils/ColorButton';

const BoardAddInputBox = () => {
    const [boardData, setBoardData] = useState({
        name: '',
        color: ''
    });

    const token = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const colorClick = (e, color) => {
        setBoardData({ ...boardData, color: color });
        let allColorButton = e.target.parentNode.children;
        for (let i = 0; i < allColorButton.length; i++) {
            const classList = allColorButton[i].classList;
            for (let i = 0; i < classList.length; i++) {
                if (classList[i] === 'border-2' || classList[i] === 'border-black') {
                    classList.remove('border-2');
                    classList.remove('border-black');
                    e.target.classList.add('border-2');
                    e.target.classList.add('border-black');
                }
                if (classList[i] !== 'border-2' || classList[i] !== 'border-black') {
                    e.target.classList.add('border-2');
                    e.target.classList.add('border-black');
                }
            }
        }
    };

    const submitHendler = (e) => {
        e.preventDefault();
        dispatch(run_spinner());
        postRequestSend(BOARD_URL, { authorization: token.token }, boardData).then((response) => {
            if (response.status === 200) {
                toast.success('Successfully Add Board');
                dispatch(stop_spinner());
            } else {
                toast.error(response.data.message);
                dispatch(stop_spinner());
            }
        });
    };

    return (
        <div
            className="w-full h-full  rounded bg-white m-auto mb-5"
            style={{ boxShadow: 'rgb(233 233 233) 0px 0px 10px 5px' }}>
            <div className="p-3 pb-1 text-center">
                <form onSubmit={submitHendler}>
                    <input
                        type="text"
                        className=" w-full border outline-none p-1 text-[18px] rounded"
                        placeholder="Enter Your Board Name"
                        value={boardData.name}
                        onChange={(e) => setBoardData({ ...boardData, name: e.target.value })}
                    />
                    <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-0 sm:justify-between pt-3">
                        <div className="items-center flex sm:w-[17rem]">
                            <ColorButton color={'bg-red-300'} action={colorClick} />
                            <ColorButton color={'bg-orange-200'} action={colorClick} />
                            <ColorButton color={'bg-pink-200'} action={colorClick} />
                            <ColorButton color={'bg-blue-300'} action={colorClick} />
                            <ColorButton color={'bg-rose-200'} action={colorClick} />
                            <ColorButton color={'bg-purple-300'} action={colorClick} />
                        </div>
                        <div className="right">
                            <button
                                type="submit"
                                className="w-[8rem] bg-sky-500 text-white p-1 font-medium text-[18px] rounded ml-1">
                                Add Bord
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="pt-1">
                <Link href="/dashboard/boards">
                    <div className="w-full h-auto p-2 flex justify-center items-center gap gap-2">
                        <div className="text-lg cursor-pointer">See All Boards</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 cursor-pointer">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default React.memo(BoardAddInputBox);
