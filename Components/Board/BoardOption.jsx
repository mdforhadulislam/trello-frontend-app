import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteRequestSend } from '../../Api/RequestMethod';
import { BOARD_DELETE_URL } from '../../Api/Urls';
import { run_spinner, stop_spinner } from '../../Redux/actions/spinner';

const BoardOption = ({ boardId }) => {
    const token = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const deleteHendler = () => {
        dispatch(run_spinner());
        deleteRequestSend(BOARD_DELETE_URL(boardId), { authorization: token.token }).then(
            (response) => {
                if (response.status === 200) {
                    toast.success('successfully deleted board');
                    dispatch(stop_spinner());
                } else {
                    toast.error('failed to delete board');
                    dispatch(stop_spinner());
                }
            }
        );
    };

    return (
        <div class="absolute bg-slate-100 w-[11rem] shadow rounded top-[.5rem] left-[5.5rem] z-10">
            <ul class=" rounded">
                <li class="hover:bg-teal-500 rounded p-[3px] pl-2 pr-2 hover:text-white cursor-pointer text-lg  ">
                    Edit Title
                </li>
                <li
                    class="hover:bg-teal-500 rounded p-[3px] pl-2 pr-2 hover:text-white cursor-pointer text-lg"
                    onClick={deleteHendler}>
                    Delete List
                </li>
            </ul>
        </div>
    );
};

export default BoardOption;
