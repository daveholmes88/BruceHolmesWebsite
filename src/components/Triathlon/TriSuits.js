import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriSuits() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    src='/Triathlon/TriRun.jpg'
                                    fluid='true'
                                    alt='TriRun'
                                    align='left'
                                    className='picture'
                                />
                            </div>
                            <div class='pull-right'>
                                <h1>Tech Wear</h1>
                                <p>Back to the picture of the grimacing old man. Notice what I'm wearing. It's called a Tri Suit. In this case it's a single piece. It works in the water. Dries fairly quickly once you're on the bike. Like bike shorts this particular suit has a pad to cushion contact with the saddle. And when you're done on the bike, you just keep going. That pad I mentioned is thinner than most bike shorts, and you'll not really notice it when you're running. The point being I don't have to change clothes. I can go from the swim to the bike to the run without slowing down. You don't really need a special suit, you could do the entire race in a pair of swim shorts, but I've never regretted buying it.</p>
                                <h3>Tech Wear</h3>
                                <p>In the old days we avoided synthetics and stuck to cotton. It held onto your sweat and clung to your back. But that's how we knew we were working hard. Then they started coming out with this stuff that wicked moisture away from your skin. It cost twice as much as the cotton so for a while I avoided it. But then one day I caved and got a cool looking tech shirt. And low and behold, it was kind of nice. I bought another one. The next thing you know I've got $2,000 worth of tech gear hanging in my closet. It's an addiction. You could live without it, but once you get used to it, it's hard going back. Keep in mind that most of the races you do will reward you with some kind of tech shirt. In time you'll have more than you know what to do with. So be patient with your initial purchases. In time the shirts will come to you.</p>
                                <h3>Chafing</h3>
                                <p>The tri suit mentioned above doesn't tend to chafe between the legs because it's form fitting. However running shorts can. Especially when you're doing long distances. Some Body Glide lubricant can help. I've also found a pair of running shorts (the Inferno Split Short by Saucony) where they've arranged for the seam not to fall directly between the legs. Look for this sort of thing when you're shopping. On a twenty mile run it really makes a difference. I've also heard people recommend shorts with a form fitting inner short that goes down the leg, similar to what you have with a tri suit.</p>
                                <h3>Sun Block</h3>
                                <p>You're going to be out in the sun as you train. Look for clothing that provides some spf factor. This is especially important in the clothes you'll race in. You'll be out in the sun for hours at a time and the sun can  easily penetrate simple cotton.</p>
                                <h3>Compression</h3>
                                <p>Compression wear is something tight enough to exert pressure on your muscles. Since recovery depends on getting the blood pooled in your leg muscles out of there and circulating, I can conceive of compression helping. I do worry that while it would increase the flow of blood out of the muscle it might inhibit the continuing flow of restorative blood back into the muscle. But there have been studies done which indicate that wearing compression socks during or after exercise can help with recovery. There are people convinced they run better with something wrapped tightly around their legs. But there isn't a whole lot of independent scientific study to support that. I've begun wearing a pair of compression cold weather tights lately and can't say I notice an improvement. I'd like to see some solid evidence before I'll be convinced. This isn't where I'd spend my money.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}