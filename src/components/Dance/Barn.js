import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Barn() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Barn</h1>
                </Col>
            </Row>
        </Container>
    )
}