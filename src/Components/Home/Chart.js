import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'jan',
      sales: 4000,
    },
    {
      name: 'feb',
      sales: 3000,
    },
    {
      name: 'mar',
      sales: 2000,
    },
    {
      name: 'Apr',
      sales: 2780,
    },
    {
      name: 'May',
      sales: 1890,
    },
    {
      name: 'jun',
      sales: 2390,
    },
    {
      name: 'july',
      sales: 3490,
    },
  ];
const Chart = () => {
    return (
        <div>
             <h1 className='text-5xl font-bold py-24'>Out Sale in last few mounts</h1>
            <ResponsiveContainer width="60%" height={500} className="mx-auto" >
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#f19d00" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;