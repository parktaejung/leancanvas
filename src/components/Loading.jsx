import { AiOutlineLoading3Quarters } from 'react-icons/ai';
function Loading() {
  return (
    <div className="flex  justify-center items-center">
      <div className="text-center">
        <AiOutlineLoading3Quarters className="animate-spin text-6xl text-blue-500 mx-auto mb-4" />
        <p className="text-xl font-semibold text-gary-700">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
