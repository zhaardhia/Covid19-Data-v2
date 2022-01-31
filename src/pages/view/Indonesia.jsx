import React from "react";
import { useEffect, useState } from "react";
import { indoDataMain, indoDataDaily } from "../../services/data";
import IndoMain from "../../components/IndoMain";
import Province from "../../components/Province";
import IndoHeader from "../../components/IndoHeader";
import IndoStatistics from "../../components/IndoStatistics";

const Indonesia = () => {
  const [dataMain, setDataMain] =useState([])

  useEffect(() => {
    getDataMain()
  }, [])

  const getDataMain = async () => {
    const dataFromServer = await indoDataMain()
    setDataMain(dataFromServer)
  }
  
    return(
        <div className="">
          <IndoHeader dataMain={dataMain} />
          <IndoMain dataMain={dataMain} />
          <div className="w-5/6">
            <IndoStatistics />
          </div>
          <Province />
        </div>
    )
}

export default Indonesia