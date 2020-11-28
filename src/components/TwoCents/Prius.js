import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function Prius() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>My Prius</h1>
                </Col>
            </Row>
        </Container>
    )
}