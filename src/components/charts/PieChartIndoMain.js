import { Box } from '@chakra-ui/react';
import React from 'react';
import { Pie } from "react-chartjs-2";
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const PieChartIndoMain = ({ dataMain }) => {
  const dataMainAdded = dataMain.penambahan

  return (
    <Box width="100%" height={['12rem', '15rem', '20rem']} mt="2rem">
      <Pie
        data={{
          labels: ['Case', 'Active', 'Recovered', 'Death'],
          datasets: [
            {
              label: '# of votes',
              data: [dataMainAdded?.positif, dataMainAdded?.dirawat, dataMainAdded?.sembuh, dataMainAdded?.meninggal],
              backgroundColor: [
                'rgba(228, 113, 30, 0.7)',
                'rgba(218, 147, 96, 0.5)',
                'rgba(34, 170, 189, 0.5)',
                'rgba(189, 34, 34, 0.7)',
                
              ],
              borderColor: [
                'rgba(228, 113, 30, 1)',
                'rgba(218, 147, 96, 1)',
                'rgba(34, 170, 189, 1)',
                'rgba(189, 34, 34, 1)',
                
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'rgba(255, 206, 86, 0.2)',
            //   borderColor: 'red',
            // },
          ],
        }}
        height="100%"
        width={100}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </Box>
  );
};

export default PieChartIndoMain;
