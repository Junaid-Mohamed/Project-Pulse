

// eslint-disable-next-line react/prop-types
const StatCard = ({ title, count, icon, color, bgColor }) => {
  return (
    <div className={`w-48 h-36 p-4 ${bgColor} rounded-lg shadow-md flex flex-col justify-between`}>
      {/* Icon at Top Left */}
      <div className={`text-3xl ${color}`}>{icon}</div>

      {/* Count in the Middle */}
      <h2 className={`text-4xl font-bold text-center ${bgColor!='bg-white'?'text-white':''}`}>{count}</h2>

      {/* Title at Bottom */}
      <h4 className={`text-gray-400 text-sm text-center ${bgColor!='bg-white'?'text-white':''}`}>{title}</h4>
    </div>
  );
};

export default StatCard;
