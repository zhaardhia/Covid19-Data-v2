import { Box, Grid, GridItem, Text, ScaleFade, Collapse } from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import BarChartProvince from './charts/BarChartProvince';
import CountUp from 'react-countup';

const Province = () => {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {

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
      return  fetch(`https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more?name=${inputValue}`).then(res => res.json());
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
        <Collapse in={selectedValue} animateOpacity>
          <Text fontSize="2xl" fontWeight="light">
            {selectedValue?.provinsi}
          </Text>
          <Text fontSize="md" fontWeight="thin">Last Update: {selectedValue?.last_date}</Text>
        </Collapse>
        <Grid textColor="white" margin="2rem 0" templateColumns={['repeat(2, 2fr)', 'repeat(2, 2fr)', 'repeat(2, 2fr)', 'repeat(4, 1fr)']} gap='6' textAlign='center'>
          <ScaleFade initialScale={0} in={selectedValue} >
            <GridItem background="#E4711E" borderRadius="20px" lineHeight="" p="3" height="6rem" shadow="lg">
              
                <Text fontSize="lg" fontWeight="light">
                  <CountUp end={selectedValue?.kasus} duration={3} separator="," />
                </Text>
                <Text fontWeight="light">Case</Text>
                <Text fontStyle="italic" fontSize="sm" fontWeight="thin">
                  +<CountUp end={selectedValue?.penambahan?.positif} duration={3} separator="," />
                </Text>
            </GridItem>
          </ScaleFade>

          <ScaleFade initialScale={0.2} in={selectedValue} >
            <GridItem background="#DA9360" borderRadius="20px" p="3" height="6rem" shadow="lg">
              <Text fontSize="lg" fontWeight="light">
              <CountUp end={selectedValue?.dirawat} duration={3} separator="," />
              </Text>
              <Text fontWeight="light">Active</Text>
            </GridItem>
          </ScaleFade>

          <ScaleFade initialScale={0.4} in={selectedValue} >
            <GridItem background="#22AABD" borderRadius="20px" p="3" height="6rem" shadow="lg">
              <Text fontSize="lg" fontWeight="light">
                <CountUp end={selectedValue?.sembuh} duration={3} separator="," />
              </Text>
              <Text fontWeight="light">Recovered</Text>
              <Text fontStyle="italic" fontSize="sm" fontWeight="thin">
                +<CountUp end={selectedValue?.penambahan.sembuh} duration={3} separator="," />
              </Text>
            </GridItem>
          </ScaleFade>

          <ScaleFade initialScale={0.6} in={selectedValue}>
            <GridItem background="#BD2222" borderRadius="20px" p="3" height="6rem" shadow="lg">
              <Text fontSize="lg" fontWeight="light">
                <CountUp end={selectedValue?.meninggal} duration={3} separator="," />
              </Text>
              <Text fontWeight="light">Death</Text>
              <Text fontStyle="italic" fontSize="sm" fontWeight="thin">
                +<CountUp end={selectedValue?.penambahan.meninggal} duration={3} separator="," />
              </Text>
            </GridItem>
          </ScaleFade>
        </Grid>

        <ScaleFade initialScale={0.4} in={selectedValue}>
          <BarChartProvince dataProvince={selectedValue} />
        </ScaleFade>
        
      </Box>
    </div>
  );
};

export default Province;
