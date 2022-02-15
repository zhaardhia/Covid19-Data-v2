import React from 'react';
import { useEffect, useState } from "react";
import { indoDataDaily } from "../services/data";
import Select, { components } from 'react-select'
import LineChartNew from "../components/charts/LineChartNew";
import LineChartTotal from "../components/charts/LineChartTotal";
import filterData from "../utils/filterData";
import { Flex, Text, Box } from '@chakra-ui/react';

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

const IndoStatistics = () => {

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
      filterData(data, filteredData, sort)
      setDataSorted(filteredData);
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
  }

  const handleDataChange = value => {
    setStatus(value.value)
  }
  const colourStyles = {
    backgroundColor: "#22AABD",
    control: (styles) => ({ 
      ...styles, 
      // backgroundColor: "#22AABD",
      width: "8rem",
      marginLeft: "0.5rem",
      borderRadius: "10px",
      fontSize: "0.8rem",
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
        fontSize: "0.8rem",
        color: "black"
      };
    }
  };
  return (
    <Box width="100%">
      <Flex flexDirection={['column', 'row', 'column', 'row']} justifyContent="space-between" mb="2rem">
        <Text fontSize="3xl" fontWeight="light">Statistics</Text>
        <Flex ml='-0.5rem'>
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
        </Flex>
      </Flex>
      <Box borderRadius="20px" p="">
        <Text fontSize="lg" fontWeight="thin">New {status}</Text>
        <LineChartNew data={dataSorted} status={status} />
      </Box>
      <Box borderRadius="20px" p="">
        <Text fontSize="lg" fontWeight="thin">Total {status}</Text>
        <LineChartTotal data={dataSorted} status={status}/>
      </Box>
      
    </Box>
  );
};

export default IndoStatistics;
