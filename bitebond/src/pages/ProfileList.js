import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = () => {
    const profiles = [
        { id: 1, username: 'User1' },
        { id: 2, username: 'User2' },
    ];

    return (
        <div>
            <h1>Profile List</h1>
            <ul>
            {profiles.map((profile) => (
                <li key={profile.id}>
                    <Link to={`/profile/${profile.id}`}>{profile.username}</Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProfileList;