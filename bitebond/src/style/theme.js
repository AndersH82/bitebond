import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
      // Targeting the navbar component for styling
      Navbar: {
        baseStyle: {
          // Customize the base style of the navbar here
          bg: 'blue.500', // Change the background color
          color: 'white', // Change the text color
        },
        variants: {
          // Customize different variants of the navbar if needed
          solid: {
            bg: 'green.500', // Solid variant background color
            color: 'white', // Text color
          },
        },
      },
    },
  });