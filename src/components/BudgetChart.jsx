
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Marketing", value: 25 },
  { name: "Development", value: 35 },
  { name: "Operations", value: 20 },
  { name: "HR", value: 10 },
  { name: "Other", value: 10 },
];

const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0", "#F44336"];

const BudgetPieChart = () => {
  return (
    <div className="text-gray-400 bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-400 mb-4">Budget</h3>

      {/* Pie Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#222", color: "#aaa", borderRadius: "5px" }} />
            <Legend iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetPieChart;
