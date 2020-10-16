import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar sticky='top' bg="primary" variant="dark">
            <Container>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/"><h3>Bruce Holmes</h3></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="mr-sm-2">
                    <NavDropdown alignRight id='nav-dropdown' title={<span><i className="navbar-toggler-icon"></i></span>}>
                        <NavDropdown.Item href="/music">Music</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/feldenkrais">Feldenkrais</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/dance">Dance</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/Triathlon">Triathlon</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/sciencefiction">Science Fiction</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/twocents">Two Cents</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/shopping">Shopping</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}