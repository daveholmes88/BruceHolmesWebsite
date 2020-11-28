import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function BathroomLaws() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />
                <Col>
                    <h1>Bathroom Laws</h1>
                </Col>
            </Row>
        </Container>
    )
}