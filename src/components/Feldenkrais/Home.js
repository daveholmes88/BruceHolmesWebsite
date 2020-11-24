import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import FeldenkraisIndex from './FeldenkraisIndex'
import FeldenkraisTitle from './FeldenkraisTitle'

export default function Home() {

    return (
        <Container>
            <Row>
                <FeldenkraisIndex />
                <Col>
                    <FeldenkraisTitle />
                    <h1 className='text-center'>The Method Explained</h1>
                    <p>
                        The Feldenkrais Method is about moving well, really well.
                        It's about being sensitive to your body and having the ability to choose effortless movement over struggle. It's about awareness and mental flexibility. It was created by the physicist Moshe Feldenkrais, a master teacher, someone really good at creating the ideal conditions for learning or unlearning for that matter.
                        Sometimes what is needed is to let go of the old restrictions we've placed on ourselves. Poor use of the body can happen because we learned poorly in the beginning (it is, after all, rather hit and miss as we're growing up) or a result of restrictions we adopted because they made sense at the time. If you hurt yourself your body tightens up to protect the damaged location.
                        The brain puts that holding pattern on automatic. Problem is, when the injury heals, the holding pattern may remain long past its usefulness.
                        </p>


                    <br></br>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image src='/Feldenkrais/MosheWorking.jpg' fluid='true' align='left' id='moshe-pic' class='picture' />
                            </div>
                            <div class='pull-right'>
                                <p>
                                    Moshe Feldenkrais was a bodyworker. He touched people, made their brain aware of what they were doing poorly and showed them a better way.
                                    He called this Functional Integration. But he also created a collection of floor exercises that a group could do, learning situations that did not require any hands on guidance. He called these exercises Awareness Through Movement. But they're not exercises in the way you did things in gym class. They're discovery environments, lessons.
                                    These Feldenkrais Lessons are typically done lying on the floor. This is so old habits can more easily be altered--fighting gravity is core old habit. They're very gentle movements designed to make you aware and help you choose easier more graceful ways of doing things. I created a course of what I thought were the 48 central lessons of what Moshe was teaching.
                                        </p>
                            </div>
                        </Col>
                    </Row>
                    <br></br>
                    <p>
                        Included in these pages you'll find a list of the lessons, quotes from both the press and users of the lessons, a sample free feldenkrias lesson, and a few words about the price history behind the lessons. If you have any questions, feel free to drop me a note at Bruce at BruceTHolmes.com.
                            </p>
                </Col>
            </Row>
        </Container >
    )
}