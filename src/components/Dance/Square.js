import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Square() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Square</h1>
                </Col>
            </Row>
        </Container>
    )
}