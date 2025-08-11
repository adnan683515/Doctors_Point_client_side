import {  useQuery } from '@tanstack/react-query';
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
import useAxiosSecure from '../../Hooks/AxiosSequre';
import ProgressLoaindg from '../../Share/ProgressLoaindg';

const AppointmentChart = () => {

    const axiosUrl = useAxiosSecure()

    const { data , isLoading } = useQuery({
        queryKey: 'alldeptapp',
        queryFn: (async () => {
            const result = await axiosUrl.get('/appointments-by-department')
            return result?.data
        })
    })

    if(isLoading){
        return <div className='flex justify-center items-center'>
            <ProgressLoaindg></ProgressLoaindg>
        </div>
    }

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
