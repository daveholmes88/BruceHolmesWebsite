import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriPicksPans() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1>TriPicksPans</h1>
                </Col>
            </Row>

        </Container>
    )
}