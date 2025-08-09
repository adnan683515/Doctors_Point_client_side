import React from 'react';
import {
    ResponsiveContainer,
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell,
    ZAxis,
    Legend
} from 'recharts';

const COLORS = {
    Pending: '#FFA500',      // Orange
    Confirmed: '#00C49F',    // Teal Green
    Ongoing: '#0088FE',      // Blue
    Completed: '#4CAF50',    // Green
    Cancelled: '#FF4444'     // Red
};

const data = [
    { status: 'Pending', count: 18 },
    { status: 'Confirmed', count: 30 },
    { status: 'Ongoing', count: 12 },
    { status: 'Completed', count: 20 },
    { status: 'Cancelled', count: 5 }
];

export default function StatusWiseBubbleChart() {
    const chartData = data.map(item => ({
        x: item.status,
        y: item.count,
        z: item.count * 15, // Bubble size
        status: item.status
    }));

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        type="category"
                        dataKey="x"
                        name="Status"
                        tick={{ fontSize: 14, fontWeight: 'bold', fill: '#333' }}
                    />
                    <YAxis
                        type="number"
                        dataKey="y"
                        name="Appointments"
                        tick={{ fontSize: 14, fontWeight: 'bold', fill: '#333' }}
                        label={{
                            value: 'Appointment Count',
                            angle: -90,
                            position: 'insideLeft',
                            fontSize: 14,
                            fontWeight: 'bold'
                        }}
                    />
                    <ZAxis type="number" dataKey="z" range={[100, 800]} />
                    <Tooltip
                        cursor={{ strokeDasharray: '3 3' }}
                        formatter={(value, name) => {
                            if (name === 'y') return [`${value}`, 'Appointments'];
                            if (name === 'x') return [value, 'Status'];
                            return [value, name];
                        }}
                        contentStyle={{ fontSize: '14px' }}
                    />
                    <Legend />
                    <Scatter name="Appointments" data={chartData}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[entry.status]} />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
}
