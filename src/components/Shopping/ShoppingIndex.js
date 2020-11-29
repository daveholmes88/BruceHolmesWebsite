import React from 'react'
import { Container, Col, Card, Image } from 'react-bootstrap'

export default function BecomingIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Container>
                    <br></br>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <br></br><br></br>
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