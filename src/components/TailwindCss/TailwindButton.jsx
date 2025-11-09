const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transfrom hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-500"
    >
      {children}
    </button>
  );
};

export default Button;
