import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ShoppingIndex from './ShoppingIndex'

export default function TShirts() {

    return (
        <Container>
            <Row>
                <ShoppingIndex />
                <Col>
                    <h1>TShirts</h1>
                </Col>
            </Row>
        </Container>
    )
}