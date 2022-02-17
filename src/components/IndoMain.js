import React from 'react';
import PieChartIndoMain from './charts/PieChartIndoMain';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';
import { motion } from "framer-motion";

const IndoMain = ({ dataMain }) => {
  const MotionBox = motion(Box)

  return (
    <Box width={['85%', '80%', '30%', '20%']} m={['4rem auto', '4rem auto', '4rem 0']} >
      <Grid textColor="white" templateColumns='repeat(2, 2fr)' gap={['1', '3', '4']} textAlign='center'>
        <GridItem >
          <MotionBox background="#E4711E" borderRadius="20px" lineHeight="" p="3" height="6rem" shadow="lg"
            initial={{ scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 16
            }}
          >
            <Text fontSize="lg" fontWeight="light">
              <CountUp end={dataMain.total?.positif} duration={3} separator="." />
            </Text>
            <Text fontWeight="light">Case</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">
              +<CountUp end={dataMain.penambahan?.positif} duration={3} separator="." />
            </Text>
          </MotionBox>
        </GridItem>

        <GridItem>
          <MotionBox background="#DA9360" borderRadius="20px" p="3" height="6rem" shadow="lg"
            initial={{ scale: 0.6 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 16
            }}
          >
            <Text fontSize="lg" fontWeight="light">
              <CountUp end={dataMain.total?.dirawat} duration={3} separator="." />
            </Text>
            <Text fontWeight="light">Active</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">
              +<CountUp end={dataMain.penambahan?.dirawat} duration={3} separator="." />
            </Text>
          </MotionBox>
        </GridItem>

        <GridItem>
          <MotionBox background="#22AABD" borderRadius="20px" p="3" height="6rem" shadow="lg"
            initial={{ scale: 0.4 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 16
            }}
          >
            <Text fontSize="lg" fontWeight="light">
              <CountUp end={dataMain.total?.sembuh} duration={3} separator="." />
            </Text>
            <Text fontWeight="light">Recovered</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">
              +<CountUp end={dataMain.penambahan?.sembuh} duration={3} separator="." />
            </Text>
          </MotionBox>
        </GridItem>

        <GridItem>
          <MotionBox background="#BD2222" borderRadius="20px" p="3" height="6rem" shadow="lg"
            initial={{ scale: 0.2 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              opacity: { ease: "linear" },
              type: "spring",
              stiffness: 200,
              damping: 16, 
            }}
          >
            <Text fontSize="lg" fontWeight="light">
              <CountUp end={dataMain.total?.meninggal} duration={3} separator="." />
            </Text>
            <Text fontWeight="light">Death</Text>
            <Text fontStyle="italic" fontSize="sm" fontWeight="thin">
              +<CountUp end={dataMain.penambahan?.meninggal} duration={3} separator="." />
            </Text>
          </MotionBox>
        </GridItem>

      </Grid>
      <PieChartIndoMain dataMain={dataMain} />
    </Box>
  );
};

export default IndoMain;
