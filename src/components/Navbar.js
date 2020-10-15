import React from 'react';
import { Nav, Navbar, Button, Container, NavDropdown } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar sticky='top' >
            <Container>
                <Nav>
                    <Nav.Item>
                        <h3>Bruce Holmes</h3>
                    </Nav.Item>
                </Nav>
                <Nav className="mr-sm-2">
                    <NavDropdown alignRight id='nav-dropdown' title={<span><i className="navbar-toggler-icon"></i></span>}>
                        <NavDropdown.Item href="/example-app/section-a/">Section A</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}