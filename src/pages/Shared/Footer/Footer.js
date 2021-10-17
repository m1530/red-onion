import React from 'react';
import FooterLogo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark text-white pb-3">
            <div className="container">
                <div className="row mb-5 pt-5">
                    <div className="col-lg-7 mb-4">
                        <img src={FooterLogo} alt="" height="40px" />
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <small>
                                    <p>About online food</p>
                                    <p>Read our blog</p>
                                    <p>Sign up to deliver</p>
                                    <p>Add your restaurant</p>
                                </small>
                            </div>
                            <div className="col-lg-6">
                                <small>
                                    <p>Get helps</p>
                                    <p>Read FAQs</p>
                                    <p>View all cites</p>
                                    <p>Reataurants near me</p>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-7">
                        <p><small>Copyright &copy; 2020 online food</small></p>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-nav">
                            <p><small>Privacy Policy</small></p>
                            <p><small>Trams of Use</small></p>
                            <p><small>Pricing</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;