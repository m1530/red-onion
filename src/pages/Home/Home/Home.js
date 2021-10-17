import React from 'react';
import About from '../About/About';
import Hero from '../../Shared/Hero/Hero';
import Homeroute from '../Homeroute/Homeroute';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Homeroute />
            <div className="text-center my-4">
                <Link to="/checkout"><button className="px-4 btn btn-color">Checkout your food</button></Link>
            </div>
            <About></About>
        </div>
    );
};

export default Home;