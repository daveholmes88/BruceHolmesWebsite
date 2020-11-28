import React from 'react';
import { Container, Row, Col, Carousel, } from 'react-bootstrap';

import MusicIndex from './MusicIndex'

export default function MusicPhoto() {

    return (
        <Container>
            <Row>
                <MusicIndex />
                <Col>
                    <h1> Publicity Photos</h1>
                    <p>If you need something for the web, all you have to do is right click and hit "Save Image As"</p>
                    <Carousel className='carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/BruceOKRhd.jpg'
                                fluid='true'
                                alt='OKR'
                            />
                            <Carousel.Caption>
                                <h3>Old King Reel Cover Photo by Joy Nachtrab</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/BHolmes600dpiOKR.jpg'
                                fluid='true'
                                alt='OKR'
                            />
                            <Carousel.Caption>
                                <h3>Old King Reel Cover Photo by Joy Nachtrab</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/BruceJoyCream.jpg'
                                fluid='true'
                                alt='BruceJoy'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/BruceHolmesLife.jpg'
                                fluid='true'
                                alt='BruceLife'
                            />
                            <Carousel.Caption>
                                <h3>Life Cover and Concert Photos By Laura Nachtrab</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/Bruce1.jpg'
                                fluid='true'
                                alt='Bruce1'
                            />
                            <Carousel.Caption>
                                <h3>Life Cover and Concert Photos By Laura Nachtrab</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/Bruce14.jpg'
                                fluid='true'
                                alt='Bruce14'
                            />
                            <Carousel.Caption>
                                <h3>Life Cover and Concert Photos By Laura Nachtrab</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/HSAtCam.jpg'
                                fluid='true'
                                alt='HSAtCam'
                            />
                            <Carousel.Caption>
                                <h3>Studio Portraits by Jennifer Gerard</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/HSPlaying.jpg'
                                fluid='true'
                                alt='HSPlaying'
                            />
                            <Carousel.Caption>
                                <h3>Studio Portraits by Jennifer Gerard</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/HSSinging.jpg'
                                fluid='true'
                                alt='HSSinging'
                            />
                            <Carousel.Caption>
                                <h3>Studio Portraits by Jennifer Gerard</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/HSStool.jpg'
                                fluid='true'
                                alt='HSStool'
                            />
                            <Carousel.Caption>
                                <h3>Studio Portraits by Jennifer Gerard</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/SkyLJackFront.jpg'
                                fluid='true'
                                alt='SkyFront'
                            />
                            <Carousel.Caption>
                                <h3>Lakefront Photos By Julie A. Downey</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/SkyPJackAtCam.jpg'
                                fluid='true'
                                alt='SkyCam'
                            />
                            <Carousel.Caption>
                                <h3>Lakefront Photos By Julie A. Downey</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}