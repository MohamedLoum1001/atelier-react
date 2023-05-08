import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='text-white'>Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-4">
                        <Link to='/' className='text-white text-decoration-none'>Home</Link>
                        <Link to='/services' className='text-white text-decoration-none'>Services</Link>
                        <Link to='/product' className='text-white text-decoration-none'>Product</Link>
                    </Nav>
                    <Link to='/connexion' className='btn btn-danger text-white text-decoration-none'>Déconnexion</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

