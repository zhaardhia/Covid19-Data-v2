import React from "react";
import { useEffect, useState } from "react";
import { indoDataMain, indoDataDaily } from "../../services/data";
import IndoMain from "../../components/IndoMain";
import Province from "../../components/Province";
import IndoHeader from "../../components/IndoHeader";
import IndoStatistics from "../../components/IndoStatistics";
import { Box, Flex, Text, Spinner } from "@chakra-ui/react";

const Indonesia = () => {
  const [dataMain, setDataMain] =useState([])
  const [dataMainLoad, setDataMainLoad] = useState(true);
  // const [dataError, setDataError] = useState('true');
  useEffect(() => {
    getDataMain()
  }, [])

  const getDataMain = async () => {
    
    const dataFromServer = await indoDataMain()
    setDataMain(dataFromServer)
    setDataMainLoad(false)
  }
  
    return(
      <div>
        <Box>
        <IndoHeader dataMain={dataMain} />
          <Flex width="100%" justifyContent="center" flexDirection={['column', 'column', 'row']} >
          {dataMainLoad ? <Spinner size="xl" m='7rem auto' /> : <IndoMain dataMain={dataMain} />}
            <Flex flexDirection="column" width={['85%', '80%', '40%']} ml={['auto', 'auto', '7rem']} mr={['auto', 'auto', '0']} >
            {dataMainLoad ? <Spinner size="xl" m='5rem auto' /> : <IndoStatistics />}
            {dataMainLoad ? <Spinner size="xl" m='5rem auto' /> : <Province />}  
            </Flex>
          </Flex>
        </Box>
      </div>
      
    )
}

export default Indonesia