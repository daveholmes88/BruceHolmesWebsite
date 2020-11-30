import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';

export default function MusicIndex() {

    return (
        <Col sm={3}>
            <br></br>
            <Card border='dark'>
                <Container>
                    <a href='/Music/Music.html'><h1 className='text-center'>Music</h1></a>
                    <br></br>
                    <h2 className='text-center'>Albums</h2>
                    <a href='/Music/LifeMp3Player/MusicLife.html'><h4>Life's an <br></br>Intelligence Test</h4></a>
                    <a href='/Music/OKRMp3Player/MusicOKR.html'><h4>The Old King's Reel</h4></a>
                    <br></br>
                    <br></br>
                    <h4 className='text-center'>Press Package</h4>
                    <a href='/Music/MusicPhotos.html'>Publicity Photos</a><br></br>
                    <a href='/Music/PressBio.html'>Bio</a><br></br>
                    <a href='/Music/MusicRadio.html'>Radio</a><br></br>
                </Container>
            </Card>
        </Col >
    )
}