import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bar, Line, Pie, Polar } from "react-chartjs-2";

const BarChartProvince = ({ dataProvince }) => {
  return (
    <div className='w-3/5'>
      <Bar
        data={{
          labels: ['Case', 'Active', 'Recovered', 'Death'],
          datasets: [
            {
              label: '# of votes',
              data: [dataProvince?.kasus, dataProvince?.dirawat, dataProvince?.sembuh, dataProvince?.meninggal],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.7)',
                
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                
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
