import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

import MusicIndex from './MusicIndex'

export default function Radio() {

    return (
        <Container>
            <Row>
                <MusicIndex />
                <Col>
                    <h1>Radio</h1>
                </Col>
            </Row>
        </Container>
    )
}