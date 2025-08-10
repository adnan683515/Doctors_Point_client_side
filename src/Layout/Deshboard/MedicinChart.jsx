import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const salesData = [
    { month: "Jan", sales: 4500 },
    { month: "Feb", sales: 4200 },
    { month: "Mar", sales: 1500 },
    { month: "Apr", sales: 5000 },
    { month: "May", sales: 4700 },
    { month: "Jun", sales: 5200 },
    { month: "Jul", sales: 5300 },
    { month: "Aug", sales: 100 },
    { month: "Sep", sales: 4900 },
    { month: "Oct", sales: 4600 },
    { month: "Nov", sales: 0 },
    { month: "Dec", sales: 5500 },
];

const CustomizedAxisTick = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
        <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
            fontSize={12}
        >
            {payload.value}
        </text>
    </g>
);

const MedicinChart = () => {
    return (
        <div className="w-full h-[50vh] sm:h-[50vh] mx-auto bg-white p-2 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="sm:text-xl font-semibold text-gray-800">
                    Medicine Sales - Month Wise (2021)
                </h2>
            </div>

            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={salesData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f2f4f7" />
                        <XAxis dataKey="month" height={60} tick={<CustomizedAxisTick />} />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value} Tk`, "Sales"]} />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#16A34A"
                            strokeWidth={3}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MedicinChart;
