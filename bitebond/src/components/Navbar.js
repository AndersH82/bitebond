import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Image, Link } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faBookOpen, faRightToBracket, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import bitebondLogo from '../images/bitebond.png';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="blue.50" px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Open Menu"
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center">
                    <Box>
                        <Image src={bitebondLogo} alt="bitebond logo" boxSize="50px" />
                    </Box>
                    <HStack
                        as="nav"
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Link as={RouterLink} to="/profile" color="black">Profile</Link>
                        <Link as={RouterLink} to="/profiles" color="black">Other Chefs</Link>
                        <Link as={RouterLink} to="/recipes" color="black">Recipes List</Link>
                        <Link as={RouterLink} to="/register" color="black">Register</Link>
                        <Link as={RouterLink} to="/login" color="black">Login</Link>
                    </HStack>
                </HStack>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as="nav" spacing={4}>
                        <Link as={RouterLink} to="/profile" color="black"><FontAwesomeIcon icon={faUser} /> Profile</Link>
                        <Link as={RouterLink} to="/profiles" color="black"><FontAwesomeIcon icon={faUsers} /> Other Chefs</Link>
                        <Link as={RouterLink} to="/recipes" color="black"><FontAwesomeIcon icon={faBookOpen} /> Recipes List</Link>
                        <Link as={RouterLink} to="/register" color="black"><FontAwesomeIcon icon={faAddressCard} /> Register</Link>
                        <Link as={RouterLink} to="/login" color="black"><FontAwesomeIcon icon={faRightToBracket} /> Login</Link>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;