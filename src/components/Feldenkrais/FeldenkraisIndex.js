import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'

export default function FeldenkraisIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Image
                    src='/Feldenkrais/Feldenkrais.jpg'
                    fluid='true'
                    alt='feldenkrais'
                />
                <h3 className='text-center'>The Feldenkrais Method</h3>
                <br></br>
                <div className='text-center'>
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
                    <button>Buy Now</button>
                </div>
            </Card>
        </Col>
    )
}