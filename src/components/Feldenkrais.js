import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function Feldenkrais() {

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Card border='dark'>
                        <img
                            className="feldenkrais"
                            src='Feldenkrais.jpg'
                        />
                        <h3>The Feldenkrais Method</h3>
                        <br></br>
                        <Button>
                            History
                        </Button>
                        <br></br>
                        <Button>
                            Index
                        </Button>
                        <br></br>
                        <Button>
                            Press Quotes
                        </Button>
                        <br></br>
                        <Button>
                            User Quotes
                        </Button>
                        <br></br>
                        <Button>
                            Free Lesson
                        </Button>
                        <br></br>
                        <Button>
                            Runner's World Article
                        </Button>
                        <br></br>
                        <Button>
                            Buy Now
                        </Button>
                    </Card>
                </Col>
                <Col>
                    <h1>The Feldenkrais Method</h1>
                    <h3>The Feldenkrais Lessons: Awareness Through Movement</h3>
                    <br></br>
                    <h3>A 48 lesson home study course for $48</h3>
                    <Button>
                        Buy Now
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}