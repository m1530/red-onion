import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from 'react-bootstrap/Button'


const TopMenu = () => {
    const { users, logOut } = useAuth();
    console.log(users.email);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" className="text-dark py-3">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block align-top text-dark" height="34px"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/cart" className="fw-bold"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>

                            {
                                users?.email ? <Button onClick={logOut} variant="warning" size="sm">
                                    Logout
                                </Button> :
                                    <div className="d-flex">
                                        <Nav.Link as={NavLink} to="/login" className="fw-bold">Login</Nav.Link>
                                        <Nav.Link as={NavLink} to="/signup"><button className="btn btn-danger btn-sm rounded-pill px-3">Signup</button></Nav.Link>
                                    </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopMenu;