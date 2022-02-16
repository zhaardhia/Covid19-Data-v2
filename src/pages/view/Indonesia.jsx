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
  
  const MainComponent = ({ dataMain, dataMainLoad }) => {
    return (
      <Box>
        {dataMainLoad ? <Spinner size="lg" /> : <IndoHeader dataMain={dataMain} />}
            
            <Flex width="100%" justifyContent="center" flexDirection={['column', 'column', 'row']} >
              <IndoMain dataMain={dataMain} />
              <Flex flexDirection="column" width={['85%', '80%', '40%']} ml={['auto', 'auto', '7rem']} mr={['auto', 'auto', '0']} >
                <IndoStatistics />
                <Province />
              </Flex>
            </Flex>
          </Box>
    )
  }
    return(
      <div>
        {/* <MainComponent dataMain={dataMain} dataMainLoad={dataMainLoad} /> */}
        <Box>
        <IndoHeader dataMain={dataMain} />
          <Flex width="100%" justifyContent="center" flexDirection={['column', 'column', 'row']} >
          {dataMainLoad ? <Spinner size="lg" marginTop="7rem" /> : <IndoMain dataMain={dataMain} />}
            <Flex flexDirection="column" width={['85%', '80%', '40%']} ml={['auto', 'auto', '7rem']} mr={['auto', 'auto', '0']} >
            {dataMainLoad ? <Spinner size="xl" marginTop="5rem" marginLeft="20rem" /> : <IndoStatistics />}
            {dataMainLoad ? <Spinner size="xl" marginTop="5rem" marginLeft="20rem" /> : <Province />}  
            </Flex>
          </Flex>
        </Box>
      </div>
      
    )
}

export default Indonesia