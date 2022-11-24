import React from "react";
import { Link } from "gatsby";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { StaticImage, Img } from "gatsby-plugin-image";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

const Navbar = () => {
    const navColor = useColorModeValue('#E8F4F5', '#0F3145')
    const fontColor = useColorModeValue('#000000', '#FFFFFF')
    const btnMode = useColorModeValue('#CBD5E0', '#1A365D')
    return (
        <Flex as="header" position="fixed" top="0" left="0" w="100%" zIndex="modal" background={navColor} color={fontColor} backdropFilter="saturate(180%) blur(5px)" p={['3', '3', '3']} alignItems="center" justifyContent="center" shadow="xl">
            <StaticImage src="../images/world.png" alt="World Image" width={80} placeholder="none" />
            <div>
                <Text fontSize='2xl' align="start">Covid - 19 Statistics</Text>
                <Text fontSize='xs' align="start">Stay Safe, Covid Still Alive</Text>
            </div>
            {/* <nav className="text-right">
                <Link className="m-10 hover:text-sky-400" to="/">Global</Link>
                <Link className="m-10 hover:text-sky-400" to="/test">Indonesia</Link>
            </nav> */}
            
            <Box as="div" background={btnMode} position="fixed" right={['8px', '30px', '30px']} top={['60px', '35px', '35px']} borderRadius="10">
                <ThemeToggle />
            </Box>
        </Flex>
    )
}

export default Navbar;