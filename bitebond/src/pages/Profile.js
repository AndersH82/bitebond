import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, Image, Button } from '@chakra-ui/react';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <Box p={5}>
      <Card maxW='md' mx="auto">
        <CardHeader>
          <Heading as="h1" mb={5}>Profile Page</Heading>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name={user ? user.username : 'Guest'} src={user ? user.avatarUrl : 'https://bit.ly/sage-adebayo'} />
              <Box>
                <Heading size='sm'>{user ? user.username : 'Guest'}</Heading>
                <Text>{user ? user.bio : 'Welcome to the profile page!'}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            {user ? user.description : 'This is a sample profile description. Update your profile to see more details.'}
          </Text>
        </CardBody>
        <Image
          objectFit='cover'
          src={user ? user.coverImageUrl : 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
          alt='Profile Cover'
        />
        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button colorScheme="teal">Edit Profile</Button>
          <Button colorScheme="red">Logout</Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Profile;