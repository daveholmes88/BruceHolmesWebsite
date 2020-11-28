import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function EnglishCountry() {

    return (
        <Container>
            <Row className="justify-content-center">
                <DanceIndex />
                <Col>
                    <h1>English Country Dancing</h1>
                    <br></br>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    src='/Dance/ECDancers.jpg'
                                    alt='ECDancers'
                                    fluid='true'
                                    align='left'
                                    className='picture'
                                />
                            </div>
                            <div className='pull-right'>
                                <p>English Country Dancing is from another time and place. It's the stuff you see in the Jane Austen movies, though nowadays they skip the bows and curtsies. The dancing is genteel, the music sublime. I've lost you already, haven't I? But hear me out. Would you believe it's the most erotic thing I've ever done? English Country Dancing is intense, choreographed flirting. The Emma Woodhouses and Mr. John Knightlys of the world may have known more about the good life than we would have guessed.</p>
                                <p>It's all in the eye contact. Done right, you are constantly gazing deeply into the eyes of your partner of the moment. I remember a weekend workshop up in Wisconsin a few years ago. I showed up knowing no one. But the caller kept reminding us to keep eye contact, and the sense of intimacy in that room just soared. Between dances everyone was very friendly and we talked. By the end of the weekend I found myself rather fond of about 40 women. And the sense of flirting had gotten completely out of hand. Since you may only be with one partner for a few seconds, it seemed like an unending series of passionate encounters. Only with the eyes, of course, but still very intense.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}