import React from 'react'
import { Container, Col, Card, Image } from 'react-bootstrap'

export default function BecomingIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Container>
                    <h2>Becoming a Square Dance Caller</h2>
                    <Image
                        alt='becomingCover'
                        src='/Becoming/BecomingCover.jpg'
                        fluid='true'
                    />
                    <br></br>
                    <a href='/Becoming.html'>Becoming A Caller</a>
                    <br></br><br></br>
                    <a href='/BecomingTOC.html'>Table of Contents</a>
                    <br></br><br></br>
                    <a href='/BecomingSPages.html'>Sample Pages</a>
                    <br></br><br></br>
                    <a href='/BecomingQuotes.html'>Quotes</a>
                    <br></br><br></br>
                    <a href='/BecomingHowToOrder.html'>Buy Now</a>
                    <br></br><br></br>
                </Container>
            </Card>
        </Col>
    )
}