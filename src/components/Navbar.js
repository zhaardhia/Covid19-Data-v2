import React from "react";
import { Link } from "gatsby";
import { Box, Text, Flex } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
    return (
        <Flex as="header" background="#2C5282" color="white" p="5" alignItems="center" justifyContent="center">
            <StaticImage src="../images/world.png" alt="World Image" width={100}/>
            <div className="text-center">
                <Text fontSize='2xl' align="center">Covid - 19 Statistics</Text>
                <Text fontSize='1xl' align="center">Stay Safe, Covid Still Alive</Text>
            </div>
            {/* <nav className="text-right">
                <Link className="m-10 hover:text-sky-400" to="/">Global</Link>
                <Link className="m-10 hover:text-sky-400" to="/test">Indonesia</Link>
            </nav> */}
            <Box as="div" position="fixed" right="30px" top="50px">
                <ThemeToggle />
            </Box>
        </Flex>
    )
}

export default Navbar;