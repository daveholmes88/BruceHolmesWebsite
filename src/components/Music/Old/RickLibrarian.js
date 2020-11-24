import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import OldIndex from './OldIndex'

export default function RickLibrarian() {

    return (
        <Container>
            <Row>
                <OldIndex />
                <Col>
                    <h1>Rick Librarian</h1>
                </Col>
            </Row>
        </Container>
    )
}