import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import BarChartProvince from './charts/BarChartProvince';

const Province = () => {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    console.log(selectedValue)
  }, [selectedValue])

  const handleInputChange = value => {
    setValue(value);
  };
  
  const handleChange = value => {
    setSelectedValue(value);       
  }
  const colourStyles = {
    backgroundColor: "#22AABD",
    control: (styles) => ({ 
      ...styles, 
      // backgroundColor: "#22AABD",
      
    }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        // backgroundColor: isDisabled ? "red" : "white",
        // color: "#FFF",
        // cursor: isDisabled ? "not-allowed" : "default"
        color: "black"
      };
    }
  };

  const loadOptions =  (inputValue) => {
    try {
      return  fetch(`http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more?name=${inputValue}`).then(res => res.json());
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Box mb="1rem">
        <Text fontSize="3xl" fontWeight="light">Province Cumulative Data</Text>
        <Text fontSize="md" fontWeight="thin">Covid cumulative data for every province.</Text>
      </Box>
      <div>
        <AsyncSelect
          cacheOptions
          defaultOptions
          value={selectedValue}
          defaultValue="dki_jakarta"
          getOptionLabel={e => e.provinsi}
          getOptionValue={e => e.provinsi}
          loadOptions={loadOptions}
          onInputChange={handleInputChange}
          onChange={handleChange}
          styles={colourStyles}
        />
      </div>
      <Box m="1rem 0 2rem 0">
        <Text fontSize="2xl" fontWeight="light">{selectedValue?.provinsi}</Text>
        <Text fontSize="md" fontWeight="thin">Last Update: {selectedValue?.last_date}</Text>
        <Grid textColor="white" margin="2rem 0" templateColumns={['repeat(2, 2fr)', 'repeat(2, 2fr)', 'repeat(2, 2fr)', 'repeat(4, 1fr)']} gap='6' textAlign='center'>
          <GridItem background="#E4711E" borderRadius="20px" lineHeight="" p="3" height="6rem" shadow="lg">
            <Text fontSize="lg" fontWeight="light">{selectedValue?.kasus}</Text>
            <Text fontWeight="light">Case</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+{selectedValue?.penambahan?.positif}</Text>
          </GridItem>
          <GridItem background="#DA9360" borderRadius="20px" p="3" height="6rem" shadow="lg">
            <Text fontSize="lg" fontWeight="light">{selectedValue?.dirawat}</Text>
            <Text fontWeight="light">Active</Text>
          </GridItem>
          <GridItem background="#22AABD" borderRadius="20px" p="3" height="6rem" shadow="lg">
            <Text fontSize="lg" fontWeight="light">{selectedValue?.sembuh}</Text>
            <Text fontWeight="light">Recovered</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+{selectedValue?.penambahan?.sembuh}</Text>
          </GridItem>
          <GridItem background="#BD2222" borderRadius="20px" p="3" height="6rem" shadow="lg">
            {/* <p>{selectedValue?.meninggal}</p> */}
            <Text fontSize="lg" fontWeight="light">{selectedValue?.meninggal}</Text>
            <Text fontWeight="light">Recovered</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+{selectedValue?.penambahan?.meninggal}</Text>
          </GridItem>
        </Grid>
        <BarChartProvince dataProvince={selectedValue} />
      </Box>
    </div>
  );
};

export default Province;
