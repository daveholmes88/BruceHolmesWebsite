import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ShoppingIndex from './ShoppingIndex'

export default function SciFi() {

    return (
        <Container>
            <Row>
                <ShoppingIndex />
                <Col>
                    <h1>SciFi</h1>
                </Col>
            </Row>
        </Container>
    )
}