import React from 'react';

const BoardBox = ({ boardName, underListNumber, boardLink, bgColor }) => {
    return (
        <div className="w-[17rem] h-[7rem] inline-block m-2 bg-white p-2 rounded shadow-lg relative">
            <div className={`${bgColor}  h-[6rem] p-2 rounded flex`}>
                <a className="w-full text-left" href={boardLink}>
                    <div className="w-full ">
                        <h1 className=" font-semibold text-xl">{boardName}</h1>
                        <p>This board has {underListNumber} List</p>
                    </div>
                </a>
                <img
                    className="cursor-pointer z-50 w-[2rem] h-[2rem] absolute right-3 top-3"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAG9JREFUSEtjZKAxYKSx+QwjywIHBgaG+dAgTWRgYDhATPCSEkQPGBgY5KGGgtiK1LbgAwMDAz/U0IcMDAwK1LYAFEQLoIYm0CKIiHEwhhpS4oDmFoymIoJBPJqKiAqi0bIIbzCNpiKCqYgsBTQvTQFNkxgZM6/25AAAAABJRU5ErkJggg=="
                    alt="threeDot"
                />
            </div>
        </div>
    );
};

export default BoardBox;
