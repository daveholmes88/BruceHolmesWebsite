import React from "react"
import ReactPlayer from "react-player"
import { Container, Carousel, Jumbotron } from 'react-bootstrap';

export default function Home() {

    return (
        <div>
            <Jumbotron id='jumbotron'>
            </Jumbotron>
            <Container>
                <Carousel id="home-carousel">
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src='BruceJoy.jpg'
                            alt="Music"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            src='Feldenkrais.jpg'
                            alt="Feldenkrais"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            src='AnvilCover.jpg'
                            alt="Anvil"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src='Square.jpg'
                            alt="Square"
                        />
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <br></br>
                <br></br>
                <ReactPlayer url='https://www.youtube.com/watch?v=pDOJTLH36CU' />
            </Container>
        </div>
    )
}