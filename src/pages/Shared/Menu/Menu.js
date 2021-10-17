import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <Nav className="justify-content-center my-5">
            <Nav.Item>
                <Nav.Link as={NavLink} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to="/breakfast">Breakfast</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to="/lunch">Lunch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to="/dinner">Dinner</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Menu;