import React from 'react';
import Card from '../../ui/card';

const Product = ({ products }) => {
    console.log(products, "products");
    
    return (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
            products.map((product) => (
                <Card key={product.id} product={product}></Card>
            ))
            }
        </div>
    );
};

export default Product;