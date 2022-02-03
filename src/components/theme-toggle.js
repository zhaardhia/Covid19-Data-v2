import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

import React from 'react';

export const ThemeToggle = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon)
  console.log()
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
    >
      <IconButton 
      icon={<ToggleIcon />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleMode}
    />
    </motion.button>
  );
};
