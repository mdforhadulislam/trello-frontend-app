import React from 'react';

const InputBox = ({ name, placeholder, type, action, value, styles }) => {
    return (
        <span className="flex shadow-md  shadow-[#e9e9e9]  mb-5 text-xs">
            <span className="bg-[#3056d3] w-32 text-center text-base text-gray-200 p-3 px-5 rounded-l">
                {placeholder}
            </span>
            <input
                className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full border "
                type={type}
                name={name}
                placeholder=""
                style={styles}
                onChange={action}
                value={value}
            />
        </span>
    );
};

export default React.memo(InputBox);
