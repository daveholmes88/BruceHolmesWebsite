import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import MusicIndex from './MusicIndex'

export default function Music() {

    return (
        <Container>
            <Row>
                <MusicIndex />
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
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    fluid='true'
                                    src='/Music/ParchmentAwards.jpg'
                                    alt='awards'
                                    align='left'
                                    className='picture'
                                />
                            </div>
                            <div class='pull-right'>
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
                            </div>
                        </Col>


                    </Row>

                </Col>
            </Row>
        </Container>
    )
}