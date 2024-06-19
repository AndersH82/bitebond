import React, { useState } from 'react';

const UserRegistration = () => {
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Register</button>   
        </form>
    );
};

export default UserRegistration;