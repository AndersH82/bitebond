import React from 'react';
import { Box, Flex, Image, Text, Button, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import homeImage from '../images/meatdish.png';

const Home = () => {
    return (
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" minH="100vh" p={4}>
            <Box flex="1" display="flex" justifyContent="center">
                <Image 
                    src={homeImage} 
                    alt="Home Image" 
                    boxSize={{ base: '300px', md: '400px', lg: '500px' }} 
                    objectFit="cover"
                />
            </Box>
            <Box flex="1" textAlign={{ base: 'center', md: 'left' }} p={4}>
                <Text fontSize="2xl" mb={4}>Welcome to BiteBond</Text>
                <Text mb={8}>Discover and share amazing recipes with other chefs.</Text>
                <Stack direction="row" spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
                    <Button as={RouterLink} to="/login" colorScheme="blue">Login</Button>
                    <Button as={RouterLink} to="/register" colorScheme="teal">Sign Up</Button>
                </Stack>
            </Box>
        </Flex>
    );
};

export default Home;