// src/services/productService.js
import axios from 'axios';

export const getProducts = async () => {
    try {
        const response = await axios.get('https://yourapi.com/products');
        return response.data;
    } catch (error) {
        console.error('Error getting products:', error);
    }
};

// Add more product-related services