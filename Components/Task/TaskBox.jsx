import React from 'react';

const TaskBox = ({ title }) => {
    return (
        <div>
            <div class="flex p-2  m-2 mr-2 bg-white rounded justify-between align-middle">
                <div class="w-[16rem] h-auto relative">
                    <p class="break-words text-lg">{title}</p>
                </div>
                <div class="w-[1.3rem] h-auto cursor-pointer relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[25px] cursor-pointer z-0 h-full">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TaskBox;
