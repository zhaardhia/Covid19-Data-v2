import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    const footColor = useColorModeValue('#E8F4F5', '#0F3145')
    const fontColor = useColorModeValue('#000000', '#FFFFFF')
    return (
        <Box as="footer" background={footColor} color={fontColor} p="5">
            <Box >
                <Text align="center">&copy;2021, firzhaardhia</Text>
                <Text align="center">Data API from shahmirfaisal & Reynadi531</Text>
            </Box>
        </Box>
    )
}

export default Footer