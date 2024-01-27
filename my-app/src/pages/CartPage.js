// src/pages/CartPage.js
import React, { useContext } from 'react';
import StoreContext from '../context/StoreContext';

const CartPage = () => {
    const { state } = useContext(StoreContext);

    return (
        <div>
            <h1>Your Cart</h1>
            {/* Display cart items */}
            {state.cart.map(item => (
                <div key={item.id}>
                    <h2>{item.productName}</h2>
                    {/* Other cart item details */}
                </div>
            ))}
        </div>
    );
};

export default CartPage;
