import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriWetsuits() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1>TriWetsuits</h1>
                </Col>
            </Row>

        </Container>
    )
}