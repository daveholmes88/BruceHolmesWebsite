import React from 'react'
import { Container, Col, Card } from 'react-bootstrap'

export default function ContactIndex() {

    return (
        <Col sm={3}>
            <br></br>
            <Card border='dark'>
                <Container>
                    <h3>Staying in Touch</h3>
                    <br></br>
                    <a href='/Touch/TouchMailList.html'>Join the Mail List</a>
                    <br></br><br></br>
                    <a href='/Touch/TouchContact.html'>Contact Bruce</a>
                    <br></br><br></br>
                </Container>
            </Card>
        </Col>
    )
}