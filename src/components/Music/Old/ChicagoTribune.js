import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'

import OldIndex from './OldIndex'

export default function ChicagoTribune() {

    return (
        <Container>
            <Row>
                <OldIndex />
                <Col>
                    <div className='text-center'>
                        <Image
                            src='/Music/CTLogo.jpg'
                            fluid='true'
                            alt='TribLogo'
                        />
                        <p>Friday March 27, 2009</p>
                        <h1>Bruce Holmes’ slow, steady road to a fresh musical start</h1>
                        <h3>By Andy Downing</h3>
                    </div>
                    <Image
                        src='/Music/BruceTribPic.jpg'
                        fluid='true'
                        align='right'
                        alt='TribPic'
                    />
                    <div className='pull-left'>
                        <p>Some career changes take place after months of hand-wringing, self-analysis and debate. Bruce Holmes wasn't quite so fortunate; the singer-songwriter was forced into choosing a new career path by a series of life-changing events. "My wife divorced me. My business collapsed. Everything came to a head," says Holmes. "It was like, 'OK, this is the moment of truth: What do you want to do with your life?' I had a chance for a fresh start and took it."</p>
                        <p>Now two albums into his late-career renaissance, Holmes has rediscovered the joys of making music nearly 40 years after he first picked up a guitar as a Byrds-worshiping twentysomething. The degree that Holmes has dedicated himself to his craft would not surprise anyone with even a cursory knowledge of his background. This is a man who, after developing an interest in science fiction, wrote and published his own novel, "Anvil of the Heart," in 1983.</p>
                        <p>Then there was the time his oldest son, Chris, developed an interest in chess after watching the Teenage Mutant Ninja Turtles play the game in their 1990 film. Within four years Holmes had not only helped Oakton Elementary School start a chess team, but also coached them to back-to-back state championships in 1993 and 1994.</p>
                        <p>He approached songwriting with similar zeal, filling countless notebooks with lyrics and becoming a regular on the coffeehouse circuit. And while folk remains Holmes' first love, his latest album, "The Old King's Reel," touches on everything from Celtic music to sacred harp singing. Strumming his acoustic guitar, Holmes delivers his words like an Olde English minstrel—fitting, because his songs are populated by fair maidens and stern royalty.But these songs are more than simple fairy tales, featuring Holmes delivering touching lines like "Keep me in your heart/Never doubt I loved you" with doe-eyed sincerity.</p>
                        <p>Still, the singer is quick to admit he's a work in progress, saying, "It takes a good, long time to improve [as a songwriter]." So each day he'll pull out his notebook and further immerse himself in song. And while some tunes come together quickly, others are far more troublesome. Holmes tells of one ditty that he's been working on, off-and-on, for nearly a decade. "Others keep telling me to scrap it," he says. "But there's something in there I like. There's something that keeps drawing me back."</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}