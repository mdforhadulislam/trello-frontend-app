import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestSend } from '../../../../Api/RequestMethod';
import { LIST_URL } from '../../../../Api/Urls';
import DashLayout from '../../../../Components/DashLayout';
import AddListBox from '../../../../Components/List/AddListBox';
import AddListInputBox from '../../../../Components/List/AddListInputBox';
import ListBox from '../../../../Components/List/ListBox';
import { fetch_to_add_list } from '../../../../Redux/actions/List';

const List = () => {
    const [lists, setLists] = useState([]);
    const [isAddList, setIsAddList] = useState(false);
    const token = useSelector((state) => state.auth);
    const router = useRouter();
    const list = useSelector((state) => state.list);
    const board = useSelector((state)=>state.board)

    const dispatch = useDispatch();

    useEffect(() => {
        getRequestSend(LIST_URL(router.query.id), { authorization: token.token }).then(
            (response) => {
                if (response.status === 200) {
                    setLists(response.data.data);
                }
            }
        );
    }, [dispatch, lists, router.query.id, token.token]);
    return (
        <DashLayout title={`${router.query.id} Board`}>
            <div className="w-full h-auto overflow-x-scroll">
                <div className="w-full h-full lg:h-[80vh] flex md:flex-row flex-col md:items-start items-center  align-top ">
                    {list?.map((s_list) => {
                        return <ListBox key={s_list?._id} ListId={s_list?._id} />;
                    })}

                    {!isAddList && <AddListBox onClickHendler={() => setIsAddList(!isAddList)} />}
                    {isAddList && (
                        <AddListInputBox onSubmitHendler={() => {}} cencleHendler={() => {}} />
                    )}
                </div>
            </div>
        </DashLayout>
    );
};

export default List;
