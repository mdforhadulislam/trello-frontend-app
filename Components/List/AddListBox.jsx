import React from 'react';

const AddListBox = ({ onClickHendler }) => {
    return (
        <div
            className="w-[20rem] h-auto p-2 bg-white rounded shadow-md inline-block m-3"
            onClick={onClickHendler}>
            <div className="w-[20rem] flex bg-slate-200 items-center justify-center align-middle text-white pl-2 pr-4  pt-2 pb-2 rounded cursor-pointer">
                <h3 className="text-slate-900 text-lg font-medium">Add List</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2 text-slate-900 ">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default AddListBox;
