import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Square() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Square Dancing</h1>
                    <p>I think there was a time in my life when I was a bit of an idiot. Because I remember thinking that square dancing was for hicks, not somebody as hip, sophisticated and intelligent as myself. Boy, was I a fool.</p>
                    <p>I first got hooked one summer at the Kentucky Dance Institute camp. I'd gone because I loved folk dancing, but one of the classes each day was square dancing. Well, this is gonna be boring. Good for a laugh, I suppose. Whoops, did I just screw up there. Must not have been paying attention. We go where? Damn, this is tricky. Certainly I'm smart enough to do square dancing! What the heck is going on here?</p>
                    <div className='text-center'>
                        <Image
                            src='/Dance/SquareDanceCircle.jpg'
                            alt='squareCircle'
                            fluid='true'
                        />
                    </div>
                    <p>Square dancing is like chess set to music. The square dance chessmaster is the caller. His job is to lead the eight of you through an incredibly complex series of maneuvers, only to bring you back to your original position, with your original partner, and your original corner. Maybe that's a bad analogy. It's more like a jigsaw puzzle. And you're one of the pieces. And the pieces start moving around and everything becomes a blur of movement and chaos. And all of a sudden, you realize the puzzle has been put back together. And you really didn't see that coming.</p>
                    <p>But for it all to work, you have to do the calls correctly. If you ever get to watch square dancers, it may seem like an absolute mystery. This person walks there, somebody else slips through here, these two switch places. It all happens quickly and you'd better stay on your toes. The square becomes this moving jig saw puzzle with all the pieces slid out of position. Will the caller ever be able to put it all back together again?</p>
                    <p>Sometimes someone will stop paying attention for a second, and then the whole square may crash and burn. But most of the time, there comes this precious moment when the caller breaks out of the patter and calls out, "Left allemande your corner." If you suddenly realize that you're back with your partner and that your original corner is where she or he should be, that moment will seem like some small miracle! You've trecked for miles through the jungle and bingo, there's the ocean! It's a real sense of accomplishment. Start practicing your "Yahoos" for such moments. You won't be able to help yourself. And oddly enough, I think the fact that your square can crash is what makes the triumph so sweet. It really does feel like an accomplishment when you make it cleanly through the sequence.</p>
                    <p>I remember the final night at the dance camp. I was in a square with people I liked. All the women were beautiful. We got through a complex sequence and were grinning like crazy. It was so much fun. I returned to the real world thoroughly hooked. What I didn't realize was how little I knew.</p>
                    <p>Square dancing is one activity you can't just walk in on. There is a lot to learn, and you'll need to take lessons. Since the teaching is cumulative, it's not a class that you can join in the middle of things. You'll need to find out when the next group begins and be there at the beginning. Many people these days find this offputting. They don't want to learn nothin'. They don't want to have to work at anything and take lessons. But the best things in life require some effort. The dividends of mastering something like this are huge.</p>
                </Col>
            </Row>
        </Container>
    )
}