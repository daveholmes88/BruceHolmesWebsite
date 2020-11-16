import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriWarmup() {

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
                                <h1>Warmup, Cool Down</h1>
                                <p>First, stretching before you run does not prevent injury. A randomized trial of 2,729 volunteers presented by Dr. Daniel Pereles to the American Academy of Orthopaedic Surgeons showed no difference in injury rates between the group that stretched and the group that didn't. "Warmup" should be taken quite literally. A warm muscle is more pliant and supple, less likely to hurt itself. So you need to warm your muscles up before you ask great deeds of them. Stretching does not warm up the muscle. Stretching is best done when the muscle has already been warmed up, after you've been exercising for a while. So you do not begin your exercise session with stretching.</p>
                                <p>I have a routine I go through before I go all out. I do exercises designed to limber up the joints, get my brain connected to my movements, remind my brain about proper form. Then I start out slow. If I'm going for a run, I'll walk the first block. Then the first half mile is easy pace. I don't push the pace until my body is ready for it.</p>
                                <p>I don't love the term "cooldown." It doesn't describe what needs to be done. Do you remember back in the 1950's they'd sometimes have news clips on the television of soldiers toppling over while standing in formation? Of course you don't. What was I thinking? You weren't even around then. Well I was. It was so strange. You'd see a column of the Queens royal guard with the mile high hats, the Queen had been delayed and so they'd been standing there an hour or two, and suddenly one of them would slowly keel over, falling face down, ramrod straight into the tarmac. You couldn't believe your eyes. Clips like this continued for a while until the military people talked to the physiology people and figured out what was wrong. How do you think blood moves through your body? Your heart, right? Fair enough. But the heart can only push blood. It can't suck the blood back up to it. Of course, if you've pumped blood up to the brain, gravity will bring it back to the heart. But what about the blood in your legs, how does it get back to the heart? Not so obvious, is it? It's almost a design flaw. There ought to be two extra sub-hearts, one in each foot, to return blood to the main heart. What happens instead is that the muscles act as mini hearts. Each time a muscle contracts it pushes blood out of it and into your veins. And here's why you need to "cooldown." If you've been out running, a lot of blood has been directed down to your leg muscles to support your running. If you stop running and just stand there or decide to sit in a chair, the muscles stop contracting. The pooled blood just stagnates there and the blood volume available for the rest of your body reaches dangerously low levels. Bad things can happen. So I walk that last block back to my house. In doing so I sort of normalize the blood distribution and get the blood volume in the leg more like normal. And then I do my stretching.</p>
                                <p>And the soldiers? They learned to keep their leg muscles quietly contracting even as they stood at attention. The blood no longer pooled in their legs. Soldiers stopped keeling over. And the television clips ended.</p>
                                <p>Some athletes swear by ice baths to help their muscles recover and avoid inflamation. Well, the University of Montana studied glycogen replenishment after exercise and found a problem with that. They had their subjects bike for 90 minutes and then for the next four hours they would again and again give one of their legs an ice bath, all the while sipping on a carb recovery drink. They leg that was kept cool only replenished half the glycogen as the leg allowed to stay warm. So if ice baths appeal to you, wait until you've done your glycogen replenishment.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}