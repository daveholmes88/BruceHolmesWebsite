import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function Becoming() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                    <br></br><br></br>
                    <h4 className='text-center'>This is the book I wish I had when I was learning to call.</h4>
                    <Image
                        alt='becomingCover'
                        src='/Becoming/BecomingCover.jpg'
                        fluid='true'
                    />
                </Col>
            </Row>
        </Container >
    )
}