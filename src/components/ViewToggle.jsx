import { FaList, FaTh } from 'react-icons/fa';

function ViewToggle({ gridChecked, setGridChecked }) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setGridChecked(true)}
        className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${gridChecked ? 'bg-blue-500 text-white' : 'bg-gray-200'} `}
        aria-label="Grid View"
      >
        <FaTh />
      </button>
      <button
        onClick={() => setGridChecked(false)}
        className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!gridChecked ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        <FaList />
      </button>
    </div>
  );
}

export default ViewToggle;
