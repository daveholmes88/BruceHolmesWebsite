import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

export default function Feldenkrais() {

    const [history, setHistory] = useState(false)
    const [explained, setExplained] = useState(true)
    const [index, setIndex] = useState(false)
    const [press, setPress] = useState(false)
    const [user, setUser] = useState(false)
    const [free, setFree] = useState(false)
    const [article, setArticle] = useState(false)

    const setFalse = () => {
        setExplained(false)
        setHistory(false)
        setIndex(false)
        setPress(false)
        setUser(false)
        setFree(false)
        setArticle(false)
    }

    const clickExplained = () => {
        setFalse()
        setExplained(true)

    }

    const clickHistory = () => {
        setFalse()
        setHistory(true)
    }

    const clickIndex = () => {
        setFalse()
        setIndex(true)
    }

    const clickPress = () => {
        setFalse()
        setPress(true)
    }

    const clickUser = () => {
        setFalse()
        setUser(true)
    }

    const clickFree = () => {
        setFalse()
        setFree(true)
    }

    const clickArticle = () => {
        setFalse()
        setArticle(true)
    }

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Card border='dark'>
                        <Image
                            class="img-fluid"
                            className="feldenkrais"
                            src='Feldenkrais.jpg' fluid
                            alt='feldenkrais'
                        />
                        <h3>The Feldenkrais Method</h3>
                        <br></br>
                        <Button variant='dark' onClick={(clickExplained)} >
                            Explained
                        </Button>
                        <br></br>
                        <Button variant='dark' onClick={(clickHistory)}>
                            History
                        </Button>
                        <br></br>
                        <Button variant='dark' onClick={{ clickIndex }}>
                            Index
                        </Button>
                        <br></br>
                        <Button variant='dark' onClick={{ clickPress }}>
                            Press Quotes
                        </Button>
                        <br></br>
                        <Button variant='dark' onClick={{ clickUser }}>
                            User Quotes
                        </Button>
                        <br></br>
                        <Button variant='dark' onClick={{ clickFree }}>
                            Free Lesson
                        </Button>
                        <br></br>
                        <Button variant='dark' onClick={{ clickArticle }}>
                            Runner's World Article
                        </Button>
                        <br></br>
                        <Button>
                            Buy Now
                        </Button>
                    </Card>
                </Col>
                <Col>
                    <h1 className='text-center'>The Feldenkrais Lessons:</h1>
                    <h1 className='text-right'>Awareness Through Movement</h1>
                    <br></br>
                    <h3 className='text-center'>A 48 lesson home study course for $48</h3>
                    <Button alignRight>
                        Buy Now
                    </Button>
                    {explained ? <Card>
                        <Card.Title><h1 className='text-center'>The Method Explained</h1></Card.Title>
                        <Card.Text>
                            The Feldenkrais Method is about moving well, really well.
                            It's about being sensitive to your body and having the ability to choose effortless movement over struggle. It's about awareness and mental flexibility. It was created by the physicist Moshe Feldenkrais, a master teacher, someone really good at creating the ideal conditions for learning or unlearning for that matter.
                            Sometimes what is needed is to let go of the old restrictions we've placed on ourselves. Poor use of the body can happen because we learned poorly in the beginning (it is, after all, rather hit and miss as we're growing up) or a result of restrictions we adopted because they made sense at the time. If you hurt yourself your body tightens up to protect the damaged location.
                            The brain puts that holding pattern on automatic. Problem is, when the injury heals, the holding pattern may remain long past its usefulness.
                        </Card.Text>
                        <Card.Text>
                            Moshe Feldenkrais was a bodyworker. He touched people, made their brain aware of what they were doing poorly and showed them a better way.
                            He called this Functional Integration. But he also created a collection of floor exercises that a group could do, learning situations that did not require any hands on guidance. He called these exercises Awareness Through Movement. But they're not exercises in the way you did things in gym class. They're discovery environments, lessons.
                            These Feldenkrais Lessons are typically done lying on the floor. This is so old habits can more easily be altered--fighting gravity is core old habit. They're very gentle movements designed to make you aware and help you choose easier more graceful ways of doing things. I created a course of what I thought were the 48 central lessons of what Moshe was teaching.
                        </Card.Text>
                        <Card.Text>
                            Included in these pages you'll find a list of the lessons, quotes from both the press and users of the lessons, a sample free feldenkrias lesson, and a few words about the price history behind the lessons. If you have any questions, feel free to drop me a note at Bruce at BruceTHolmes.com.
                        </Card.Text>
                    </Card> : null}
                    {history ? <Card>
                        <Card.Title><h2>History of the Lessons</h2></Card.Title>
                        <Card.Img src='Feldenkrais.jpg' fluid></Card.Img>
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
                    </Card> : null}
                </Col>
            </Row>                       
        </Container>
    )
}