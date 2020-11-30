import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';

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
                    <p>This is the first of the 48 lessons contained on The Feldenkrais Lessons: Awareness Through Movement, an introduction to the Feldenkrais Method. It runs a little over 40 minutes.</p>
                    <br></br>
                    <ReactAudioPlayer
                        src='01 Introduction, Standing Turning, Pelvic Clock.mp3'
                        controls
                    />
                </Col>
            </Row>
        </Container>
    )
}