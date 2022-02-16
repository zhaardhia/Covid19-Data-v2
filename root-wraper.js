
import { extendTheme, ChakraProvider, CSSReset } from '@chakra-ui/react'
import React from 'react'
import Layout from "./src/components/Layout"

// const colors = {
//     brand: {
//       900: '#1a365d',
//       800: '#153e75',
//       700: '#2a69ac',
//     },
//   }
  
// const theme = extendTheme({ colors })

export const wrapPageElement = ({ element }) => {
    return (
        <ChakraProvider resetCSS>
            <Layout>
                {element}
            </Layout>
        </ChakraProvider>
      )
};
