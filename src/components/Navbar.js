import React, { useState } from 'react';
import { Nav, Navbar, Container, NavDropdown, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

export default function NavBar() {
    const [show, setShow] = useState(false)
    return (
        <Navbar sticky='top' bg="dark" variant="dark">
            <Container>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/"><h1>Bruce Holmes</h1></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="mr-sm-2">
                    <Nav.Item>
                        <Nav.Link href="/Feldenkrais.html"><h4>Feldenkrais</h4></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Becoming.html"><h4>Square Dance Calling</h4></Nav.Link>
                    </Nav.Item>
                    <NavDropdown alignRight id='nav-dropdown' title={<span><i className="navbar-toggler-icon"></i></span>}>
                        <NavDropdown.Item href="/SciFi/Anvil.html">Science Fiction</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/Music/Music.html">Music</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/twocents">Two Cents</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/Touch/TouchMailList.html">Contact</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/shopping">Shopping</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/movement'>Movement</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}