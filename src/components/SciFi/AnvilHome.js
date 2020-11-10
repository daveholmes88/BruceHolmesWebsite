import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import SciFiIndex from './SciFiIndex'

export default function SciFi() {

    return (
        <Container>
            <Row>
                <SciFiIndex />
                <Col>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image src='/AnvilCover.jpg' fluid='true' align='left' id='anvil-cover' />
                            </div>
                            <div class='pull-right'>
                                <h1 className='text-center'>Anvil of the Heart</h1>
                                <h4 className='text-center'>$20 Autographed Hardcover</h4>
                                <div class='text-right'>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" name="AnvilPayPal" target="paypal" id="AnvilPayPal">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="9310939" />
                                        <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                        <img alt="Add to shopping cart button" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                                <p class='image-text'>
                                    This is a science fiction novel of mine published in 1984. For one brief and oh-so-ephemeral moment that summer it led the Nebula Nominations for best novel, then got left in the dust. It also made the Locus recommended list for that year and was a Prometheus Nominee. It was translated into German and Japanese. Get in touch if you want one of the foreign editions.
                                </p>
                                <br></br>
                                <h4>The Story:</h4>
                                <p>
                                    John Cunningham, an archivist, is wrapping up the history of the old race. Thanks to genetic alterations John's children (and all the future children of mankind) are blessed with greater intellect and calmer emotions. John is a relic of the past. But John is tired of feeling useless and begins to explore the potential of homo sapiens. His training leads him to fall in with renegades, humans unwilling to go along with the new genetic guidelines. People who want to bear children in their own image, not the strange unloving creatures that are replacing them all. And that makes them criminals to be hunted down by the police. Unless they fight back.
                                </p>
                            </div>
                            <h1>Find Links!!!</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}