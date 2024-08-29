// src/components/ProductItem.jsx
import React from 'react';

function ProductItem({ product, onViewDetails }) {
    return (
        <div className="product-item">
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => onViewDetails(product)}>Ver detalles</button>
        </div>
    );
}

export default ProductItem;
