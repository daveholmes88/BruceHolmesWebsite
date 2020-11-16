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
                    <Row>
                        <Col>
                            <div className='pull-right'>
                                <Image
                                    src='/Triathlon/TriSeikoMetrenome.jpg'
                                    alt='SportCount'
                                    fluid='true'
                                    align='right'

                                />
                            </div>
                            <div>
                                <p>As mentioned elsewhere, these days I use a metronome when I run. My goal is to keep a steady stride and a fast turnover. If I run to the beep, I've got that. It's easy to use, cheap, and I'm glad I've got it. I'm using the Seiko DM50 Metronome pictured on the right. I clip it onto my collar or the waist of my pants. A couple of times it's worked it's way loose and fallen to the pavement. The good news, it just keeps on beeping. I haven't been able to damage it yet. You can set the speed, the loudness and the rhythm. I just use a straight rhythm because I don't want my running to start matching something that accents a certain beat. I set it to 180. Keeps me honest.</p>
                            </div>

                        </Col>
                    </Row>
                    <p>The next nice thing to know is your heart rate. It's one of those things you can approximate just by noticing how you feel. Are you running along feeling pretty normal and able to talk to a friend? You're in zone 1. Are you panting and pushing for all you're worth? You're in zone 5. But we all want the latest cool gadget. So many years ago I got a Polar Heart Rate monitor. Putting on the chest strap always seemed a bit of a drag and it wasn't completely comfortable. I used it for a while and then got bored with it.</p>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    src='/Triathlon/TriGarmin.jpg'
                                    alt='Garmin'
                                    fluid='true'
                                    className='picture'
                                    align='left'

                                />
                            </div>
                            <div className='pull-right'></div>
                            <p>Recently my son, Dave, asked me if I'd be willing to pace him for the last 6 miles of the marathon he was planning on running. So I suddenly became intensely concerned about my pace. Dave is pretty fast and I was worried I wouldn't be able to keep up with him for 6 miles, even the last 6 miles. So I increased my interval work outs and decided I needed to know exactly what pace I was running at any given moment. Well, they can do that now thanks to GPS. So I got a <a href='https://buy.garmin.com/shop/shop.do?pID=27335' target='_blank'>Garmin Forerunner 310XT. </a>Garmin has all sorts of models, but this version fits best with Triathlon, and this is the model that can give you constant updates on your pace rather than your average pace for the current lap. And, of course, it can tell you how far you've run. In addition, with a couple of add-ons, it can give you your heart rate and stride rate. (The heart rate strap comes in two versions. The one that's an extra $10 is more comfortable and worth the extra money.) The best thing about it is the completely customizable display. You can show up to 4 values on a single big screen and you can choose what you want to see. My display shows time elapsed, distance traveled, current pace and heart rate. But there are any number of values you can choose for display. It's pretty cool. I ran a 10 K the other day and finished with a really nice time, except my Garmin told me I'd only run 5.70 miles. Turns out the pace car took a wrong turn and shortened the course. The documentation on the Garmin could be a whole lot better, and my first attempts to get things operational were frustrating. I finally called tech support, and I give that experience high marks. They were very helpful and soon had me up and running. The Garmin comes with software so you can upload your results and ponder graphs and all sorts of cool things. It won't, for some odd reason, record your heart beat recovery value. So when that shows on the display, it's up to you to take note</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='pull-right'>
                                <Image
                                    src='/Triathlon/TriTimexGPS.jpg'
                                    alt='SportCount'
                                    fluid='true'
                                    align='right'

                                />
                            </div>
                            <div>
                                <p>Timex now has something similar. I haven't used it so I can't really comment. But it looks to have some of the same functionality. Neither the Timex nor the Garmin come cheap. Expect to pay at least $300.</p>
                                <p>I think you need some sort of stopwatch or lap counter in this line of work. But if you're on a budget and you've got kids to feed, the GPS models are a luxury. They're kind of nice to play with and you learn a little, but after a while the information just doesn't seem that essential. You can approximate distance. You can approximate the zone you're in just based on your level of effort. This doesn't always have to be rocket science. It's the kind of thing that seems real important before you buy it, and after you've had it for a week you wonder why you thought you couldn't live without it. Because you can.</p>
                                <p>On the other hand, several companies (including Timex and New Balance) are coming out with GPS watches for about $100. At that price point these things start making sense to me. These cheaper version won't download data and they don't include a heart rate monitor. But distance and speed are all I feel I really need. So look for these. If I had it to do over, that's the way I'd go. </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}