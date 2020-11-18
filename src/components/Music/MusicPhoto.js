import React from 'react';
import { Container, Row, Col, Carousel, Image, CardImg } from 'react-bootstrap';

import MusicIndex from './MusicIndex'

export default function MusicPhoto() {

    return (
        <Container>
            <Row>
                <MusicIndex />
                <Col>
                    <h1> Publicity Photos</h1>
                    <p>If you need something for the web and the photo shown is the right size, click on the image, save and you're done. If you need the high-definition versions, click on "download HD" and it will open in a separate window. Due to the larger file size, the picture selected will take some time to download. If you're not using a high speed internet connection, patience will be a virtue.</p>
                    <Carousel className='carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src='/Music/HSAtCam.jpg'
                                fluid='true'
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
                            />
                            <Carousel.Caption>
                                <h3>Studio Portraits by Jennifer Gerard</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}