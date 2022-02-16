import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { 
    ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid
  } from 'recharts';
import { delimiter } from '../../utils/delimiter';

const LineChartTotal = ({ data, status }) => {
  const bgToolTip = useColorModeValue('#0F3145', '#CBD5E0');
  const fontColor = useColorModeValue('#fff', '#000');
  const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <Box className="custom-tooltp" backgroundColor={bgToolTip} borderRadius="10px" padding="1rem" color={fontColor}>
          <p className="label">{label}</p>
          <p className="intro">{ status === 'Case' ? 'Case' : status === 'Deaths' ? 'Deaths' : 'Recovered'}: {delimiter(payload[0]?.value)}</p>
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
