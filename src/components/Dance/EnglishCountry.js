import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function EnglishCountry() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>EnglishCountry</h1>
                </Col>
            </Row>
        </Container>
    )
}