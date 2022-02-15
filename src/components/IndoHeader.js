import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { dateShort } from "../utils/dateShort";
import { Flex, Text, Box } from '@chakra-ui/react';

const IndoHeader = ({ dataMain }) => {
  return (
    <Flex m="9rem 0 1rem 0" justifyContent="center">
      <Flex width={['40%', '40%', '30%', '20%']} justifyContent="center">
        <StaticImage src="../images/indocovid.png" alt="Indonesia flag with mask image" width={160} />
      </Flex>
      <Box alignSelf="center" width="40%" ml={['2rem', '2rem', '7rem']}>
        <Text fontSize="3xl">Indonesia Data</Text>
        <Text mt="10px" fontSize="sm" fontWeight="light">Last Update: {dateShort(dataMain.total?.lastUpdate)}</Text>
      </Box>
    </Flex>
  );
};

export default IndoHeader;
