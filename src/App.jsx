import Homepage from './components/homepage/Homepage.jsx';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/shop/Shop';
import Shoe from './components/shop/Shoe';
import {useEffect, useState} from 'react'

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/shoe" element={<Shoe />} />
                {/* Add other routes here */}
            </Routes>
        </>
    )
}