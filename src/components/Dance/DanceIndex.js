import React from 'react'
import { Container, Col, Card, Image } from 'react-bootstrap'

export default function DanceIndex() {

    return (
        <Col sm={3} >
            <Card border='dark'>
                <Container>
                    <a href='/Dance/DanceSocial.html'><h2>Social Dance</h2></a>
                    <br></br>
                    <a href='/Dance/DanceECD.html'>English Country Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/DanceFolk.html'>Folk Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/DanceScottish.html'>Scottish Country Dance</a>
                    <br></br><br></br>
                    <a href='/Dance/DanceBarn.html'>Barn Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/DanceSquare.html'>Square Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/DanceBallroom.html'>Ballroom Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/DancePerformance.html'>Performance Dance</a>
                    <br></br><br></br>
                    <a href='/Dance/DanceWhich.html'>Which To Try</a>
                    <br></br><br></br>
                    <a href='/Becoming.html'>Becoming a Square Dance Caller</a>
                    <br></br><br></br>
                </Container>
            </Card>
        </Col >
    )
}