import React from 'react';
import { 
    ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid
  } from 'recharts';

const LineChartTotal = ({ data, status }) => {
  return <div>
      <ResponsiveContainer width="90%" height={400}>
                <AreaChart data={data} margin={{
                  top: 60,
                  left: 30,
                  right: 0,
                  bottom: 60
                }}>
                  <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2451B7" stopOpacity={0.7} />
                      <stop offset="60%" stopColor="#2451B7" stopOpacity={0.4} />
                      <stop offset="80%" stopColor="#2451B7" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Area 
                    dataKey={status === "Case" ? "positif_kumulatif" : status === "Deaths" ? "meninggal_kumulatif" : "dirawat_kumulatif"}
                    stroke="#2451B7" 
                    fill="url(#color)"
                  
                  />
                  <XAxis dataKey="tanggal" />
                  <YAxis  
                    dataKey={status === "Case" ? "positif_kumulatif" : status === "Deaths" ? "meninggal_kumulatif" : "dirawat_kumulatif"}
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

export default LineChartTotal;
