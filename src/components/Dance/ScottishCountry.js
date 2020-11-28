import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function ScottishCountry() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>ScottishCountry</h1>
                </Col>
            </Row>
        </Container>
    )
}