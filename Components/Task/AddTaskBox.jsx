import React from 'react';

const AddTaskBox = () => {
    return (
        <div className="flex align-middle pl-1 pr-4  pt-2 pb-2 rounded cursor-pointer mt-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

            <h1>Add Task</h1>
        </div>
    );
};

export default React.memo(AddTaskBox);
