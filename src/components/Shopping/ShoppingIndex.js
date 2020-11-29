import React from 'react'
import { Container, Col, Card, Image } from 'react-bootstrap'

export default function BecomingIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Container>
                    <a href='/Shop/ShopShipping.html'><h2>Shopping</h2></a>
                    <br></br>
                    <a href='/Shop/ShopMusic.html'>Music</a>
                    <br></br><br></br>
                    <a href='/Shop/ShopTShirts.html'>T-Shirts</a>
                    <br></br><br></br>
                    <a href='/Shop/ShopSciFi.html'>Science Fiction</a>
                    <br></br><br></br>
                    <a href='/Shop/ShopShipping.html'>S&H Directions</a>
                    <br></br><br></br>
                </Container>
            </Card>
        </Col>
    )
}