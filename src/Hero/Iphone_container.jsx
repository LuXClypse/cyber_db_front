import React from 'react';
import '../reset.scss';
import '../Module/Iphone.module.css';
export default function Iphone() {
    return (
        <div className="iphone-container">
            <div className="iphone-text-container">
                <div className="iphone-text">
                    <div className="Pro-text">Pro.Beyond.</div>
                    <div className="Iphone-14-text">IPhone 14<div className="Bold-Pro">Pro</div></div>
                    <div className="Iphone-Description">Created to change everything for the better. For everyone</div>


                    <button className="shop-now-button">Shop Now</button>
                </div>
            </div>
            <div className="fake-container"></div>
            <div className="iphone-img"></div>
        </div>
    );
}

