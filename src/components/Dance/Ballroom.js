import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Ballroom() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Ballroom Dance</h1>
                    <p>I've heard ballroom dance has received a bit of a bump in interest thanks to Dancing With The Stars. I for one can't stand the judges and don't watch. My friend Joy and I took a ballroom dancing class from the local high school's continuing education offerings and enjoyed it. But then you have to go out and do it on a continuing basis if you want to keep what you've learned. And I didn't love that world. Most of the dances I talk about here charge maybe $5 for an evening. Ballroom in Chicago charges $15 or more. I didn't get the same sense of community because we weren't working together as a group. I didn't like the artificiality of the posture and the strange contortions of the upper carriage. It looks more like preening than enjoying your partner's company. I didn't find myself wanting to go back. I wish this sounded more enthusiastic. Maybe your local ballroom scene will be different. It is a fun thing to learn. It sure comes in handy at a wedding. Of course, it's been a while since I've been to a wedding.</p>
                </Col>
            </Row>
        </Container>
    )
}