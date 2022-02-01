import React from 'react';
import PieChartIndoMain from './charts/PieChartIndoMain';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const IndoMain = ({ dataMain }) => {
  return (
    <Box width="20%" m="4rem 0">
      <Grid templateColumns='repeat(2, 2fr)' gap='6' textAlign='center'>
        <GridItem background="#E4711E" borderRadius="20px" lineHeight="" p="2rem" shadow="lg">
          {/* <p>{dataMain.total?.positif}</p> */}
          <Text fontSize="lg" fontWeight="light">201.692.437</Text>
          <Text fontWeight="light">Case</Text>
          {/* <p>+{dataMain.penambahan?.positif}</p> */}
          <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+200</Text>
        </GridItem>
        <GridItem background="#DA9360" borderRadius="20px" p="2rem" shadow="lg">
          {/* <p>{dataMain.total?.dirawat}</p> */}
          <Text fontSize="lg" fontWeight="light">201.692.437</Text>
          <Text fontWeight="light">Active</Text>
          {/* <p>+{dataMain.penambahan?.dirawat}</p> */}
          <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+200</Text>
        </GridItem>
        <GridItem background="#22AABD" borderRadius="20px" p="2rem" shadow="lg">
          {/* <p>{dataMain.total?.sembuh}</p> */}
          <Text fontSize="lg" fontWeight="light">201.692.437</Text>
          <Text fontWeight="light">Recovered</Text>
          {/* <p>+{dataMain.penambahan?.sembuh}</p> */}
          <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+200</Text>
        </GridItem>
        <GridItem background="#BD2222" borderRadius="20px" p="2rem" shadow="lg">
          {/* <p>{dataMain.total?.meninggal}</p> */}
          <Text fontSize="lg" fontWeight="light">201.692.437</Text>
          <Text fontWeight="light">Death</Text>
          {/* <p>+{dataMain.penambahan?.meninggal}</p> */}
          <Text fontStyle="italic" fontSize="sm" fontWeight="thin">+200</Text>
        </GridItem>
      </Grid>
      <PieChartIndoMain dataMain={dataMain} />
    </Box>
  );
};

export default IndoMain;
