import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function Wisdom() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Wisdom: Carolyn Hax, Leonard Pitts, Cheryl Strayed & Derek Sivers</h1>
                    <Image
                        src='/TwoCents/CarolynHax.jpg'
                        alt='hax'
                        align='right'
                        fluid='true'
                    />
                    <div className='pull-left'>
                        <p>Carolyn Hax writes an advice column. For a while it appeared in the Chicago Tribune most mornings, and it was the best thing in the paper. Then it stopped appearing; a cost cutting measure I suppose. So I sought her out on the internet and subscribed. I get an email each morning with a <a href='https://www.washingtonpost.com/people/carolyn-hax/' target="_blank" rel="noopener noreferrer">link</a> to today's column. She is wise. She is worth spending time with. Here's a link. Check her out and see if you don't consider it time well spent. On the right hand side of her home page under the heading of "About Caroline" you'll have the option of signing up for the morning email. Every time I read her column I feel like I've got a little better handle on how to be in this world. She will actually make your life better.</p>
                    </div>
                    <br></br>
                    <Image
                        src='/TwoCents/LeonardPitts.jpg'
                        alt='pitts'
                        align='left'
                        fluid='true'
                        className='picture'
                    />
                    <div className='pull-right'>
                        <p>These comments about Carolyn also got me thinking about Leonard Pitts, Jr., another columnist the Tribune used to carry on a regular basis. He's a political commentator and a wonderful writer. Every column is a work of art. In 2004 he won the Pulitzer Prize for commentary. He's also a novelist. A wise man with a most excellent heart. His official website is <a href="http://www.leonardpittsjr.com" target="_blank" rel="noopener noreferrer">here</a>. But it's the columns that are most precious to me. And those you can find <a href="http://www.miamiherald.com/opinion/opn-columns-blogs/leonard-pitts-jr/" target="_new">here</a>. I just read a column titled, "<a href="http://www.miamiherald.com/opinion/opn-columns-blogs/leonard-pitts-jr/article68350122.html" target="_blank" rel="noopener noreferrer">Why should a Muslim love America?</a>" It's a treasure. He's a treasure. When I read Pitts I find I want desperately to share what he's said with the rest of the world. So I've linked to that column. One click and you'll be wiser. I'll also recommend the <a href="http://www.miamiherald.com/opinion/opn-columns-blogs/leonard-pitts-jr/article1928714.html" target="_blank" rel="noopener noreferrer">series of articles he wrote after September 11</a>. Start with the one from September 12. But all his writing is amazing. I'm afraid there's no&nbsp;way to have his column delivered to your inbox in the morning. There should be. Leonard, are you listening?</p>
                    </div>
                    <br></br>
                    <Image
                        src='/TwoCents/CherylStrayedWild.jpg'
                        alt='strayed'
                        align='right'
                        fluid='true'
                    />
                    <div className='pull-left'>
                        <p>Last fall one of the local Chicago Tribune columnists recommended a book by Cheryl Strayed called Tiny Beautiful Things: Advice on Love and Life from Dear Sugar. It's a collection of columns Strayed wrote for The Rumpus. I read it and was blown away. Strayed is devastatingly honest and reading it is a harrowing experience. But you'll learn so much about life. I used to think I was wise (don't we all?), and I figured someday I'd write a book of wisdom. Well, reading Strayed was humbling. At the age of seventy-four I've discovered I am an infant, and a mere child half my age wrote that book of wisdom for me, doing a far better job than I would have done. How she became so wise is a puzzle to me. If you've seen the movie Wild, the book it came from is Cheryl's. That was her hiking the 1,100 mile trail. Each of my kids got a copy of Tiny Beautiful Things for Christmas. She is an amazing human being.</p>
                    </div>
                    <br></br>
                    <Image
                        src='/TwoCents/DerekSivers.jpg'
                        alt='sivers'
                        align='left'
                        fluid='true'
                        className='picture'
                    />
                    <div className='pull-right'>
                        <p>And finally there's Derek Sivers. He's the fellow who created CD Baby. After making a success of it, he sold it and was set for life. So he's sort of a citizen of the world now. Goes where he pleases, plops himself down in this place or that for a year or so: New York, Singapore, New Zealand, I've lost track of all the places he's been. And he sends out little nuggets of wisdom. You can get on the mailing list and every few months you'll get a&nbsp;link to another entry on his web site. And every time I read something, I feel like I've been given a gift. So <a href="https://sivers.org/blog" target="_blank" rel="noopener noreferrer">here</a> is where you go for his blog. His main page is <a href="https://sivers.org" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        <p>If I could have the perfect dinner party designed for lively, intelligent conversation, I'd invite Carolyn, Leonard, Cheryl and Derek over to my place. (Unfortunately, I do not live in a world of fancy dinner parties. But if I did . . .)</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}