import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import OldIndex from './OldIndex'

export default function ChicagoTribune() {

    return (
        <Container>
            <Row>
                <OldIndex />
                <Col>
                    <h1>Chicago Tribune</h1>
                </Col>
            </Row>
        </Container>
    )
}