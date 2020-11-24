import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import LifeIndex from './LifeIndex'

export default function WesternSprings() {

    return (
        <Container>
            <Row>
                <LifeIndex />
                <Col>
                    <br></br>
                    <div className='text-center'>
                        <Image
                            src='/Music/WesternSpringsPatch.png'
                            fluid='true'
                            alt='WesternSprings'
                        />
                        <br></br>
                        <h1>Bruce Holmes Packs His Vulnerability In His Guitar Case Friday Night at the Ford</h1>
                        <p>By Paulette Delcourt | November 7, 2010</p>
                    </div>
                    <Row>
                        <Col>
                            <Image
                                src='/Music/BruceRedDoors.jpg'
                                fluid='true'
                                alt='RedDooors'
                                align='right'
                            />
                            <div className='pull-left'>
                                <p>Friday night marked a gathering of folks who were, well, into folk! Folk music that is, at the Thomas Ford Memorial Library.  The audience was small by stadium standards, but capacity for our library, with dozens turning to welcome Evanston resident Bruce Holmes for an evening of honest, intelligent and sometimes quirky music. </p>
                                <p>The environment was warm and welcoming with Western Springs residents Donna Perkowski and Jazmina Baukys manning a table with home made baked goods and fresh brewed coffee. People approached their table with donations in hand to support the Friends of the Library in exchange for a delicious snack. </p>
                                <p>At 7:30 Downers Grove resident Rick Roche, Head of Adult Services, warmly introduced Mr. Holmes to kick off the event. It’s Mr. Roche’s job to find talent for the Fridays at the Ford event which is held 5 times per year. When asked how he finds talent he says “they find me. I get between 20 and 30 requests per year. Some are so good we invite them back.” </p>
                                <p>Clearly, his screening process pays off as the lanky Bruce Holmes, who could be Donald Sutherland’s lost twin, has talent that shines through in his first song about aeronauts. This is the one song that probably sent a few people running to their dictionaries later in the evening. The definition: “a pilot of a craft that is lighter than air, such as a balloon”. The lift of this song was later let out in a subsequent tune about his mother’s death, which many of us have experienced but few of us have the courage to relive through song or the vulnerability to share with strangers. It is indeed unusual to hear the words “death rattle”, “cancer” and “chemo” put to song, and yet somehow his audience was not only interested, but transfixed by his honesty.</p>
                                <p>His first album titled “Life’s an Intelligence Test” pokes fun at decisions people make that result in disastrous consequences, specifically, a tongue piercing and resulting infection among other examples. After 90 minutes, dozens of songs, a guitar, bouzouki, and concertina later, Holmes thanked his unusually participative audience by offering up some “payment optional” CD’s. </p>
                                <p>At a table covered with promotional t-shirts, music and cards, Countryside resident Jan Hoadley perused the offerings, “folk music to me is relaxing, like a tonic, it lets me decompress”. She attended the concert with her father Rick Martin of Western Springs who first got her interested in folk music. Father and daughter were happy to have “something to do” together on a Friday night. </p>
                                <p>As for the award winning songwriter Holmes, the only place he’d rather be than performing is working on his third album. He needs a month to prepare for a concert, but several months to prepare an album. Once an album is complete, he will be on the road performing 3-4 times per month promoting it. How does he want to be remembered? He says he hopes people find his lyrics to be “intelligent and well-done”. Judging by the audience reaction, he certainly achieved his goal. </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}