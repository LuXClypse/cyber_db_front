import React from 'react';
import '../reset.scss';
import Iphone from "../Hero/Iphone_container.jsx";
import HeroProducts from "../Hero/Hero-Products.jsx";

export default function Home() {
    return (
        <div>
            <Iphone />
            <HeroProducts />
        </div>
    );
}
