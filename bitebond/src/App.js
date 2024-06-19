import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileList from './pages/ProfileList';
import RecipeList from './pages/RecipeList';
import UserRegistration from './pages/UserRegistration';
import Login from './pages/Login';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profiles" element={<ProfileList />} />
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/register" element={<UserRegistration />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
