import React from 'react';
import { Container, Carousel, Row, Col, Card, Image } from 'react-bootstrap';

export default function Music() {

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <br></br>
                    <Card border='dark'>
                        <a href='/Music/Music.html'><h1 className='text-center'>Music</h1></a>
                        <br></br>
                        <h2 className='text-center'>Albums</h2>
                        <a href='/Music/LifeMp3Player/MusicLife.html'><h4 className='text-center'>Life's an Intelligence Test</h4></a>
                        <a href='/Music/OKRMp3Player/MusicOKR.html'><h4 className='text-center'>The Old King's Reel</h4></a>
                    </Card>
                </Col>
                <Col>
                    <h1>Music</h1>
                    <Row>
                        <Col sm={5}>
                            <a href="/Music/LifeMp3Player/MusicLife.html">
                                <Image
                                    src="/Music/LifeCover.jpg"
                                    alt="life"
                                    fluid='true'
                                />
                            </a>
                        </Col>
                        <Col sm={6}>
                            <a href="/Music/OKRMp3Player/MusicOKR.html">
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
                            <p> <span class='quote'>
                                Bruce Holmes looks at our human foibles with a clear eye, no illusions and a loving sense of humor.
                                </span><br></br>Banjo-Jim Foerch,
                                Grand River Folk Arts Society
                            </p>
                            <p> <span class='quote'>
                                “Shine” is one of the best summaries concerning what's really meaningful in life that I have ever heard expressed in a song.
                                </span><br></br>Fred Dolan, WJCU, Ohio
                            </p>
                            <p> <span class='quote'>
                                Already a fan, I brought two friends along to Bruce’s show.
                                They were totally entertained, by Bruce’s fine singing and excellent instrumental work,
                                but more so by the unique repertoire, which includes some provocative material, delivered in a heartfelt and honest manner. Bruce is engaging, connects with his audience, and is an original in spirit and in song!
                                </span><br></br>Lilli Kuzma, Folk Festival, WDCB
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