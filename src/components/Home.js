import React from "react"
import { Container, Jumbotron, Card, Row } from 'react-bootstrap';

export default function Home() {

    return (
        <div>
            <Jumbotron id='jumbotron'>
                <Container>
                    <Row className="justify-content-end">
                        <a href='/feldenkrais'>
                            <Card>
                                <Card.Img src="MenuFeldenkrais.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/becoming'>
                            <Card >
                                <Card.Img src="MenuBecoming.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/music'>
                            <Card>
                                <Card.Img src="MenuMusic.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/scifi'>
                            <Card>
                                <Card.Img src="MenuSciFi.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/contact'>
                            <Card>
                                <Card.Img src="MenuTouch.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/triathlon'>
                            <Card>
                                <Card.Img src="MenuTri.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/twocents'>
                            <Card>
                                <Card.Img src="MenuTwoCents.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/dance'>
                            <Card>
                                <Card.Img src="MenuDance.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                </Container>
            </Jumbotron>
        </div >
    )
}