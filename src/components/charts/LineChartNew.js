import React from 'react';
import { 
  ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid
} from 'recharts';

const LineChartNew = ({ data, status }) => {
  
  return <div>
    <ResponsiveContainer width="80%" height={400}>
                <AreaChart data={data} margin={{
                  top: 60,
                  left: 30,
                  right: 0,
                  bottom: 60
                }}>
                  <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="black" stopOpacity={0.7} />
                      <stop offset="60%" stopColor="#2451B7" stopOpacity={0.4} />
                      <stop offset="80%" stopColor="#2451B7" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Area 
                    dataKey={status === "Case" ? "positif" : status === "Deaths" ? "meninggal" : "dirawat"}
                    stroke="#2451B7" 
                    fill="url(#color)"
                  
                  />
                  <XAxis dataKey="tanggal" />
                  <YAxis  
                    dataKey={status === "Case" ? "positif" : status === "Deaths" ? "meninggal" : "dirawat"}
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={number => `${number.toFixed()}`} 
                  />
                  <Tooltip />
                  <CartesianGrid opacity={0.4} vertical={false} />
                </AreaChart>
              </ResponsiveContainer>
  </div>;
};

export default LineChartNew;
