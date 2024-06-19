import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRegistration from './pages/UserRegistration';
import Profile from './pages/Profile';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import RecipeList from './pages/RecipeList';
import ProfileList from './pages/ProfileList';
import Navbar from './components/Navbar';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Nabar />
        <Switch>
          <Router path="/register" component={UserRegistration} />
          <Router patch="/profile/:id" component={Profile} />
          <Router patch="/recipe/:id" component={Recipe} />
          <Router path="/login" component={Login} />
          <Router path="/recipes" component={RecipeList} />
          <Router path="/profiles" component={ProfileList} />
        </Switch>
      </Router>
    </UserProvider>
  );
}


export default App;
