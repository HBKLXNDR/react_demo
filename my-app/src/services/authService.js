// src/services/authService.js
import axios from 'axios';

export const login = async (credentials) => {
    try {
        const response = await axios.post('https://yourapi.com/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
    }
};

// Add more authentication-related services