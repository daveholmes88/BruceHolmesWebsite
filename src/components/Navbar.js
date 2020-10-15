import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar sticky='top' >
            <Container>
                <Nav>
                    <Nav.Item>
                        <h3>Bruce Holmes</h3>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}