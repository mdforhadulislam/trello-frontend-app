import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { putRequestSend } from '../../Api/RequestMethod';
import { BOARD_PUT_URL } from '../../Api/Urls';
import { run_spinner, stop_spinner } from '../../Redux/actions/spinner';

const BoardEditInputBox = ({ currentValue, closeOption, boardId }) => {
    const [name, setName] = React.useState(currentValue);
    const token = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const saveHendler = () => {
        dispatch(run_spinner());
        putRequestSend(BOARD_PUT_URL(boardId), { authorization: token.token }, { name: name }).then(
            (response) => {
                setName('');
                if (response.status === 200) {
                    toast.success('Board successfully updated');
                    dispatch(stop_spinner());
                    closeOption(false);
                } else {
                    toast.success('failed to update Board');
                }
            }
        );
    };

    return (
        <div className=" absolute w-[16.5rem] h-[5rem]  bg-white rounded left-[11px] top-[11px] p-2 z-[80]">
            <input
                type="text"
                className="border outline-none w-full p-1 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <div className="flex justify-between mt-1">
                <button className=" bg-slate-200 shadow pl-3 pr-3 rounded" onClick={saveHendler}>
                    Save
                </button>
                <button className="text-xl text-red-600 cursor-pointer" onClick={closeOption}>
                    X
                </button>
            </div>
        </div>
    );
};

export default React.memo(BoardEditInputBox);
