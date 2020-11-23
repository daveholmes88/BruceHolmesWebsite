import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import FeldenkraisIndex from './FeldenkraisIndex'
import FeldenkraisTitle from './FeldenkraisTitle'

export default function PressQuotes() {

    return (
        <Container>
            <Row>
                <FeldenkraisIndex />
                <Col>
                    <FeldenkraisTitle />
                    <h1 className='text-center'>Press Quotes for</h1>
                    <h3 className='text-center'>The Feldenkrais Lessons: Awareness Through Movement</h3>
                    <p><span class='quote'>
                        "The Feldenkrais Lessons, a 24 cassette, 48 lesson series developed by Chicago based practitioner Bruce Holmes, is excellent. Consolidated from a course that Holmes conducts, this series is an actual workshop that you can do over two month’s time. The course includes theory as well as exercise and moves at an easy pace. The directions are clear and simple, the lessons fascinating and a pure joy to do. The series has our highest recommendations." </span> <br></br>New Age Magazine <br></br> <br></br>
                        <span class='quote'>"I have used them many times over and have recommended them to yoga students, teachers, bodywork therapists of all kinds - all of whom have similar results. The exercises produce results that take many more hours, days or even years of learning through other methods. I have listened to other Feldenkrais tapes and have found your instructions to be by far the clearest to follow while in keeping with the discovery principle so central to this process. Others lose me. Best Wishes." </span><br></br>
                    Don Stapleton, Kripalu Yoga Institute <br></br> <br></br>
                        <span class='quote'>"...The voice is soothing, gentle, confidence-inspiring. It belongs to Bruce Holmes, a practitioner and teacher of Feldenkrais's work. This bit of explanation is part of a cassette tape, which is part of a series, now in two volumes of 24 lessons each, that is the best teaching aid we've heard or seen yet.
                    The lessons were recorded during actual workshops that Bruce Holmes taught, and you can hear his easy interaction with the students; how he involves them in the dialogue with their own bodies; how he encourages them gently and corrects them softly; how he unselfconsciously slips occasionally or changes his mind; and how the entire class sometimes disolves into laughter. Bruce Holmes must be fun to learn from."</span>
                        <br></br>The Stroking Times <br></br> <br></br>
                        <span class='quote'>"Very, very good indeed."</span> <br></br>Moshe Feldenkrais
                </p>
                </Col>
            </Row>
        </Container>
    )
}