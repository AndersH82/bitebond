import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img src={require('../images/bitebond.png')} alt="bitebond logo" className="logo" />
            <button className="hamburger" onClick={toggleMenu}>
                &#9776;;
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/profiles">Profiles</Link>
            </div>
        </nav>
    );
};

export default Navbar;