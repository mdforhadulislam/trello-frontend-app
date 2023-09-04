import Link from 'next/link';
import React, { useState } from 'react';
import BoardEditInputBox from './BoardEditInputBox';
import BoardOption from './BoardOption';

const BoardBox = ({ boardId, boardName, underListNumber, boardLink, bgColor }) => {
    const [isOption, setIsOption] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const editCloseOption = () => {
        setIsEdit(false);
    };

    return (
        <div className="w-[18rem] h-[6.5rem] inline-block m-2 bg-white p-2 rounded shadow-lg relative">
            {isEdit && (
                <BoardEditInputBox
                    currentValue={boardName}
                    closeOption={editCloseOption}
                    boardId={boardId}
                />
            )}

            <div className={`${bgColor}  h-[5.5rem] p-2 rounded flex`}>
                <Link className="w-full text-left" href={boardLink}>
                    <div className="w-full ">
                        <h1 className=" font-semibold text-xl">{boardName}</h1>
                    </div>
                </Link>
                <img
                    className="cursor-pointer z-50 w-[2rem] h-[2rem] absolute right-3 top-3"
                    onClick={() => setIsOption(!isOption)}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAG9JREFUSEtjZKAxYKSx+QwjywIHBgaG+dAgTWRgYDhATPCSEkQPGBgY5KGGgtiK1LbgAwMDAz/U0IcMDAwK1LYAFEQLoIYm0CKIiHEwhhpS4oDmFoymIoJBPJqKiAqi0bIIbzCNpiKCqYgsBTQvTQFNkxgZM6/25AAAAABJRU5ErkJggg=="
                    alt="threeDot"
                />
            </div>
            {isOption && (
                <BoardOption
                    boardId={boardId}
                    setIsOption={setIsOption}
                    isOption={isOption}
                    setIsEdit={setIsEdit}
                    isEdit={isEdit}
                />
            )}
        </div>
    );
};

export default React.memo(BoardBox);
