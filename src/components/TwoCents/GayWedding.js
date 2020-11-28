import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function GayWedding() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Gay Wedding</h1>
                </Col>
            </Row>
        </Container>
    )
}