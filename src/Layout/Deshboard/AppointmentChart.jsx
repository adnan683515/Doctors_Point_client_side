import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const data = [
    { department: 'Cardiology', appointments: 25 },
    { department: 'Neurology', appointments: 18 },
    { department: 'Orthopedics', appointments: 12 },
    { department: 'Pediatrics', appointments: 20 },
    { department: 'Dermatology', appointments: 15 },
    { department: 'ENT', appointments: 14 },
    { department: 'Radiology', appointments: 9 },
];

const AppointmentChart = () => {
    return (
        <div className="w-full h-[40vh] sm:h-[50vh] bg-white rounded-lg  p-3 sm:p-4">
            <h2 className="text-sm sm:text-lg font-semibold mb-2 text-gray-700 text-center sm:text-left">
                Department-wise Appointments
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 10,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f2f4f7" />
                    <XAxis
                        dataKey="department"
                        tick={{ fontSize: 8 }}
                        interval={0}
                        angle={-30} 
                        textAnchor="end"
                        height={40}
                    />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Bar
                        dataKey="appointments"
                        fill="#3B82F6"
                        radius={[6, 6, 0, 0]}
                        barSize={20} 
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default AppointmentChart;
