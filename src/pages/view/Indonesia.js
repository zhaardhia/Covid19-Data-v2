import React from "react";
import { useEffect, useState } from "react";
import { indoDataMain, indoDataDaily } from "../../services/data";
import Select, { components } from 'react-select'
import Info from "../../components/Info";
import LineChartNew from "../../components/charts/LineChartNew";
import LineChartTotal from "../../components/charts/LineChartTotal";
import { dateShort } from "../../utils/dateShort";
import IndoMain from "../../components/IndoMain";
import filterData from "../../utils/filterData";


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

const Indonesia = () => {
  const [data, setData] = useState([])
  const [dataMain, setDataMain] =useState([])
  const [sort, setSort] = useState(7)
  const [status, setStatus] = useState('Case')
  const [dataSorted, setDataSorted] = useState([])
  const filteredData = [];

  useEffect(() => {
    getData()
    getDataMain()
    // console.log(dataMain)
  }, [])

  useEffect(() => {
    if(data.length){
      filterData(data)
      setDataSorted(filteredData);
    }
  }, [data, sort, status])


  const getData = async () => {
    const dataFromServer = await indoDataDaily()
    setData(dataFromServer)
  }
  const getDataMain = async () => {
    const dataFromServer = await indoDataMain()
    setDataMain(dataFromServer)
  }
  
  const handleSortChange = value => {
    if(value.value === "all") {
      setSort(data.length)
    } else {
      setSort(value.value)
    }
  }

  const handleDataChange = value => {
    setStatus(value.value)
  }

  const filterData = (data) => {
    const mapData = data.map((tot, index) => {
      if(index >= data.length - sort){
        tot.tanggal = dateShort(tot.tanggal)
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

  const colourStyles = {
    backgroundColor: "#22AABD",
    control: (styles) => ({ 
      ...styles, backgroundColor: "#22AABD",
      width: "10rem",
      marginLeft: "0.5rem",
      borderRadius: "10px"
    }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        // backgroundColor: isDisabled ? "red" : "white",
        // color: "#FFF",
        // cursor: isDisabled ? "not-allowed" : "default"
        width: "100%",
        height: "100%",
        marginLeft: "",
      };
    }
  };
    return(
        <div className="">
          <div className="text-center mb-8 mt-8">
            <h1>Indonesia Data</h1>
            <h3>Last Update: {dateShort(dataMain.total?.lastUpdate)}</h3>
          </div>
          <IndoMain dataMain={dataMain} />
            <div className="w-5/6">
              <div>
              <h2>Statistics</h2>
              <div className="flex">
                <h3>New Cases, Deaths, and Recovered</h3>
                <div className="flex">
                  <Select 
                    defaultValue={optionsData[0]} 
                    options={optionsData}
                    onChange={handleDataChange}
                    styles={colourStyles}
                  />
                  <Select 
                    defaultValue={optionsSort[0]} 
                    options={optionsSort} 
                    onChange={handleSortChange}
                    styles={colourStyles}
                  />
                </div>
              </div>
              <h1>{status}</h1>
              <h1>New</h1>
              <LineChartNew data={dataSorted} status={status} />
              <h1>Total</h1>
              <LineChartTotal data={dataSorted} status={status}/>
              <MapData data={dataSorted} status={status} />
              </div>
            </div>
        </div>
    )
}

export default Indonesia