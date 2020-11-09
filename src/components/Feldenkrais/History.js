import React from 'react'
import { Container, Row, Card, Col, Image } from 'react-bootstrap'

import FeldenkraisIndex from './FeldenkraisIndex'
import FeldenkraisTitle from './FeldenkraisTitle'

export default function History() {

    return (
        <Container>
            <Row>
                <FeldenkraisIndex />
                <Col>
                    <FeldenkraisTitle />
                    <Card>
                        <Container>
                            <Card.Title><h1 className='text-center'>History of the Lessons</h1></Card.Title>
                            <Card.Img src='/Feldenkrais/Feldenkrais.jpg' fluid='true'></Card.Img>
                            <Card.Text>
                                The 48 Feldenkrais Lessons were created over a couple of years by taping lessons live in the classes I was running back in the late 1970s.
                                The first Volume of 24 lessons were published on cassettes in 1980. Those lessons are typically about 40 minutes long.
                                The last 24 lessons of Volume II came out a couple of years later and averaged about 30 minutes in length. The price for the two volumes was $176.
                                I had people asking for a Volume III, but felt I'd pretty well covered things and decided that was enough.
                        </Card.Text>
                            <Card.Text>
                                A couple of decades ago I enhanced the sound and converted the files to mp3 digital format. This allowed me load all the files onto a single CD which cut production costs considerably and allowed my to drop the price.
                                Of course the CD had to be shipped to people which when going overseas could really bump up the price. And I've had a real education in the ways of the tax man. And unfortunately the CD seems to be going the way of the cassette. The last three computers I've purchased don't even have CD players. So I've bowed to the future, and we'll be selling the mp3 files as downloads from now on. Which frankly solves a lot problems. You click. You pay. You click. In a few minutes you've got the lessons.
                        </Card.Text>
                            <Card.Text>
                                And these days you can get the lessons for a dollar a lesson.
                        </Card.Text>
                            <Card.Text>
                                These are audio only lessons. Some people wish they could have them in video format, but that would be contrary to the nature of the lessons. This is not about imitating someone else. The lessons ask you to close your eyes and go internal, to feel what is happening in your body, how you fit against the ground, what does it feel like to do a movement? And you will be able to follow the instructions.
                        </Card.Text>
                            <Card.Text>
                                "I've just finished working my way through all 48 lessons. Brilliant! Really great teaching and the clarity of explanation of a physical movement is so impressive. I recommend you whenever there's an opportunity. Thanks" Dr. Matthew Selman, Clinical Psychologist, Newcastle, United Kingdom
                        </Card.Text>
                            <Card.Text>
                                When the cassettes came out, I was about to leave for Tel Aviv to spend a month watching Moshe work with clients. So I took a copy of that first volume with me and gave it to him. A few days later he reported he'd been listening to the tapes, "Very, very good indeed."
                        </Card.Text>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
} 
