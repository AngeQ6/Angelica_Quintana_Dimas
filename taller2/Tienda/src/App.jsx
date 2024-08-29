// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

import balon1 from './assets/images/basquet.jpg';
import balon2 from './assets/images/futbol.jpg';
import balon3 from './assets/images/volet.jpeg';
import balon4 from './assets/images/tenis.jpg';

function App() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    
    const [products] = useState([
        { 
            id: 1, 
            name: 'Balón de Fútbol Elite', 
            price: 150000, 
            description: 'Este balón de fútbol de nivel profesional ofrece un control superior y precisión en cada tiro.',
            imageUrl: balon2
        },
        { 
            id: 2, 
            name: 'Balón de Baloncesto UltraGrip', 
            price: 95000, 
            description: 'Con un diseño ergonómico y superficie texturizada, este balón de baloncesto asegura un agarre excepcional y un rebote consistente.',
            imageUrl: balon1
        },
        { 
            id: 3, 
            name: 'Balón de Voleibol ProBeach', 
            price: 75000, 
            description: 'Diseñado para resistir las condiciones más duras, este balón de voleibol es ideal para jugar en la playa.',
            imageUrl: balon3
        },
        { 
            id: 4, 
            name: 'Balón de Tenis de Mesa ProSpin', 
            price: 11000, 
            description: 'alón de tenis de mesa de alta calidad, diseñado para ofrecer un rebote consistente y un giro preciso en cada golpe.',
            imageUrl: balon4
        }
    ]);

    

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

   
    return (
        <div className="container">
            <h1>SportStore</h1>
            <div className="main-content">
                <div className="product-details-container">
                    <ProductList products={products} onViewDetails={handleViewDetails} />
                    {selectedProduct && (
                        <ProductDetails
                            product={selectedProduct}
                            onAddToCart={handleAddToCart}
                        />
                    )}
                </div>
                
                <Cart cartItems={cartItems} />
            </div>
        </div>
    );
}

export default App;
