import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player'

import TriathlonIndex from "./TriathlonIndex"

export default function MarathonSong() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1>Marathon</h1>
                    <h4>By Bruce Holmes</h4>
                    <ReactAudioPlayer
                        src='/Music/OldSongs/Marathon.mp3'
                        controls
                    />
                    <p>On this day celebrate for a life lived true<br></br>
                        All the mornings you rose with the dawning dew<br></br>
                        In the early morning air<br></br>
                        With adventure everywhere<br></br>
                        The discipline and thrill in what you do<br></br>
                        There is joy in this<br></br>
                        And endorphin bliss<br></br>
                        There’s a hero’s bed you may lay upon<br></br>
                        If you give your best<br></br>
                        You’ll have earned your rest<br></br>
                        Here in the dream of the marathon</p>
                    <p>You are psyched, fortified, at the starter’s blast<br></br>
                        Racing long, keep your calm, don’t go out too fast<br></br>
                        You’ll feel strong at the start<br></br>
                        Before things fall apart<br></br>
                        That bounce in your step isn’t bound to last<br></br>
                        You’ll soon face the wall<br></br>
                        Your pace slows to crawl<br></br>
                        There’s an ache in your joints as you struggle on<br></br>
                        Ev’ry painful step<br></br>
                        Ev’ry weary breath<br></br>
                        Deep in the heart of the marathon</p>
                    <p>There are times in a life when the blazing sun<br></br>
                        Saps your strength, courage fades in confusion<br></br>
                        No more wings on your feet<br></br>
                        Only weight in the heat<br></br>
                        And you pray for the heart of a champion<br></br>
                        But you’ve run this race<br></br>
                        For a thousand days<br></br>
                        You have carved out a will that can carry on<br></br>
                        Now your time has come<br></br>
                        Those old doubts undone<br></br>
                        Here in the fields of the marathon</p>
                    <p>Oh the hurt that life brings is a transient thing<br></br>
                        You have chosen a way of remembering<br></br>
                        These are seeds you have sown<br></br>
                        It’s a heart that has grown<br></br>
                        There is steel in your legs for awakening<br></br>
                        When this race is run<br></br>
                        When your life is done<br></br>
                        You will cherish the mem’ry of ever on<br></br>
                        Long this pride will grow<br></br>
                        And you’ll always know<br></br>
                        You chose the life of the marathon</p>
                </Col>
            </Row>

        </Container>
    )
}