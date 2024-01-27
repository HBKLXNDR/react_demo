// src/utils/api.js
import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('https://yourapi.com/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

// Add more utility functions for other API calls