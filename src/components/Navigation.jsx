import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    return (
        <header className='capitalize flex justify-between  bg-gray-700 p-4 text-gray-100'>
            <nav className='flex flex-col sm:flex-row'>
                <NavLink className="px-3 py-2 hover:bg-gray-800" to="/">Home</NavLink>
                <NavLink className="px-3 py-2 hover:bg-gray-800" to="/about">About</NavLink>
                <NavLink className="px-3 py-2 hover:bg-gray-800" to="/products">products</NavLink>
            </nav>
            <NavLink className="px-3 py-2" to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <sup> 0</sup>
            </NavLink>
        </header>
    );
};

export default Navigation;