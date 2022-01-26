import React from "react";
import { Bar, Line, Pie, Polar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { indoDataMain, indoDataDaily } from "../../services/data";
import Select, { components } from 'react-select'
import { 
  ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid
} from 'recharts';
import Info from "../../components/Info";


const optionsSort = [
  { value: 7, label: 'Last 7 days' },
  { value: 14, label: 'Last 14 days' },
  { value: 30, label: 'Last 30 days' }
]
const optionsData = [
  { value: 'Case', label: 'Case' },
  { value: 'Deaths', label: 'Deaths' },
  { value: 'Recovered', label: 'Recovered' }
]

const Global = () => {
  const [data, setData] = useState([])
  const [sort, setSort] = useState(7)
  const [status, setStatus] = useState('Case')
  const [dataSorted, setDataSorted] = useState([])
  const filteredData = [];

  useEffect(() => {
    getData()
    filterData(data)
    setDataSorted(filteredData);
    
  }, [])


  const getData = async () => {
    const dataFromServer = await indoDataDaily()
    setData(dataFromServer)
  }
  
  const handleSortChange = value => {
    filterData(data)
    setSort(value.value)
    setDataSorted(filteredData);
    dataSorted.map((d) => console.log(d.positif))
  }

  const handleDataChange = value => {
    setStatus(value.value)
  }

  const dataMap = data.map((tot, index) => {
    let date = Date.parse(tot.tanggal);
    let dateConv = new Date(date);
    let dateComplete = dateConv.getDate() + " " + dateConv.getMonth() + " " + dateConv.getFullYear();

    if(index >= data.length - sort){
      // filteredData.push(data);
      return `
        Index: ${index}
        ${status}: ${status === 'Case' ? tot.positif : status === 'Deaths' ? tot.meninggal : tot.sembuh }.
        ${status} Cumulative: ${ status === 'Case' ? tot.positif_kumulatif : status === 'Deaths' ? tot.meninggal_kumulatif : tot.sembuh_kumulatif}.
        Date: ${dateComplete}
      `;
    }
  });

  const filterData = (data) => {
    const mapData = data.map((tot, index) => {
      if(index >= data.length - sort){
        filteredData.push(tot)
      }
    });
  }

  const MapData = ({ data, status }) => {
    return (
      <>
        {data.map((d)=> (
          <Info key={d.tanggal} data={d} status={status} />
        ))}
      </>
    )
  }
    return(
        <div>
            <h1>{dataMap}</h1>
            <h1>{status}</h1>
            <div>
              <Select 
                options={optionsData}
                onChange={handleDataChange}
                placeholder="Select Type of Data"
              />
              <Select 
                options={optionsSort} 
                onChange={handleSortChange}
                placeholder="Select Time Range"
              />

              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={dataSorted}>
                  <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2451B7" stopOpacity={0.7} />
                      <stop offset="60%" stopColor="#2451B7" stopOpacity={0.4} />
                      <stop offset="80%" stopColor="#2451B7" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Area dataKey="positif" stroke="#2451B7" fill="url(#color)"/>
                  <XAxis dataKey="tanggal" />
                  <YAxis dataKey="positif" axisLine={false} tickLine={false} />
                  <Tooltip />
                  <CartesianGrid opacity={0.4} vertical={false} />
                </AreaChart>
              </ResponsiveContainer>
              <MapData data={dataSorted} status={status} />
              <h1></h1>
              {/* <Line 
                data={{ 
                  labels: ['Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow', 'Red', 'Blue', 'Yellow'],
                  datasets: [
                    {
                      label: '# of Votes',
                      data: [12, 19, 13, 17, 20, 25, 45, 55, 21, 15, 12, 9, 40, 20, 19, 26, 29, 34, 32, 22, 24, 31, 33, 34, 26, 21, 22, 23, 19, 13],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                      ],
                      borderWidth: 6
                    },
                    {
                      // label: 'Quantity',
                      // data: [47, 52, 67, 58, 9, 50],
                      // backgroundColor: 'orange',
                      // borderColor: 'red',
                    }
                  ]
                }}
                height={500}
                width={500}
                options={{ 
                  maintainAspectRatio: false,
                  // scales: {
                  //   yAxes: [
                  //     {
                  //       ticks: {
                  //         beginAtZero: true,
                  //       },
                  //     }
                  //   ]
                  // }
                }}
              /> */}
            </div>
        </div>
    )
}

export default Global