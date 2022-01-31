import React from 'react';
import PieChartIndoMain from './charts/PieChartIndoMain';

const IndoMain = ({ dataMain }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-5 items-center text-center">
        <div>
          <p>{dataMain.total?.positif}</p>
          <p>Case</p>
          <p>+{dataMain.penambahan?.positif}</p>
        </div>
        <div>
          <p>{dataMain.total?.dirawat}</p>
          <p>Active</p>
          <p>+{dataMain.penambahan?.dirawat}</p>
        </div>
        <div>
          <p>{dataMain.total?.sembuh}</p>
          <p>Recovered</p>
          <p>+{dataMain.penambahan?.sembuh}</p>
        </div>
        <div>
          <p>{dataMain.total?.meninggal}</p>
          <p>Death</p>
          <p>+{dataMain.penambahan?.meninggal}</p>
        </div>
      </div>
      <PieChartIndoMain className="w-3" dataMain={dataMain} />
    </div>
  );
};

export default IndoMain;
