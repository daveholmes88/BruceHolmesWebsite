import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import ShoppingIndex from './ShoppingIndex'

export default function SciFi() {

    return (
        <Container>
            <Row>
                <ShoppingIndex />
                <Col>
                    <h1>SciFi</h1>
                    <Row>
                        <Col>
                            <Image
                                src='/AnvilCover.jpg'
                                fluid='true'
                                align='left'
                                alt='anvil-cover'
                                className='picture'
                            />
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <h1>Anvil of the Heart - $20 Hardcover</h1>
                                <p>
                                    <span class='quote'>
                                        From the first paragraph to the last, Anvil of the Heart was difficult to put down. It is a truly extraordinary book.
                        </span><br></br>
                        Victor Besaw, author of The Alien; The Sword of Shandar
                    </p>
                                <p>
                                    <span class='quote'>
                                        I have no hesitation in expressing enormous enthusiasm for Anvil of the Heart. It is, as British reviewers always seem to say, a "jolly good read," and, I think, a real find.
                        </span><br></br>
                        Rob Swigart, author of The Book of Revelations
                    </p>
                                <p>
                                    <span class='quote'>
                                        Anvil of the Heart is written with zanshin. Well-executed, it has color, action, thought and feeling--a first book which makes one eager to read the author's second. Mr. Holmes is a writer to watch.
                        </span><br></br>
                        Roger Zelazny, author of The Chronicles of Amber
                    </p>

                                <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}