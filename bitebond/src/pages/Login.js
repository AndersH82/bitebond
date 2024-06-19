import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react'

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const { setUser } = useContext(UserContext);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username: form.username });
    };

    return (
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
            <Button type="submit" colorScheme="blue" mt={4}>Login</Button>
        </form>
    );
};

export default Login;