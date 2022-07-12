import React from 'react';
import Product from '../components/Product';

const Products = () => {
    const products = [
        {id: 1, name: 'product name', price: 22, img: 'https://api.lorem.space/image/watch?w=250&h=250'},
        {id: 2, name: 'product name', price: 22, img: 'https://api.lorem.space/image/watch?w=250&h=250'},
        {id: 3, name: 'product name', price: 22, img: 'https://api.lorem.space/image/watch?w=250&h=250'},
        {id: 4, name: 'product name', price: 22, img: 'https://api.lorem.space/image/watch?w=250&h=250'},
        {id: 5, name: 'product name', price: 22, img: 'https://api.lorem.space/image/watch?w=250&h=250'},
        {id: 6, name: 'product name', price: 22, img: 'https://api.lorem.space/image/watch?w=250&h=250'},
        {id: 6, name: 'product name', price: 22, img: 'https://api.lorem.space/image/watch?w=250&h=250'},
    ]
    return (
        <div className=''>
           <h2 className='text-center py-4 text-xl'>All Products</h2>
           <div className="flex flex-wrap">
            {products.map(product => <Product key={product.id} product={product} /> )}
           </div>
        </div>
    );
};

export default Products;