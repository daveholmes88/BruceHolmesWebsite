import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ContactIndex from './ContactIndex'

export default function ContactBruce() {

    return (
        <Container>
            <Row>
                <ContactIndex />
                <Col>
                    <h1>My first name at Brucetholmes.com</h1>
                </Col>
            </Row>
        </Container>
    )
}