import { Switch } from "@headlessui/react";
import { useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const monthlyData = [
  { label: "Jan", revenue: 4000 },
  { label: "Feb", revenue: 3000 },
  { label: "Mar", revenue: 5000 },
  { label: "Apr", revenue: 4500 },
  { label: "May", revenue: 6000 },
  { label: "Jun", revenue: 7000 },
  { label: "Jul", revenue: 8000 },
  { label: "Aug", revenue: 7500 },
  { label: "Sep", revenue: 8500 },
  { label: "Oct", revenue: 9000 },
  { label: "Nov", revenue: 9500 },
  { label: "Dec", revenue: 10000 },
];

const weeklyData = [
  { label: "Week 1", revenue: 1000 },
  { label: "Week 2", revenue: 1200 },
  { label: "Week 3", revenue: 1100 },
  { label: "Week 4", revenue: 1500 },
];

const RevenueGraph = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const data = isMonthly ? weeklyData : monthlyData;

  return (
    <div className=" p-6 bg-white rounded-lg shadow-md text-gray-400 ">
      {/* Header and Slider */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Revenue Overview</h3>
        <div className="flex items-center">
          <span className="text-sm text-gray-400 mr-2">Monthly</span>
          <Switch
            checked={isMonthly}
            onChange={setIsMonthly}
            className={`${
              isMonthly ? "bg-green-500" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                isMonthly ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
          <span className="text-sm text-gray-400 ml-2">Weekly</span>
        </div>
      </div>

      {/* Line Chart */}
      <div className="w-full h-72"> {/* Set a fixed height */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="label" stroke="#aaa" tick={{ fill: "#aaa" }} />
            <YAxis stroke="#aaa" tick={{ fill: "#aaa" }} />
            <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
            <Line type="monotone" dataKey="revenue" stroke="#4CAF50" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGraph;
