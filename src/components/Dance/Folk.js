import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Folk() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Folk</h1>
                </Col>
            </Row>
        </Container>
    )
}