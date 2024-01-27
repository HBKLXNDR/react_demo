// src/pages/ProductListPage.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useNavigate } from 'react-router-dom';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    return (
        <div className="product-list-page">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product.id)}
                />
            ))}
        </div>
    );
};

export default ProductListPage;
