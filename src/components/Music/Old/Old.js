import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { AudioPlayerControlSprite, AudioPlayer, type TrackType } from 'react-audio-player-pro';
import reactAudioPlayerProStyle from 'react-audio-player-pro/dist/style.css';


import OldIndex from './OldIndex'

export default function Old() {

    const audioTrackList: Array<TrackType> = [
        {
            src: '/Music/LifeSongs/IDo.mp3',
            content: '1. I Do',
        },
        {
            src: '/Music/LifeSongs/Angels.mp3',
            content: '2. Angels',
        },
        {
            src: '/Music/LifeSongs/Believe.mp3',
            content: '3. I Believe In You',
        },
        {
            src: '/Music/LifeSongs/Vegas.mp3',
            content: '4. Long Vegas Night',
        },
        {
            src: '/Music/LifeSongs/Intelligence.mp3',
            content: "5. Life's an Intelligence Test",
        },
        {
            src: '/Music/LifeSongs/Beautiful.mp3',
            content: '6. So Beautiful',
        },
        {
            src: '/Music/LifeSongs/ElVien.mp3',
            content: 'El Viento Del Diablo',
        },
        {
            src: '/Music/LifeSongs/Family.mp3',
            content: 'We Were a Family',
        },
        {
            src: '/Music/LifeSongs/Home.mp3',
            content: 'Home',
        },
        {
            src: '/Music/LifeSongs/Stand.mp3',
            content: 'Stand',
        },
        {
            src: '/Music/LifeSongs/PlagueShip.mp3',
            content: 'Plague Ship',
        },
        {
            src: '/Music/LifeSongs/Lose.mp3',
            content: 'You Just Might Lose',
        },
        {
            src: '/Music/LifeSongs/Shine.mp3',
            content: 'Shine',
        },
        {
            src: '/Music/LifeSongs/WhenTheShip.mp3',
            content: 'When The Ship Comes In',
        },
    ]

    return (
        <Container>
            <Row>
                <OldIndex />
                <Col>
                    <h1>The Old King's Reel</h1>
                </Col>
            </Row>
        </Container>
    )
}
