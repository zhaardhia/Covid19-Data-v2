import React from 'react';
import { Box } from '@chakra-ui/react';
import { 
    ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid
  } from 'recharts';

const LineChartTotal = ({ data, status }) => {
  const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <Box className="custom-tooltp" backgroundColor="#CBD5E0">
          <p className="label">{label}</p>
          <p className="intro">{ status === 'Case' ? 'Case' : status === 'Deaths' ? 'Deaths' : 'Recovered'}: {payload[0]?.value}</p>
        </Box>
      );
    }
    return null;
  }

  return <div>
      <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data} margin={{
                  top: 60,
                  left: 20,
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
                    dataKey={status === "Case" ? "positif_kumulatif" : status === "Deaths" ? "meninggal_kumulatif" : "sembuh_kumulatif"}
                    stroke="#2451B7" 
                    fill="url(#color)"
                  
                  />
                  <XAxis dataKey="tanggal" />
                  <YAxis  
                    dataKey={status === "Case" ? "positif_kumulatif" : status === "Deaths" ? "meninggal_kumulatif" : "sembuh_kumulatif"}
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={number => `${number.toFixed()}`} 
                  />
                  <Tooltip content={ <CustomTooltip /> } />
                  <CartesianGrid opacity={0.4} vertical={false} />
                </AreaChart>
              </ResponsiveContainer>
  </div>;
};

export default LineChartTotal;
