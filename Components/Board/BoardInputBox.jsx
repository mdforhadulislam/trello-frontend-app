import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postRequestSend } from '../../Api/RequestMethod';
import { BOARD_URL } from '../../Api/Urls';
import { run_spinner, stop_spinner } from '../../Redux/actions/spinner';
import ColorButton from '../utils/ColorButton';

const BoardInputBox = ({ closeButton }) => {
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
                setBoardData({
                    name: '',
                    color: ''
                });
                toast.success('Successfully Add Board');
                dispatch(stop_spinner());
            } else {
                toast.error(response.data.message);
                dispatch(stop_spinner());
            }
        });
    };

    return (
        <div className="w-[22rem] h-auto p-2 bg-white rounded shadow-md inline-block">
            <div className="w-[21rem] flex bg-slate-200 justify-between  pl-2 pr-2 pt-2 pb-2 rounded mt-2 ">
                <form className="w-full" onSubmit={submitHendler}>
                    <div className="w-full h-auto flex ">
                        <input
                            type="text"
                            className=" w-full border outline-none p-1 text-[18px] rounded"
                            placeholder="Enter Your Board Name"
                            value={boardData.name}
                            onChange={(e) => setBoardData({ ...boardData, name: e.target.value })}
                        />
                        <button
                            type="button"
                            className="ml-2 text-xl text-red-600 cursor-pointer"
                            onClick={closeButton}>
                            X
                        </button>
                    </div>

                    <div className="w-full h-auto flex pt-2">
                        <div className="items-center flex">
                            <ColorButton color={'bg-red-300'} action={colorClick} />
                            <ColorButton color={'bg-orange-200'} action={colorClick} />
                            <ColorButton color={'bg-pink-200'} action={colorClick} />
                            <ColorButton color={'bg-blue-300'} action={colorClick} />
                            <ColorButton color={'bg-rose-200'} action={colorClick} />
                            <ColorButton color={'bg-purple-300'} action={colorClick} />
                        </div>
                        <button
                            type="submit"
                            className="bg-white shadow rounded cursor-pointer p-[8px] py-[5px]">
                            Add List
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(BoardInputBox);
