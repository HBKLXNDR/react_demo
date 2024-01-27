// src/pages/ProductDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

const ProductDetailsPage = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;
    if (!product) return <p>Product not found</p>;

    return (
        <div className="product-detail-page">
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Rating: {product.rating} / 5</p>
            <p>In Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            {/* Render additional images */}
            {product.images && product.images.map((img, index) => (
                <img key={index} src={img} alt={`${product.title} ${index + 1}`} />
            ))}
        </div>
    );
};

export default ProductDetailsPage;
