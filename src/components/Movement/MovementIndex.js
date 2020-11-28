import React from 'react'
import { Container, Col, Card, Image } from 'react-bootstrap'

export default function MovementIndex() {

    return (
        <Col sm={3} >
            <Card border='dark'>
                <Container>
                    <h2>Movement</h2>
                    <br></br>
                    <a href='/Feldenkrais.html'>Felenkrais</a>
                    <br></br><br></br>
                    <a href='/Dance/DanceSocial.html'>Dance</a>
                    <br></br><br></br>
                    <a href='/Triathlon/TriYou.html'>Triathlon</a>
                    <br></br><br></br>
                    <a href='/Movement/Aikido.html'>Aikido</a>
                    <br></br><br></br>
                    <a href='/Movement/Juggling.html'>Juggling</a>
                    <br></br><br></br>
                    <a href='/Movement/Movement.html'>Movement Quotes</a>
                    <br></br>
                </Container>
            </Card>
        </Col >
    )
}