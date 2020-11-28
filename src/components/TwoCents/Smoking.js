import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function Smoking() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Smoking</h1>
                </Col>
            </Row>
        </Container>
    )
}