import React from 'react';

function Error({ message, onRetry }) {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center p-8">
        <p className="font-semibold text-xl text-red-600 mb-2">{message}</p>
        <button
          onClick={onRetry}
          className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opcacity-50"
        >
          재시도
        </button>
      </div>
    </div>
  );
}

export default Error;
