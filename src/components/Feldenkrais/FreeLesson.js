import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import FeldenkraisIndex from './FeldenkraisIndex'
import FeldenkraisTitle from './FeldenkraisTitle'

export default function FreeLesson() {

    return (
        <Container>
            <Row>
                <FeldenkraisIndex />
                <Col>
                    <FeldenkraisTitle />
                    <Card>
                        <Container>
                            <Card.Title><h1>Listen to a Free Feldenkrais Lesson</h1></Card.Title>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}