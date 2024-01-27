// src/components/Profile.js
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const Profile = ({ user }) => {
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Handle successful signout
        }).catch((error) => {
            // Handle errors
        });
    };

    return (
        <div>
            <h1>Welcome, {user.displayName || user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
