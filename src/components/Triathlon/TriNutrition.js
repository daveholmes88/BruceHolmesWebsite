import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriNutrition() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1>TriNutrition</h1>
                </Col>
            </Row>

        </Container>
    )
}