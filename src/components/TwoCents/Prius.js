import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function Prius() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>My Prius</h1>
                    <p>In the fall of 2012 I needed a new car. I hit the American dealerships first and was very disappointed. It had been fourteen years since I last bought a car, and I thought things would be different. The posted miles per gallon on the cars was never better than the mid 20s. The Chevy dealer didn't have a Volt on the lot. But that was more of a matter of curiosity. I don't have a garage, and without a charging station, that didn't seem like a good choice. </p>
                    <p>The Ford dealership said that if I could just come back in a month they hoped to have a hybrid available. But my car either needed to have a lot of work done on it NOW, or be traded in.</p>
                    <p>Finally I went to Toyota. The Prius was everything I'd been looking for. It was rated at 50 miles per gallon. I liked the car. The price seemed reasonable. I went home and did some on-line research. Prius owners raved about the car, claiming they were getting even better mileage than advertised.</p>
                    <p>Back to the dealership. There are different models of the Prius. One is smaller than average. One's the moma sized bear. And finally there the popa sized bear, the Prius V. It only gets 44 mpg and costs a bit more, but it's got more room inside. When I'm touring I need significant space for the instruments and gear, so I decided I'd have to go big. So I ordered the Prius V in red and picked it up a couple of days later.</p>
                    <div className='text-center'>
                        <Image
                            src='/TwoCents/PriusV.jpg'
                            alt='prius'
                            fluid='true'
                        />
                    </div>
                    <br></br>
                    <p>It came with a couple of years of free maintenance. They also provide a free car wash whenever you want one. I thought that was a stroke of genius. Every freshly washed Toyoda looks great and is a rolling advertisement for the brand.</p>
                    <p>So yesterday I was out that way and dropped by for a car wash. I walk in and hand the key to the fellow at the desk. I'm asking for a free car wash and he seems delighted to see me. "Have a seat." He doesn't ask my name. I go sit in the waiting room wondering how they're going to find me when they're done. My salesman happens to walk by, "Nice to see you again. How's the car been treating you?" A couple of seconds of pleasant chatter and he leaves. And I'm remembering, the last time I got a car wash he just happened to walk by. The salesmen have their offices in the front half of the building. Not back here.</p>
                    <p>My next visitor is a pleasant young lady asking me if I'd like a coffee or a hot chocolate. Well, sure. A hot chocolate would be fun. As she returns with it she confides, "The hot chocolate really is the best choice." I'm not quite done with my drink and a fellow comes up to me, "Mr. Holmes, your car is ready." He walks me to the car, answers my question about a hardware store nearby and waves me on my way.</p>
                    <p>I spent the drive home figuring out how they do it. The key or car must pull up my info in a database. They let my salesman know I'm in the building. The guy who returns my key must be able to see what I look like. You end up feeling like royalty. I don't know if all Toyoda dealerships are this smooth (mine's Grossinger's in Illinois), but if they are they could teach the industry a few lessons. Of course, they did miss a spot on the roof, but hey.</p>
                    <p>On one of my first trips out in the car I was mostly out in the countryside going around 40 miles per hour. I looked down at the average mpg for that trip. It read 60 mpg. Far out. The interesting thing about the Prius is that its worst mpg is on the freeway. If you're going 75 mph, in the Prius V you're probably going to be below 40 mpg. That's the wind resistance going up exponentially the faster you drive. But in the city you'll get very good mileage. On most cars braking for a light is just lost energy and worn brake pads. But the Prius uses the generation of electric current to break the car. It's the operation of an electric motor in reverse. And that current gets stored in the battery and is used to propel the car when the light turns green. Very cool. So driving in an urban area I get about 50 mpg. I'm impressed.</p>
                    <p>I think global warming is quite real. And without the USA leading the charge, I fear humanity will never adequately deal with the problem. And I don't think the USA can do much with the Republicans claiming it doesn't exist. If we wreck our planet, I'm blaming the Republican Party. In the meantime, there is something ordinary citizens can do about it. Some people do a great deal more than I do. But at least I bought a Prius.</p>
                </Col>
            </Row>
        </Container>
    )
}