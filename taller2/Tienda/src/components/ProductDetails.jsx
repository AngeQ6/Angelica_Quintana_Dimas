// src/components/ProductDetails.jsx
import React from 'react';

function ProductDetails({ product, onAddToCart }) {
    if (!product) {
        return <div>Seleccione un producto para ver los detalles.</div>;
    }

    return (
        <div className="product-details">
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Agregar al carrito</button>
        </div>
    );
}

export default ProductDetails;
