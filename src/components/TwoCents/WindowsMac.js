import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function WindowsMac() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Windows Vs. Mac</h1>
                </Col>
            </Row>
        </Container>
    )
}