import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriGadgets() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1> Gadgets </h1>
                    <p>What follows was written some years back. I'm going to leave it as is. But these days I relie exclusively on my Apple Watch. It counts laps for me when I'm in the pool. All without a whole lot of help from me. No remembering to click. I start. I swim. I climb out when the watch tells me I'm done. It also times my runs, keeps track of my route, all while playing my music through the pods in my ears. The watch keeps track of my ToDo list for the day. Gives me the weather. Keeps track of my fitness efforts. Has my calendar in it. Shows me how my stocks are doing. It handles my phone calls, and text messages and emails. It will call emergency services if I fall. It can even take an ECG reading or a blood oxygen level. My alarms happen on my watch. Oh, and I pay for my groceries with it. So it's crazy handy. At least check it out.</p>
                    <p>The first, most obvious, necessity is a stop watch. I've got the venerable Timex Ironman which can be had for less than $30 on eBay or Amazon. It can count laps, tell you your lap time and total time. It can also count down from a time you've set. I used to use it when referring soccer games to beep at me when 30 minutes were up. It's just plain handy to have. For most of my swimming career I've used it in the pool to keep track of my workouts. I shoot for a certain number of laps each day, and it was my counter. Trouble is when you're keeping track of lap time, total time and laps, some values in the watch face are kept small. When you've got goggles on and there's  water dripping and maybe a little fogging going on, reading the laps number is a chore. It's also awkward hitting the lap counter. The two hands have to come together in a way they never do when swimming. So you have to stop for a second every time you want to mark a lap. Some inventor type must have shared my frustration because there's a product out now called <a href="http://www.sportcount.com/" target="_blank">Sportcount</a>. It fits over your index finger and the clicker is right where your thumb touches. No more bringing the hands together to click. Check out the picture.</p>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <a href='spotcount.com' target='_blank'>
                                    <Image
                                        src='/Triathlon/TriSportCount.jpg'
                                        alt='SportCount'
                                        fluid='true'
                                        className='picture'
                                        align='left'

                                    />
                                </a>
                            </div>
                            <div className='pull-right'>
                                <p>Clever, don't you think? You can get it in different formats. The one I've got just counts laps. It's a smaller window than the Timex, but the one thing it shows is big enough to read easily. So I can now read my lap number without spending 20 seconds trying to find a light angle where I can guess the lap value. I'm just delighted with it. You can get a version that's a full stop watch and lap counter, only trouble is the screen has to do triple duty. So it will show you the lap number for a second after you click, then it switches to flashing the lap time for a few seconds, and finally it goes back to showing you your cumulative time. Not a bad compromise.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}