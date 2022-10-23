import React from 'react';

const ListOptions = () => {
    return (
        <div class="absolute bg-slate-100 w-[10rem] shadow rounded top-[.5rem] left-[10.5rem] z-10">
            <ul class=" rounded">
                <li class="hover:bg-teal-500 rounded p-[3px] pl-2 pr-2 hover:text-white cursor-pointer text-lg  ">
                    Edit Title
                </li>
                <li class="hover:bg-teal-500 rounded p-[3px] pl-2 pr-2 hover:text-white cursor-pointer text-lg ">
                    Delete List
                </li>
                <li class="hover:bg-teal-500 rounded  p-[3px] pl-2 pr-2 hover:text-white cursor-pointer text-lg ">
                    Move List
                </li>
                <li class="hover:bg-teal-500 rounded  p-[3px] pl-2 pr-2 hover:text-white cursor-pointer text-lg ">
                    Copy List
                </li>
            </ul>
        </div>
    );
};

export default ListOptions;
