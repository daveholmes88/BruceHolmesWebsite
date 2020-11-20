import React from 'react';
import { Col, Card, Container } from 'react-bootstrap';

export default function LifeIndex() {

    return (
        <Col sm={3}>
            <br></br>
            <Card border='dark'>
                <Container>
                    <a href='/Music/LifeMp3Player/MusicLife.html'><h3 className='text-center'>Life's An <br></br>Intelligence Test</h3></a>
                    <br></br>
                    <a href='/Music/MusicLifeStory.html'>The Story Of</a><br></br>
                    <a href='/Music/MusicConcert2005.html'>Concert Photos</a>
                    <br></br>
                    <br></br>
                    <h4 className='text-center'>Reviews</h4>
                    <a href='/Music/ReviewWesternSprings.html'>Western Springs</a><br></br>
                    <a href='/Music/ReviewEvanston.html'>Evanston Review</a><br></br>
                    <br></br>
                    <a href='http://brucetholmes.com/Music/Music.html'><h4 className='text-center'>Return to Music</h4></a>
                </Container>
            </Card>
        </Col >

    )
}
