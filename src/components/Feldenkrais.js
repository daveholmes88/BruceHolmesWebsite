import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function Feldenkrais() {

    const [history, setHistory] = useState(false)
    const [explained, setExplained] = useState(true)

    const clickExplained = () => {
        setExplained(true)
        setHistory(false)
    }

    const clickHistory = () => {
        setExplained(false)
        setHistory(true)
    }

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Card border='dark'>
                        <img
                            className="feldenkrais"
                            src='Feldenkrais.jpg'
                            alt='feldenkrais'
                        />
                        <h3>The Feldenkrais Method</h3>
                        <br></br>
                        <Button variant='dark' onClick={(clickExplained)}>
                            Explained
                        </Button>
                        <br></br>
                        <Button variant='dark' onClick={(clickHistory)}>
                            History
                        </Button>
                        <br></br>
                        <Button>
                            Index
                        </Button>
                        <br></br>
                        <Button>
                            Press Quotes
                        </Button>
                        <br></br>
                        <Button>
                            User Quotes
                        </Button>
                        <br></br>
                        <Button>
                            Free Lesson
                        </Button>
                        <br></br>
                        <Button>
                            Runner's World Article
                        </Button>
                        <br></br>
                        <Button>
                            Buy Now
                        </Button>
                    </Card>
                </Col>
                <Col>
                    <h1>The Feldenkrais Lessons: Awareness Through Movement</h1>
                    <br></br>
                    <h3>A 48 lesson home study course for $48</h3>
                    <Button>
                        Buy Now
                    </Button>
                    {explained ? <Card>
                        <Card.Title>The Method Explained</Card.Title>
                        <Card.Text>
                            The Feldenkrais Method is about moving well, really well.
                            It's about being sensitive to your body and having the ability to choose effortless movement over struggle. It's about awareness and mental flexibility. It was created by the physicist Moshe Feldenkrais, a master teacher, someone really good at creating the ideal conditions for learning or unlearning for that matter.
                            Sometimes what is needed is to let go of the old restrictions we've placed on ourselves. Poor use of the body can happen because we learned poorly in the beginning (it is, after all, rather hit and miss as we're growing up) or a result of restrictions we adopted because they made sense at the time. If you hurt yourself your body tightens up to protect the damaged location.
                            The brain puts that holding pattern on automatic. Problem is, when the injury heals, the holding pattern may remain long past its usefulness.
                        </Card.Text>
                    </Card> : null}
                    {history ? <Card>
                        <Card.Title>History of the Lessons</Card.Title>
                        <Card.Text>
                            The 48 Feldenkrais Lessons were created over a couple of years by taping lessons live in the classes I was running back in the late 1970s.
                            The first Volume of 24 lessons were published on cassettes in 1980. Those lessons are typically about 40 minutes long.
                            The last 24 lessons of Volume II came out a couple of years later and averaged about 30 minutes in length. The price for the two volumes was $176.
                            I had people asking for a Volume III, but felt I'd pretty well covered things and decided that was enough.
                        </Card.Text>
                    </Card> : null}
                </Col>
            </Row>
        </Container>
    )
}