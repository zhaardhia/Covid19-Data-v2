import React from "react";
import { Link } from "gatsby";
import { Box, Text, Flex } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
    return (
        <Flex as="header" background="#0F3145" color="white" p="5" alignItems="center" justifyContent="center" shadow="xl">
            <StaticImage src="../images/world.png" alt="World Image" width={80}/>
            <div className="text-center">
                <Text fontSize='2xl' align="start">Covid - 19 Statistics</Text>
                <Text fontSize='xs' align="start">Stay Safe, Covid Still Alive</Text>
            </div>
            {/* <nav className="text-right">
                <Link className="m-10 hover:text-sky-400" to="/">Global</Link>
                <Link className="m-10 hover:text-sky-400" to="/test">Indonesia</Link>
            </nav> */}
            <Box as="div" background="#CBD5E0" position="fixed" right="30px" top="40px" borderRadius="10">
                <ThemeToggle />
            </Box>
        </Flex>
    )
}

export default Navbar;