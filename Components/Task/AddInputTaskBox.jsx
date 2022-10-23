import React from 'react';

const AddInputTaskBox = () => {
    return (
        <div>
            <div class="flex bg-slate-200 justify-between  pl-2 pr-2 pt-2 pb-2 rounded mt-2 ">
                <form class="w-full">
                    <textarea
                        type="text"
                        class="w-full border-none outline-none p-1 mb-2 rounded resize-none"></textarea>
                    <div class="flex justify-between">
                        <button
                            type="submit"
                            class="p-1 bg-white shadow rounded mr-4 cursor-pointer pl-3 pr-3">
                            Add Task
                        </button>
                        <button type="button" class="text-xl text-red-600 cursor-pointer">
                            X
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddInputTaskBox;
