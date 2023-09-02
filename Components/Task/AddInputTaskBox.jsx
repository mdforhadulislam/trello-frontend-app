import React from 'react';

const AddInputTaskBox = () => {
    return (
        <div>
            <div className="flex bg-slate-200 justify-between  pl-2 pr-2 pt-2 pb-2 rounded mt-2 ">
                <form className="w-full">
                    <textarea
                        type="text"
                        className="w-full border-none outline-none p-1 mb-2 rounded resize-none"></textarea>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="p-1 bg-white shadow rounded mr-4 cursor-pointer pl-3 pr-3">
                            Add Task
                        </button>
                        <button type="button" className="text-xl text-red-600 cursor-pointer">
                            X
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(AddInputTaskBox);
