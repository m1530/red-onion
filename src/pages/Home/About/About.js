import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FirstDelivary from '../../../images/Image/adult-blur-blurred-background-687824.png';
import AutoRes from '../../../images/Image/chef-cook-food-33614.png';
import HomeDeliy from '../../../images/Image/architecture-building-city-2047397.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faBell, faTruck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="container my-5">
            <h2>Why you choose us</h2>
            <small>Barton waited twenty always repair in within we do. An delighted offending <br />curiosity my is basswoods at. Boy prosperous increasing surrounded</small>

            <Row xs={1} lg={3} className="g-4 mt-4">
                <Col>
                    <div>
                        <img className="img-fluid" src={FirstDelivary} alt="" />
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-2">
                            <FontAwesomeIcon className="first-delivery-icon fa-3x" icon={faBus} />
                        </div>
                        <div className="col-lg-10">
                            <h6>A good auto responder</h6>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future <br /> <NavLink className="about-navlink" to="/more-about">See more <FontAwesomeIcon className="arrow-right-icon" icon={faArrowRight} /></NavLink></p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className="img-fluid" src={AutoRes} alt="" />
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-2">
                            <FontAwesomeIcon className="first-delivery-icon fa-3x" icon={faBell} />
                        </div>
                        <div className="col-lg-10">
                            <h6>Home delivery</h6>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future <br /> <NavLink className="about-navlink" to="/more-about">See more <FontAwesomeIcon className="arrow-right-icon" icon={faArrowRight} /></NavLink></p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className="img-fluid" src={HomeDeliy} alt="" />
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-2">
                            <FontAwesomeIcon className="first-delivery-icon fa-3x" icon={faTruck} />
                        </div>
                        <div className="col-lg-10">
                            <h6>Fast delivery</h6>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future <br /> <NavLink className="about-navlink" to="/more-about">See more <FontAwesomeIcon className="arrow-right-icon" icon={faArrowRight} /></NavLink></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;