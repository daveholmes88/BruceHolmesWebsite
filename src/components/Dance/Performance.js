import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Performance() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Performance</h1>
                </Col>
            </Row>
        </Container>
    )
}