import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegistration from './pages/UserRegistration';
import Profile from './pages/Profile';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import RecipeList from './pages/RecipeList';
import ProfileList from './pages/ProfileList';
import Navbar from './components/Navbar';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/profiles" element={<ProfileList />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}


export default App;
