import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function Health() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Health Tips</h1>
                </Col>
            </Row>
        </Container>
    )
}