import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { dateShort } from "../utils/dateShort";
import { Flex, Text, Box, SlideFade } from '@chakra-ui/react';

const IndoHeader = ({ dataMain }) => {
  return (
    <Flex m="9rem 0 1rem 0" justifyContent="center">
      <Flex width={['40%', '40%', '30%', '20%']} justifyContent="center">
        <SlideFade in={true} offsetY='50px'>
          <StaticImage src="../images/indocovid.png" alt="Indonesia flag with mask image" width={160} />
        </SlideFade>
      </Flex>
      <Box alignSelf="center" width="40%" ml={['2rem', '2rem', '7rem']}>
        <SlideFade in={true} offsetY='50px'>
          <Text fontSize="3xl">Indonesia Data</Text>
        </SlideFade>
        <SlideFade in={true} offsetY='50px'> 
          <Text mt="10px" fontSize="sm" fontWeight="light">Last Update: {dateShort(dataMain.total?.lastUpdate)}</Text>
        </SlideFade>
      </Box>
    </Flex>
  );
};

export default IndoHeader;
