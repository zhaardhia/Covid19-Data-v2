import React from 'react';
import { Bar, Line, Pie, Polar } from "react-chartjs-2";
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const PieChartIndoMain = ({ dataMain }) => {
  const dataMainTotal = dataMain.total;
  const dataMainAdded = dataMain.penambahan
  console.log(dataMainTotal, dataMainAdded)
  return (
    <div>
      <Pie
        data={{
          labels: ['Case', 'Active', 'Recovered', 'Death'],
          datasets: [
            {
              label: '# of votes',
              data: [dataMainAdded?.positif, dataMainAdded?.dirawat, dataMainAdded?.sembuh, dataMainAdded?.meninggal],
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
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'rgba(255, 206, 86, 0.2)',
            //   borderColor: 'red',
            // },
          ],
        }}
        // height={200}
        // width={100}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChartIndoMain;
