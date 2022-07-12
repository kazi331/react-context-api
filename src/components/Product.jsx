import React from 'react';

const Product = ({ product }) => {
    const { id, name, price, img } = product;
    return (
        <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ">
           <div className="shadow border-2 border-transparent hover:border-gray-700 hover:shadow-xl m-3 p-2 bg-gray-700 bg-opacity-30">
           <img src={img} alt="" className='w-full' />
            <div className="p-1">
                <h2>{name}</h2>
                <p className='flex justify-between items-center'>
                    <span>${price}</span>
                    <button className='bg-gray-700 px-2 py-1 text-white'>Add to cart</button>
                </p>
            </div>
           </div>
        </div>
    );
};

export default Product;