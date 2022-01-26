import React from "react";
const Info = ({ data, status }) => {
  return (
    <div>
      <h1>Day: {data.tanggal}</h1>
      <h3>{status}: {status === 'Case' ? data.positif : status === 'Deaths' ? data.meninggal : data.sembuh}</h3>
      <br /> 
    </div>
  )};

export default Info;
