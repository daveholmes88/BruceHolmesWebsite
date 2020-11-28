import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function TwoCents() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />
                <Col>
                    <h1>Two Cents</h1>
                </Col>
            </Row>
        </Container>
    )
}