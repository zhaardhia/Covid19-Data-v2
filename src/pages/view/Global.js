import React from "react";
import { Bar, Line, Pie, Polar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { indoDataMain, indoDataDaily } from "../../services/data";
import Select, { components } from 'react-select'

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
  const [sort, setSort] = useState([])
  const [status, setStatus] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await indoDataDaily()
      setData(dataFromServer)
    }

    getData()
    setStatus("Case")
    setSort(7)
  }, [])
  
  const handleSortChange = value => {
    setSort(value.value)
  }
  const handleDataChange = value => {
    setStatus(value.value)
  }

  const dataMap = data.map((tot, index) => {
    let date = Date.parse(tot.tanggal);
    let dateConv = new Date(date);
    let dateComplete = dateConv.getDate() + " " + dateConv.getMonth() + " " + dateConv.getFullYear();

    if(index >= data.length - sort){
      return `
        Index: ${index}
        ${status}: ${status === 'Case' ? tot.positif : status === 'Deaths' ? tot.meninggal : tot.sembuh }.
        ${status} Cumulative: ${ status === 'Case' ? tot.positif_kumulatif : status === 'Deaths' ? tot.meninggal_kumulatif : tot.sembuh_kumulatif}.
        Date: ${dateComplete}
      `;
    }
  });

    return(
        <div>
            <h1>{dataMap}</h1>
            <h1>{status}</h1>
            <div>
              <Select 
                options={optionsData}
                onChange={handleDataChange}
                placeholder="Select Type of Data"
                autoFocus
              />
              <Select 
                options={optionsSort} 
                onChange={handleSortChange}
                autoFocus
                placeholder="Select Time Range"
              />
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