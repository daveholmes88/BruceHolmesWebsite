import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

export default function Music() {

    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <a href="/life">
                        <img
                            className='d-block mx-auto w-50 h-30'
                            src="LifeCover.jpg"
                            alt="life"
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="/old">
                        <img
                            className='d-block mx-auto w-50 h-30'
                            src="OldKingReel.jpg"
                            alt="old"
                        />
                    </a>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}