import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriCramps() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1>TriCramps</h1>
                </Col>
            </Row>

        </Container>
    )
}