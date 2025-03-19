import React from 'react';
import '../reset.scss';
import Iphone from "../Hero/Iphone_container.jsx";
import HeroProducts from "../Hero/Hero-Products.jsx";
import '../Module/Header.module.css';
import '../Module/Products.module.css';
import '../Module/Iphone.module.css';
export default function Home() {
    return (
        <div>
            <Iphone />
            <HeroProducts />
        </div>
    );
}
