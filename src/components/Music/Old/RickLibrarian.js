import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'

import OldIndex from './OldIndex'

export default function RickLibrarian() {

    return (
        <Container>
            <Row>
                <OldIndex />
                <Col>
                    <div className='text-center'>
                        <h1>Rick Librarian</h1>
                        <h4>a review of books, websites, movies, or anything worth reviewing with comments about libraries and librarianship</h4>
                        <p>Monday, November 15, 2010</p>
                        <h1>Bruce Holmes at Friday at the Ford </h1>
                    </div>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    src='/Music/BHolmes72dpiOKR.jpg'
                                    fluid='true'
                                    className='picture'
                                    align='left'
                                    alt='OKR'
                                />
                            </div>
                            <div className='pull-right'>
                                <p>Time flies. Over a week has passed since singer/songwriter Bruce Holmes performed at Friday at the Ford, my library's coffeehouse concert series. Flying time was much on his mind. Though he has gray hair and beard, he says that he does not feel old. He is trim, energetic, and seeking new experiences. As he sang in "Marathon," he runs marathons and is a triathlon coach. He is also still seeking romantic women. Many of his songs were focused on his desires, successes, and failures. "Failures make better stories," he admitted.</p>
                                <p>Bruce is an award-winning songwriter. His inventive wit and melody making have won him prizes at music festivals in Texas and the Midwest. In his songs, he tackles topics that most songwriters and performers standing before a group composed mostly of seniors might fear to address, particularly lustiness, loneliness, and lack of belief in afterlife. His performance was artfully frank and highly entertaining. Bruce had the audience sing along with the chorus of one song, which they did quite well. I think they would have liked to have joined in on a few more. Like Bruce, they do not feel old, and I think they appreciated that he did not just sing safe old songs. They bought most of the CDs that he brought along. I got a couple myself.</p>
                                <p>In the performance, Bruce sang from his CDs <strong>The Old King's Reel</strong> and <strong>Life's an Intelligence Test</strong>. He also performed seven songs from his third CD, which he is still recording. His range of topics and moods were wide, and he never lost the audience. He even asked ahead for an extra half hour so he could sing more songs. Why would I not agree? We had a great evening, for which the library got many thanks.</p>
                            </div>
                        </Col>
                    </Row>
                    <p>posted by ricklibrarian at 6:58 AM, 11/15/2010</p>
                    <h4>Rick at Internet Librarain 2006 - <a href="http://ricklibrarian.blogspot.com/" target="_blank" rel="noopener noreferrer">Rick's Blog</a></h4>
                    <Image
                        src='/Music/RickLibrarian.jpg'
                        fluid='true'
                        className='picture'
                        align='left'
                        alt='Rick'
                    />
                </Col>
            </Row>
        </Container>
    )
}