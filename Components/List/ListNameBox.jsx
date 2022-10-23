import React from 'react';
import ListOptions from './ListOptions';

const ListNameBox = ({ title }) => {
    return (
        <div class="flex  justify-between w-[19rem]  align-middle">
            <h1 class="text-slate-900 text-lg font-medium w-[16rem] break-words">{title}</h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[35px] cursor-pointer z-20 h-full">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
            </svg>
            {false && <ListOptions />}
        </div>
    );
};

export default ListNameBox;
