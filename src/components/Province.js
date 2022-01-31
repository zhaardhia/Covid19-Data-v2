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
      <div>
        <h2>Province Cumulative Data</h2>
        <p>Covid cumulative data for every province.</p>
      </div>
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
      <div>
        <h1>{selectedValue.provinsi}</h1>
        <p>Last Update: {selectedValue.last_date}</p>
        <div>
          <div>
            <p>{selectedValue?.kasus}</p>
            <p>Case</p>
            <p>+{selectedValue.penambahan?.positif}</p>
          </div>
          <div>
            <p>{selectedValue?.dirawat}</p>
            <p>Active</p>
          </div>
          <div>
            <p>{selectedValue?.sembuh}</p>
            <p>Recovered</p>
            <p>+{selectedValue.penambahan?.sembuh}</p>
          </div>
          <div>
            <p>{selectedValue?.meninggal}</p>
            <p>Death</p>
            <p>+{selectedValue.penambahan?.meninggal}</p>
          </div>
        </div>
        <BarChartProvince dataProvince={selectedValue} />
      </div>
    </div>
  );
};

export default Province;
