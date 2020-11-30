import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function ScottishCountry() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Scottish Country Dancing</h1>
                    <p>There are two speeds at Scottish Dancing, fast and slow, with not a lot in between. The dances are typically done in sets of four couples. This is another dance form where you learn a pattern, a series of figures. It can be quite vigorous, and the guardians of Scottish Dance care more than most that it be done well. You will actually practice doing the footwork properly. And it does look extraordinary. To see someone who's good at it doing the skip-change step or setting, is a delight. In case this helps, it's got the intricacy of English Country Dancing coupled with some serious athleticism.</p>
                    <p>The most dedicated of the dancers wear special shoes called "ghillies." For a long time I resisted wearing them because they don't make them shaped like the human foot. They're all pointed. But that's for another tirade at another time. Scottish Dancing is done up on the balls of your feet. (You don't have to if that's not appealing for you. There are no police to enforce perfect form.) But dancing on the front of your foot is very difficult in normal street shoes with the big heels. Thus the ghillies, very minimalist shoes with no heel. So I've got a pair now. They're very light, just a leather glove around the foot, so your feet feel light and fast.</p>
                    <p>I think Scottish is a lot of fun. Challenging and exciting. And yes, at the balls the men will often wear kilts. At first I resisted wearing a  kilt. But you can work up a sweat at Scottish, and  a while back I was noticing that my blue jeans were sort of hot and in the way. So as a poor-man's alternative to a kilt I started wearing my gym-rat shorts to Scottish. They were about the same length as a kilt and just as airy. It was a definite improvement over blue jeans and I started wondering if kilts might actually be quite comfortable. Then the Scottish Dance troupe my girlfriend dances with asked me to join up. Price of admission? Well yes, you'll have to get yourself an outfit. Yeah, it does add up. A "proper" kilt will cost $500, then there's the jacket and the spooran and... A thousand dollars later I was properly attired:</p>
                    <div className='text-center'>
                        <Image
                            src='/Dance/Kilts.jpg'
                            alt='kilts'
                            fluid='true'
                        />
                    </div>
                    <p>That's the guys after a show. The only trouble is, now Frances expects perfection, Up on your toes, Bruce. Surely we can get our heels off the ground better than that.</p>
                    <p>But it's not like that if you're just dancing for fun. And the music is great. This is good stuff.</p>
                </Col>
            </Row>
        </Container>
    )
}