// src/pages/AccountPage.js
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';

const AccountPage = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return unsubscribe; // Cleanup on unmount
    }, [auth]);

    if (user) {
        return <Profile user={user} />;
    } else {
        return (
            <div>
                <h2>Login</h2>
                <Login />
                <h2>Register</h2>
                <Register />
            </div>
        );
    }
};

export default AccountPage;
