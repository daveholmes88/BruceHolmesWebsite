import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriTraining() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1>TriTraining</h1>
                </Col>
            </Row>

        </Container>
    )
}