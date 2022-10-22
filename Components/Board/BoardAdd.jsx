import React from 'react';

const BoardAdd = ({ boardName, underListNumber, boardLink, bgColor }) => {
    return (
        <div className="w-[17rem] h-[4rem] inline-block m-2 bg-white p-2 rounded shadow-lg">
            <div className="w-full h-full border flex justify-center item-center">
                <p className="text-lg pl-1">Add Board</p>
                <span>
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50 10V90M90 50H50H10"
                            stroke="black"
                            stroke-width="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default BoardAdd;
