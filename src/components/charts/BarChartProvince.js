import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bar } from "react-chartjs-2";

const BarChartProvince = ({ dataProvince }) => {
  return (
    <div className='w-3/5'>
      <Bar
        data={{
          labels: ['Case', 'Active', 'Recovered', 'Death'],
          datasets: [
            {
              label: ['Case', 'Active', 'Recovered', 'Death'],
              data: [dataProvince?.kasus, dataProvince?.dirawat, dataProvince?.sembuh, dataProvince?.meninggal],
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
          ],
        }}
      />
    </div>
  );
};



export default BarChartProvince;
