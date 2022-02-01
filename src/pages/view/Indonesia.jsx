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
          <Flex width="100%" justifyContent="center">
            <IndoMain dataMain={dataMain} />
            <Box width="40%" ml="7rem">
              <IndoStatistics />
              <Province />
            </Box>
          </Flex>
        </div>
    )
}

export default Indonesia