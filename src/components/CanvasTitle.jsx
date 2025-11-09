import { useEffect, useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';

function CanvasTitle({ title, onChange }) {
  const [titleText, setTitleText] = useState(title);
  const [isEditable, setIsEditable] = useState(false);
  useEffect(() => {
    setTitleText(title);
  }, [title]);
  const handleDoneTitle = () => {
    setIsEditable(false);
    onChange(titleText);
  };
  return (
    <div className="  flex items-center justify-center mb-10">
      {isEditable ? (
        <div>
          <input
            type="text"
            value={titleText}
            onChange={e => {
              setTitleText(e.target.value);
            }}
            className="text-4xl text-blue-500 border-b-2 font-bold border-b-blue-600 bg-transparent border-blue-600 focus:outline-none text-center"
          />
          <button
            onClick={handleDoneTitle}
            className="ml-2 p-2 font-bold rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            <FaCheck />
          </button>
        </div>
      ) : (
        <>
          <h1 className="font-bold text-4xl text-center">{titleText} </h1>
          <button
            onClick={() => setIsEditable(true)}
            className="ml-2 p-2 font-bold  rounded-full  text-white bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focue:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            <FaEdit />
          </button>
        </>
      )}
    </div>
  );
}

export default CanvasTitle;
