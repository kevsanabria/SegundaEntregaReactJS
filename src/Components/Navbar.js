import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ShoppingCart from './ShoppingCart';


function NavBar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><NavLink className='text-decoration-none text-dark mx-3' to={"/"}>LocalStore</NavLink></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to={"/category/smartphones"} ><Button className='mx-2'>Smartphones</Button></NavLink>
                        <NavLink to={"/category/laptops"} ><Button className='mx-2'>Laptops</Button></NavLink>
                        <NavLink to={"/category/mens-watches"} ><Button className='mx-2'>Men's Watches</Button></NavLink>
                        <NavLink to={"/category/womens-watches"} ><Button className='mx-2'>Woman's Watches</Button></NavLink>
                    </Nav>
                    <Button variant='success'><ShoppingCart/></Button>
                </Container>

            </Navbar>
        </div>
    );
}

export default NavBar;
