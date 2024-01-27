// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onClick }) => {
    return (
        <div className="product-card" onClick={onClick}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            {/* Other details like price, rating, etc. */}
        </div>
    );
};

export default ProductCard;
