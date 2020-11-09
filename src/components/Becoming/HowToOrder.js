import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function HowToOrder() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                </Col>
            </Row>
        </Container>
    )
}