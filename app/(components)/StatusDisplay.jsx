const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-300";
        return color;
      case "started":
        color = "bg-blue-300";
        return color;
      case "not started":
        color = "bg-red-300";
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block text-xs font-semibold rounded-full px-2 py-1 text-gray-500 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};
export default StatusDisplay;
