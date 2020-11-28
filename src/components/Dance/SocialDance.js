import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function SocialDance() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Social Dance</h1>
                    <div className='text-cetner'>
                        <Image
                            src='/Dance/FolkDanceParty.jpg'
                            alt='SocialDance'
                            fluid='true'
                        />
                    </div>
                    <br></br>
                    <p>For many years I led a folk dance group, first in Evanston and then Chicago. About a decade ago I was Dance Director for Revels Chicago. These days I'm a square dance caller. I've danced all my adult years, and I can't recommend it highly enough. You really ought to give it a try. It's good exercise. It's fun. You'll meet nice people.</p>
                </Col>
            </Row>
        </Container>
    )
}