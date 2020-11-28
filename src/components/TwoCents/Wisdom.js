import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function Wisdom() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Wisdom: Hax, Pitts, Strayed & Sivers</h1>
                </Col>
            </Row>
        </Container>
    )
}