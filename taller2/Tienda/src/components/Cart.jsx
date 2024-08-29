// src/components/Cart.jsx
import React from 'react';

function Cart({ cartItems }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart">
            <h3>Carrito de Compras</h3>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                ))}
            </ul>
            <div className="total">Total: {total}</div>
        </div>
    );
}

export default Cart;
