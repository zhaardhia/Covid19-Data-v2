import React from 'react';
import PieChartIndoMain from './charts/PieChartIndoMain';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const IndoMain = ({ dataMain }) => {
  return (
    <Box width={['85%', '80%', '30%', '20%']} m={['4rem auto', '4rem auto', '4rem 0']} >
      <Grid textColor="white" templateColumns='repeat(2, 2fr)' gap={['1', '3', '4']} textAlign='center'>
        <GridItem background="#E4711E" borderRadius="20px" lineHeight="" p="3" height="6rem" shadow="lg">
          <Text fontSize="lg" fontWeight="light">{dataMain.total?.positif}</Text>
          <Text fontWeight="light">Case</Text>
          <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+{dataMain.penambahan?.positif}</Text>
        </GridItem>
        <GridItem background="#DA9360" borderRadius="20px" p="3" height="6rem" shadow="lg">
          <Text fontSize="lg" fontWeight="light">{dataMain.total?.dirawat}</Text>
          <Text fontWeight="light">Active</Text>
          <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+{dataMain.penambahan?.dirawat}</Text>
        </GridItem>
        <GridItem background="#22AABD" borderRadius="20px" p="3" height="6rem" shadow="lg">
          <Text fontSize="lg" fontWeight="light">{dataMain.total?.sembuh}</Text>
          <Text fontWeight="light">Recovered</Text>
          <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+{dataMain.penambahan?.sembuh}</Text>
        </GridItem>
        <GridItem background="#BD2222" borderRadius="20px" p="3" height="6rem" shadow="lg">
          <Text fontSize="lg" fontWeight="light">{dataMain.total?.meninggal}</Text>
          <Text fontWeight="light">Death</Text>
          <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+{dataMain.penambahan?.meninggal}</Text>
        </GridItem>
      </Grid>
      <PieChartIndoMain dataMain={dataMain} />
    </Box>
  );
};

export default IndoMain;
