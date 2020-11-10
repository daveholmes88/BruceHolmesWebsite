import React from 'react';
import { Container, Carousel, Row, Col, Card, Image } from 'react-bootstrap';

export default function Music() {

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <br></br>
                    <Card border='dark'>
                        <a href='/music'><h1 className='text-center'>Music</h1></a>
                        <br></br>
                        <h2 className='text-center'>Albums</h2>
                        <a href='/life'><h4 className='text-center'>Life's an Intelligence Test</h4></a>
                        <a href='/old'><h4 className='text-center'>The Old King's Reel</h4></a>
                    </Card>
                </Col>
                <Col>
                    <h1>Music</h1>
                    <Row>
                        <Col sm={5}>
                            <a href="/life">
                                <Image
                                    src="/Music/LifeCover.jpg"
                                    alt="life"
                                    fluid='true'
                                />
                            </a>
                        </Col>
                        <Col sm={6}>
                            <a href="/old">
                                <Image
                                    src="/Music/OldKingReel.jpg"
                                    alt="old"
                                    fluid='true'
                                />
                            </a>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={6}>
                            <p>
                                Bruce Holmes looks at our human foibles with a clear eye, no illusions and a loving sense of humor.
                                Banjo-Jim Foerch,
                                <br></br>Grand River Folk Arts Society
                            </p>
                            <p>
                                “Shine” is one of the best summaries concerning what's really meaningful in life that I have ever heard expressed in a song.
                                <br></br>Fred Dolan, WJCU, Ohio
                            </p>
                            <p>
                                Already a fan, I brought two friends along to Bruce’s show.
                                They were totally entertained, by Bruce’s fine singing and excellent instrumental work,
                                but more so by the unique repertoire, which includes some provocative material, delivered in a heartfelt and honest manner. Bruce is engaging, connects with his audience, and is an original in spirit and in song!
                                <br></br>Lilli Kuzma, Folk Festival, WDCB
                            </p>
                        </Col>
                        <Col sm={4}>
                            <Image
                                fluid='true'
                                src='/Music/ParchmentAwards.jpg'
                                alt='awards'
                            />
                        </Col>


                    </Row>

                </Col>
            </Row>
        </Container>
    )
}