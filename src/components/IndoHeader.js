import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { dateShort } from "../utils/dateShort";

const IndoHeader = ({ dataMain }) => {
  return (
    <div className="flex mb-8 mt-8">
      <StaticImage src="../images/indocovid.png" alt="Indonesia flag with mask image" />
      <div>
        <h1>Indonesia Data</h1>
        <h3>Last Update: {dateShort(dataMain.total?.lastUpdate)}</h3>
      </div>
    </div>
  );
};

export default IndoHeader;
