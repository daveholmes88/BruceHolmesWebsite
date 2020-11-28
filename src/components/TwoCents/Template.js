import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function BlogName() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>BlogName</h1>
                </Col>
            </Row>
        </Container>
    )
}