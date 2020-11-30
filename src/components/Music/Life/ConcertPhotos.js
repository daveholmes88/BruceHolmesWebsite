import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import LifeIndex from './LifeIndex'

export default function ConcertPhotos() {

    return (
        <Container>
            <Row>
                <LifeIndex />
                <Col>
                    <h1 className='text-center'>CD Release Concert & Celebration</h1>
                    <h2 className='text-center'>November 29, 2005 At Lakeshore Theater</h2>
                    <p className='text-center'>Pictures Taken By Laura Nachtrab</p>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/fullstage1_732.jpg'
                                fluid='true'
                                alt='Full'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/Bruce&Jeanne1L.jpg'
                                fluid='true'
                                alt='Jeanne'
                            />
                            <Carousel.Caption>
                                <h3>The show starts with songs from Jeanne T. Arrigo</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/Diccon2L.jpg'
                                fluid='true'
                                alt='Diccon'
                            />
                            <Carousel.Caption>
                                <h3>Diccon Lee</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/Chris2L.jpg'
                                fluid='true'
                                alt='Chris'
                            />
                            <Carousel.Caption>
                                <h3>Chris Cameron</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/Jerry2L.jpg'
                                fluid='true'
                                alt='Jerry'
                            />
                            <Carousel.Caption>
                                <h3>and Jerry Thiel</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/fullstage2_732.jpg'
                                fluid='true'
                                alt='Fullstage'
                            />
                            <Carousel.Caption>
                                <h3>Then the full band took over</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/larry3L.jpg'
                                fluid='true'
                                alt='Larry3'
                            />
                            <Carousel.Caption>
                                <h3>Larry Beers</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/SwelledHeadL.jpg'
                                fluid='true'
                                alt='SHL'
                            />
                            <Carousel.Caption>
                                <h3>Chris explains that cranial swelling can result from too much flattery</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/Bruce1L.jpg'
                                fluid='true'
                                alt='Bruce1'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/Bruce&Jeanne3L.jpg'
                                fluid='true'
                                alt='BruceJean3'
                            />
                            <Carousel.Caption>
                                <h3>a</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/intermission3L.jpg'
                                fluid='true'
                                alt='int3'
                            />
                            <Carousel.Caption>
                                <h3>Intermission</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/jj1L.jpg'
                                fluid='true'
                                alt='jj'
                            />
                            <Carousel.Caption>
                                <h3>His mother insists JJ enyoed the music enormously</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/intermission1L.jpg'
                                fluid='true'
                                alt='int1'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/intermission2L.jpg'
                                fluid='true'
                                alt='int2'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/brucelarrychris4_732.jpg'
                                fluid='true'
                                alt='blc4'
                            />
                            <Carousel.Caption>
                                <h3>More Music</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/dicconjeannejerry2L.jpg'
                                fluid='true'
                                alt='djj2'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/brucechrisjeanne8L.jpg'
                                fluid='true'
                                alt='bcj8'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/ConcertPhotos/bows2_732.jpg'
                                fluid='true'
                                alt='bows'
                            />
                            <Carousel.Caption>
                                <h3>Goodnight, thanks for being part of this, have a great life, drive safe, tell someone you love them, go home...</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}