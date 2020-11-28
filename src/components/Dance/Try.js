import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Try() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Try</h1>
                </Col>
            </Row>
        </Container>
    )
}