import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import FeldenkraisIndex from './FeldenkraisIndex'
import FeldenkraisTitle from './FeldenkraisTitle'

export default function FreeLesson() {

    return (
        <Container>
            <Row>
                <FeldenkraisIndex />
                <Col>
                    <FeldenkraisTitle />
                    <h1>Listen to a Free Feldenkrais Lesson</h1>
                </Col>
            </Row>
        </Container>
    )
}