import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Box as="footer" background="#2C5282" color="white" p="5">
            <Box >
                <Text align="center">&copy;2021, firzhaardhia</Text>
                <Text align="center">Data API from shahmirfaisal & Reynadi531</Text>
            </Box>
        </Box>
    )
}

export default Footer