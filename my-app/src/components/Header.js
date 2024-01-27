import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                {/* Logo here */}
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/account">Account</Link>
                <Link to="/posts">Posts</Link>
                {/* Add more links as needed */}
            </nav>
        </header>
    );
};

export default Header;