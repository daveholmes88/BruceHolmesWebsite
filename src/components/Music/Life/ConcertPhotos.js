import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import LifeIndex from './LifeIndex'

export default function ConcertPhotos() {

    return (
        <Container>
            <Row>
                <LifeIndex />
                <Col>
                    <h1 className='text-center'>CD Release Concert & Celebration</h1>
                    <h2 className='text-center'>November 29, 2005 At Lakeshore Theater</h2>
                </Col>
            </Row>
        </Container>
    )
}