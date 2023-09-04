import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getRequestSend, postRequestSend } from '../../Api/RequestMethod';
import { LIST_URL, Task_URL } from '../../Api/Urls';
import { fetch_to_add_list } from '../../Redux/actions/List';
import { run_spinner, stop_spinner } from '../../Redux/actions/spinner';

const TaskAddInputBox = () => {
    const [lists, setLists] = useState([]);

    const [selectBoardId, setSelectBoardId] = useState('');
    const [selectListId, setSelectListId] = useState('');

    const [taskData, setTaskData] = useState({
        task: '',
        listId: ''
    });

    const boardList = useSelector((state) => state.board);
    const listList = useSelector((state) => state.lists);
    const token = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const submitHendler = (e) => {
        e.preventDefault();
        dispatch(run_spinner());
        postRequestSend(
            Task_URL(selectListId),
            { authorization: token.token },
            { task: taskData.task, listId: selectListId }
        ).then((response) => {
            if (response.status === 200) {
                toast.success('Successfully Add Task');
                dispatch(stop_spinner());
                setSelectBoardId('');
                setSelectListId('');
                setTaskData({ task: '', listId: '' });
            } else {
                toast.error('Failed to add List');
                dispatch(stop_spinner());
            }
        });
    };

    useEffect(() => {
        getRequestSend(LIST_URL(selectBoardId), { authorization: token.token }).then((response) => {
            if (response.status === 200) {
                setLists(response.data.data);
                dispatch(fetch_to_add_list(lists));
            }
        });
    }, [selectBoardId, selectListId, lists, token]);

    return (
        <div
            className="w-full h-full rounded bg-white m-auto mb-4"
            style={{ boxShadow: 'rgb(233 233 233) 0px 0px 10px 5px' }}>
            <div className="p-3 pb-4 text-center">
                <form>
                    <div className="w-full h-auto">
                        <select
                            name={'board_selected_box'}
                            className="w-full h-auto mb-3 rounded"
                            onChange={(e) => {
                                setSelectBoardId(e.target.value);
                            }}>
                            <option value="">Select one board</option>
                            {boardList?.length > 0
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

                    <div className="w-full h-auto">
                        <select
                            name={'list_selected_box'}
                            className="w-full h-auto mb-3 rounded"
                            onChange={(e) => setSelectListId(e.target.value)}>
                            <option value="">Select one List</option>

                            {lists?.length > 0
                                ? lists?.map((s_list) => {
                                      return (
                                          <option key={s_list?._id} value={s_list?._id}>
                                              {s_list?.name}
                                          </option>
                                      );
                                  })
                                : ''}
                        </select>
                    </div>

                    <input
                        type="text"
                        className=" w-full border outline-none p-1 text-[18px] rounded"
                        placeholder="Enter Your Task"
                        onChange={(e) => {
                            setTaskData({ task: e.target.value });
                        }}
                        value={taskData.task}
                    />

                    <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-0 sm:justify-between pt-3">
                        <div className="w-full pt-2">
                            <button
                                type="submit"
                                className="w-full bg-sky-500 text-white p-1 font-medium text-[18px] rounded"
                                onClick={submitHendler}>
                                Add Task
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(TaskAddInputBox);
