import React from "react";
import { useEffect, useState } from "react";
import { indoDataMain, indoDataDaily } from "../../services/data";
import IndoMain from "../../components/IndoMain";
import Province from "../../components/Province";
import IndoHeader from "../../components/IndoHeader";
import IndoStatistics from "../../components/IndoStatistics";
import { Box, Flex } from "@chakra-ui/react";

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
          <Flex width="100%" justifyContent="center" flexDirection={['column', 'column', 'row']} >
            <IndoMain dataMain={dataMain} />
            <Flex flexDirection="column" width={['85%', '80%', '40%']} ml={['auto', 'auto', '7rem']} mr={['auto', 'auto', '0']} >
              <IndoStatistics />
              <Province />
            </Flex>
          </Flex>
        </div>
    )
}

export default Indonesia