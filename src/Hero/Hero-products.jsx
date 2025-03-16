import React from 'react';
import '../reset.scss';

export default function HeroProducts() {
    return (
        <div className="full-container">
            <div className="left-container">
                <div className="hero-full-ps5-container">
                    <div className="ps5-image" ></div>
                    <div className="ps5-text-container">
                        <h1 className="ps5-title">Playstation 5</h1>
                        <p className="ps5-description">
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                        </p>
                    </div>
                </div>

                <div className="half-halves">
                    <div className="hero-half-Apple-airpods-max-container">
                        <div className="max-image"></div>
                        <div className="max-text-container">
                            <h2 className="max-title1">Apple</h2>
                            <h2 className="max-title2">AirPods</h2>
                            <h2 className="max-title3">Max</h2>
                            <p className="max-description1">Computational audio.</p>
                            <p className="max-description2">Listen, it's powerful</p>
                        </div>
                    </div>


                    <div className="hero-half-Apple-vision-pro-container">
                        <div className="max-image2"></div>
                        <div className="max-text-container">
                            <h2 className="max-title4">Apple</h2>
                            <h2 className="max-title4">Vision <span className="bold-text">Pro</span></h2>

                            <p className="max-description1">An immersive way to</p>
                            <p className="max-description2">experience</p>
                            <p className="max-description2">entertainment.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="right-container">
    <div className="macbook-half-1">
        <div className="mac-text-container">
            <h2 className="mac-title1">MacBook</h2>
            <h2 className="mac-title2"><span className="bold-text">Air</span></h2>
            <p className="mac-description">
                The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </p>
            <button className="shop-now">Shop Now</button>
        </div>
    </div>
    <div className="macbook-half-2">
        <div className="macbook-half-image"></div>
    </div>
</div>

        </div>
    );
}
