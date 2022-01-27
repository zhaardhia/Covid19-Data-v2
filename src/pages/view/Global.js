import React from "react";
import { Bar, Line, Pie, Polar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { indoDataMain, indoDataDaily } from "../../services/data";
import Select, { components } from 'react-select'
import Info from "../../components/Info";
import LineChartNew from "../../components/charts/LineChartNew";
import LineChartTotal from "../../components/charts/LineChartTotal";


const optionsSort = [
  { value: 7, label: 'Last 7 days' },
  { value: 14, label: 'Last 14 days' },
  { value: 30, label: 'Last 30 days' },
  { value: 'all', label: 'All' }
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
  }, [])

  useEffect(() => {
    if(data.length){
      filterData(data)
      // changePropertyName(filteredData, "positif", "Case")
      // changePropertyName(filteredData, "positif_kumulatif", "Cumulative_Case")
      // console.log(filteredData)
      setDataSorted(filteredData);
      // console.log(dataSorted)
    }
  }, [data, sort, status])


  const getData = async () => {
    const dataFromServer = await indoDataDaily()
    setData(dataFromServer)
  }
  
  const handleSortChange = value => {
    if(value.value === "all") {
      setSort(data.length)
    } else {
      setSort(value.value)
    }
    // dataSorted.map((d) => console.log(d.positif))
  }

  const handleDataChange = value => {
    setStatus(value.value)
  }

  const dateConverter = (date) => {
    let dateParse = Date.parse(date);
    let dateConv = new Date(dateParse);
    let dateComplete = dateConv.getDate() + " " + (dateConv.toLocaleString('default', {month: 'short'})) + " " + dateConv.getFullYear();

    return dateComplete
  }

  // const dataMap = data.map((tot, index) => {
  //   let date = Date.parse(tot.tanggal);
  //   let dateConv = new Date(date);
  //   // console.log(dateConv.toLocaleString('default', {month: 'short'}))
  //   let dateComplete = dateConv.getDate() + " " + (dateConv.toLocaleString('default', {month: 'short'})) + " " + dateConv.getFullYear();

  //   if(index >= data.length - sort){
  //     // filteredData.push(data);
  //     return `
  //       Index: ${index}
  //       ${status}: ${status === 'Case' ? tot.positif : status === 'Deaths' ? tot.meninggal : tot.sembuh }.
  //       ${status} Cumulative: ${ status === 'Case' ? tot.positif_kumulatif : status === 'Deaths' ? tot.meninggal_kumulatif : tot.sembuh_kumulatif}.
  //       Date: ${dateComplete}
  //     `;
  //   }
  // });

  const filterData = (data) => {
    const mapData = data.map((tot, index) => {
      if(index >= data.length - sort){
        tot.tanggal = dateConverter(tot.tanggal)
        filteredData.push(tot)
      }
    });
  }

  // const changePropertyName = (array, property, newProperty) => {
  //   return array.map(item => {
  //       return {
  //           ...item,
  //           [newProperty]: item[property]
  //       }
  //   })
  // }
  const changePropertyName = (array, property, newProperty) => {
    array.forEach(element => {
        element[newProperty] = element[property];
        delete element[property];
    });
    return array;
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


  function CustomTooltip({ payload, label, active }) {
    
    if (active) {
      return (
        <div className="tooltip">
          <h4>{label}</h4>
          {/* <p>{payload === "positif_kumulatif" ? "Case" : payload === "meninggal_kumulatif" ? "Cumulative Death" : "Cumulative Recovered"}</p> */}
          <p>{payload}</p>
        </div>
      );
    }
    return null;
  }
  const colourStyles = {
    control: (styles) => ({ 
      ...styles, backgroundColor: "white",
      width: "15rem",
      marginLeft: "0.5rem"
    }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        // backgroundColor: isDisabled ? "red" : "green",
        // color: "#FFF",
        // cursor: isDisabled ? "not-allowed" : "default"
        width: "14.5rem",
        marginLeft: "0.5rem"
      };
    }
  };
    return(
        <div>
            {/* <h1>{dataMap}</h1> */}
            <h1>{status}</h1>
            <div>
              <div className="flex">
                <Select 
                  defaultValue={optionsData[0]} 
                  options={optionsData}
                  onChange={handleDataChange}
                  // placeholder="Select Type of Data"
                  styles={colourStyles}
                />
                <Select 
                  defaultValue={optionsSort[0]} 
                  options={optionsSort} 
                  onChange={handleSortChange}
                  // placeholder="Select Time Range"
                  
                  styles={colourStyles}
                />
              </div>
              
              <h1>New</h1>
              <LineChartNew data={dataSorted} status={status} />
              <h1>Total</h1>
              <LineChartTotal data={dataSorted} status={status}/>
              <MapData data={dataSorted} status={status} />
            </div>
        </div>
    )
}



export default Global