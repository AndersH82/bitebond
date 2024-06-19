import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Box
} from '@chakra-ui/react';

const UserRegistration = () => {
    const [form, setForm] = useState({ username: '', password: '', email: '' });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Box width={["90%", "70%", "50%", "30%"]}>
                <form onSubmit={handleSubmit}>
                    <FormControl id="username" isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
                        <FormHelperText>Enter your username.</FormHelperText>
                    </FormControl>
                    <FormControl id="password" isRequired mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
                        <FormHelperText>Enter your password.</FormHelperText>
                    </FormControl>
                    <FormControl id="email" isRequired mt={4}>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <Button type="submit" colorScheme="blue" mt={4}>Register</Button>
                </form>
            </Box>
        </Box>
    );
};

export default UserRegistration;