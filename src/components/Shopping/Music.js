import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ShoppingIndex from './ShoppingIndex'

export default function Music() {

    return (
        <Container>
            <Row>
                <ShoppingIndex />
                <Col>
                    <h1>Music</h1>
                </Col>
            </Row>
        </Container>
    )
}