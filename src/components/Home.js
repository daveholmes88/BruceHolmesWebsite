import React from "react"
import ReactPlayer from "react-player"
import { Container, Carousel, Jumbotron, Card, CardGroup, CardDeck, Row } from 'react-bootstrap';

export default function Home() {

    return (
        <div>
            <Jumbotron id='jumbotron'>
                <Container>
                    <Row className="justify-content-end">
                        <Card >
                            <Card.Img src="MenuMusic.jpg" alt="Card Image" />
                        </Card>
                    </Row>
                    <Row className="justify-content-end">
                        <Card >
                            <Card.Img src="MenuFeldenkrais.jpg" alt="Card Image" />
                        </Card>
                    </Row>
                    <Row className="justify-content-end">
                        <Card >
                            <Card.Img src="MenuBecoming.jpg" alt="Card Image" />
                        </Card>
                    </Row>
                    <Row className="justify-content-end">
                        <Card>
                            <Card.Img src="MenuSciFi.jpg" alt="Card Image" />
                        </Card>
                    </Row>
                    <Row className="justify-content-end">
                        <Card>
                            <Card.Img src="MenuTouch.jpg" alt="Card Image" />
                        </Card>
                    </Row>
                    <Row className="justify-content-end">
                        <Card>
                            <Card.Img src="MenuTri.jpg" alt="Card Image" />
                        </Card>
                    </Row>
                    <Row className="justify-content-end">
                        <Card>
                            <Card.Img src="MenuTwoCents.jpg" alt="Card Image" />
                        </Card>
                    </Row>
                    <Row className="justify-content-end">
                        <Card>
                            <Card.Img src="MenuDance.jpg" alt="Card Image" />
                        </Card>
                    </Row>
                </Container>
            </Jumbotron>
        </div >
    )
}