import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AboutPage from './pages/AboutPage';
import AccountPage from './pages/AccountPage';
import PostsPage from './pages/PostsPage';
import './App.css';
import './firebaseConfig'; // This will ensure Firebase is initialized



function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductListPage />} />
                    <Route path="/product/:id" element={<ProductDetailsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
