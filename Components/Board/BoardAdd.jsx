import Image from 'next/image';
import React from 'react';
import PlusIcon from '../../public/icon/plus-icon.svg';

const BoardAdd = () => {
    return (
        <div className="w-[17rem] h-[4rem] inline-block m-2 bg-white p-2 rounded shadow-lg">
            <div className="w-full h-full border flex justify-center items-center align-middle cursor-pointer">
                <p className="text-lg mr-5">Add Board</p>
                <Image width={'30'} height={'30'} src={PlusIcon} alt={'Plus-Icon'} />
            </div>
        </div>
    );
};

export default BoardAdd;
