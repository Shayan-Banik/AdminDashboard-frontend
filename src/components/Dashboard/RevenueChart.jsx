import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 56000, expenses: 38000 },
  { month: "Mar", revenue: 95000, expenses: 39000 },
  { month: "Apr", revenue: 40000, expenses: 42000 },
  { month: "May", revenue: 45000, expenses: 52000 },
  { month: "Jun", revenue: 32000, expenses: 32000 },
  { month: "Jul", revenue: 45000, expenses: 79000 },
  { month: "Aug", revenue: 67000, expenses: 42000 },
  { month: "Sep", revenue: 45000, expenses: 72000 },
  { month: "Oct", revenue: 78000, expenses: 92000 },
  { month: "Nov", revenue: 45000, expenses: 82000 },
  { month: "Dec", revenue: 80000, expenses: 12000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
          Month: {label}
        </p>

        {payload.map((item, index) => (
          <p key={index} className="text-sm text-black dark:text-white" >
            {item.name}: ${item.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly revenue and expenses
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-slate-400 to-slate-500"></span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Expenses
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              opacity={0.3}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              fontSize={12}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={12}
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            <Tooltip content={<CustomTooltip />} />

            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>

              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>

            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="url(#revenueGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />

            <Bar
              dataKey="expenses"
              name="Expenses"
              fill="url(#expensesGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
