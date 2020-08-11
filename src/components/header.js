import React from 'react';
import { Navbar,Nav,Image } from 'react-bootstrap';

function Header() {
    return (
        <div className="Header m-2 fixed-top">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home"> <Image src="https://fbcd.co/product-lg/26800be69dc981df38d57328c4b4772c_resize.jpg" rounded width="200" height="50"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#features">PRODUCTS</Nav.Link>
                        <Nav.Link href="#pricing">ABOUT US</Nav.Link>                        
                    </Nav>                    
                </Navbar.Collapse>
                <Image src="https://w7.pngwing.com/pngs/670/451/png-transparent-grey-logistics-logo-delivery-courier-freight-transport-computer-icons-cargo-symbols-delivery-miscellaneous-angle-company.png" rounded width="200" height="50"/>
            </Navbar>
        </div>
    );
}

export default Header;
