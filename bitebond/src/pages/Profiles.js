import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Profile = ({ match }) => {
    const { user } = useContext(UserContext);
    const userId = match.params.userId;


    return (
        <div>
            <h1>Profile Page</h1>
            <p>username: {user ? user.username : 'Guest'}</p>
        </div>
    );
};

export default Profile;