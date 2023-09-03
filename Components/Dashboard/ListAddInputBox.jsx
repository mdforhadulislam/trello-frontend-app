import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postRequestSend } from '../../Api/RequestMethod';
import { LIST_URL } from '../../Api/Urls';
import { run_spinner, stop_spinner } from '../../Redux/actions/spinner';
import ColorButton from '../utils/ColorButton';

const ListAddInputBox = () => {
    const [listData, setListData] = useState({
        name: '',
        color: '',
        boardId: ''
    });
    const boardList = useSelector((state) => state.board);
    const token = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const colorClick = (e, color) => {
        setListData({ ...listData, color: color });
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
        postRequestSend(LIST_URL(listData.boardId), { authorization: token.token }, listData).then(
            (response) => {
                if (response.status === 200) {
                    toast.success('Successfully Add List');
                    dispatch(stop_spinner());
                    setListData({ name: '', color: '', boardId: '' });
                } else {
                    toast.error('Failed to add List');
                    dispatch(stop_spinner());
                }
            }
        );
    };

    return (
        <div
            className="w-full h-full  rounded bg-white m-auto mb-5"
            style={{ boxShadow: 'rgb(233 233 233) 0px 0px 10px 5px' }}>
            <div className="p-3 pb-4 text-center">
                <form onSubmit={submitHendler}>
                    <div className="w-full h-auto">
                        <select
                            name={'board_selected_board'}
                            id={''}
                            value={listData.boardId}
                            onChange={(e) => {
                                setListData({ ...listData, boardId: e.target.value });
                            }}
                            className="w-full h-auto mb-3 rounded">
                            <option value="">Select one Board</option>
                            {boardList.length > 0
                                ? boardList?.map((s_board) => {
                                      return (
                                          <option key={s_board?._id} value={s_board?._id}>
                                              {s_board?.name}
                                          </option>
                                      );
                                  })
                                : ''}
                        </select>
                    </div>

                    <input
                        type="text"
                        className=" w-full border outline-none p-1 text-[18px] rounded"
                        placeholder="Enter Your List Name"
                        value={listData.name}
                        onChange={(e) => {
                            setListData({ ...listData, name: e.target.value });
                        }}
                    />
                    <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-0 sm:justify-between pt-3">
                        <div className="items-center flex sm:w-[17rem]">
                            {' '}
                            <ColorButton
                                color={'bg-red-300'}
                                action={(e, color) => colorClick(e, color)}
                            />
                            <ColorButton
                                color={'bg-orange-200'}
                                action={(e, color) => colorClick(e, color)}
                            />
                            <ColorButton
                                color={'bg-pink-200'}
                                action={(e, color) => colorClick(e, color)}
                            />
                            <ColorButton
                                color={'bg-blue-300'}
                                action={(e, color) => colorClick(e, color)}
                            />
                            <ColorButton
                                color={'bg-rose-200'}
                                action={(e, color) => colorClick(e, color)}
                            />
                            <ColorButton
                                color={'bg-purple-300'}
                                action={(e, color) => colorClick(e, color)}
                            />
                        </div>
                        <div className="right">
                            <button
                                type="submit"
                                className="w-[8rem] bg-sky-500 text-white p-1 font-medium text-[18px] rounded ml-1">
                                Add List
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(ListAddInputBox);
