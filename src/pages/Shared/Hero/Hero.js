import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="mb-3">
                <div className="text-center">
                    <h1>Best food waiting for your belly</h1>
                    <div className="search-2 mx-auto">
                        <input type="text" placeholder="Search food items" />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;