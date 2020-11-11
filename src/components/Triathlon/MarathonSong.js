import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function MarathonSong() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1>MarathonSong</h1>
                </Col>
            </Row>

        </Container>
    )
}