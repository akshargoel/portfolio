const Alert = ({ type, text }) => {
  return (
    <div className='fixed top-20 left-0 right-0 flex justify-center items-center z-50 px-4'>
      <div
        className={`p-4 ${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } text-white rounded-lg shadow-lg flex items-center gap-4 max-w-xl w-full`}
        role='alert'
      >
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </span>
        <p className='text-sm'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
