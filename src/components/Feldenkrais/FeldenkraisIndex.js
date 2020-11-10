import React from 'react'
import { Col, Card, Image, Container } from 'react-bootstrap'

export default function FeldenkraisIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Image
                    src='/Feldenkrais/Feldenkrais.jpg'
                    fluid='true'
                    alt='feldenkrais'
                />
                <Container>
                    <h3 className='text-center'>The Feldenkrais Method</h3>
                    <br></br>
                    <div>
                        <a href='/Feldenkrais.html'>The Method Explained</a>
                        <br></br><br></br>
                        <a href='/Feldenkrais/FeldenkraisHistory.html'>History of the Lessons</a>
                        <br></br><br></br>
                        <a href='/Feldenkrais/FeldenkraisLessonList.html'>A List of the Lessons</a>
                        <br></br><br></br>
                        <a href='/Feldenkrais/FeldenkraisCDPressQuotes.html'>Press Quotes</a>
                        <br></br><br></br>
                        <a href='/Feldenkrais/FeldenkraisCDUserQuotes.html'>User Quotes</a>
                        <br></br><br></br>
                        <a href='/Feldenkrais/FeldenkraisPrice.html'>Price & Purchase</a>
                        <br></br><br></br>
                        <a href='/Feldenkrais/FeldenkraisFreeLesson.html'>Listen to a Free Lesson</a>
                        <br></br><br></br>
                        <a href='/Feldenkrais/MosheFeldenkrais.html'>Moshe’s Healing Touch from Runner's World</a>
                        <br></br><br></br>
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    </div>
                </Container>
            </Card>
        </Col>
    )
}