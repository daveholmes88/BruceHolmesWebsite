import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Ballroom() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Ballroom</h1>
                </Col>
            </Row>
        </Container>
    )
}