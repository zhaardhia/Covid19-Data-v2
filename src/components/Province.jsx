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
        />
      </div>
      <Box m="1rem 0 2rem 0">
        {/* <h1>{selectedValue?.provinsi}</h1> */}
        <Text fontSize="2xl" fontWeight="light">DKI Jakarta</Text>
        {/* <p>Last Update: {selectedValue?.last_date}</p> */}
        <Text fontSize="md" fontWeight="thin">Last Update: 2022-01-29</Text>
        <Grid margin="2rem 0" templateColumns='repeat(4, 1fr)' gap='6' textAlign='center'>
          <GridItem background="#E4711E" borderRadius="20px" lineHeight="" p="2rem" shadow="lg">
            {/* <p>{selectedValue?.kasus}</p> */}
            <Text fontSize="lg" fontWeight="light">201.692.437</Text>
            <Text fontWeight="light">Case</Text>
            {/* <p>+{selectedValue?.penambahan?.positif}</p> */}
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+200</Text>
          </GridItem>
          <GridItem background="#DA9360" borderRadius="20px" p="2rem" shadow="lg">
            {/* <p>{selectedValue?.dirawat}</p> */}
            <Text fontSize="lg" fontWeight="light">201.692.437</Text>
            <Text fontWeight="light">Active</Text>
          </GridItem>
          <GridItem background="#22AABD" borderRadius="20px" p="2rem" shadow="lg">
            {/* <p>{selectedValue?.sembuh}</p> */}
            <Text fontSize="lg" fontWeight="light">201.692.437</Text>
            <Text fontWeight="light">Recovered</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+200</Text>
            {/* <p>+{selectedValue?.penambahan?.sembuh}</p> */}
          </GridItem>
          <GridItem background="#BD2222" borderRadius="20px" p="2rem" shadow="lg">
            {/* <p>{selectedValue?.meninggal}</p> */}
            <Text fontSize="lg" fontWeight="light">201.692.437</Text>
            <Text fontWeight="light">Recovered</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+200</Text>
          </GridItem>
        </Grid>
        <BarChartProvince dataProvince={selectedValue} />
      </Box>
    </div>
  );
};

export default Province;
