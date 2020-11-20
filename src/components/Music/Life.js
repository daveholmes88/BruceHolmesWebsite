import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ReactPlayer from "react-player"
import ReactAudioPlayer from 'react-audio-player'

import LifeIndex from './LifeIndex'

export default function Life() {

    return (
        <Container>
            <Row>
                <LifeIndex />
                <Col>
                    <h1>Life's An Intelligence Test</h1>
                    <ReactAudioPlayer
                        controls
                        src='/Music/LifeSongs/Angels.mp3'
                    />
                    <ReactPlayer url='https://www.youtube.com/watch?v=u0FpVF2xrZ4' />
                </Col>
            </Row>
        </Container>
    )
}