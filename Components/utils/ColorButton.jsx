const ColorButton = ({ color, action }) => {
    return (
        <button
            className={`w-[2rem] h-[2rem] mr-2 rounded shadow ${color} `}
            type="button"
            onClick={action}></button>
    );
};

export default ColorButton;
