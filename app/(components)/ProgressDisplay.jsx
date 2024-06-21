const ProgressDisplay = ({ progress }) => {
  return (
    <div className="bg-gray-200 rounded-full w-full h-2.5">
      <div
        className="bg-blue-600 rounded-full h-2.5"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
