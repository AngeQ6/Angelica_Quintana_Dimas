// src/components/ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onViewDetails }) {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onViewDetails={onViewDetails}
                />
            ))}
        </div>
    );
}

export default ProductList;
