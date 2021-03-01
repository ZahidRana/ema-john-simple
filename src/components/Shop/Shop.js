import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);

    const [products, setProducts] = useState(firstTen);
    return (
        <div>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;