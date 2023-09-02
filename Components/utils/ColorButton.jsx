import React from 'react';

const ColorButton = ({ color, action }) => {
    return (
        <button
            className={`w-[2rem] h-[2rem] mr-2 rounded shadow ${color} `}
            type="button"
            onClick={(e) => action(e, color)}></button>
    );
};

export default React.memo(ColorButton);
