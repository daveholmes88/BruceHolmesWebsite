import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function AnvilTitle() {

    return (
        <Container>
            <div className='text-center'>
                <Image
                    alt='becomingCover'
                    src='/AnvilTitle.jpg'
                    fluid='true'
                />
            </div>
            <div className='text-right'>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" name="AnvilPayPal" target="paypal" id="AnvilPayPal">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="9310939" />
                    <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="Add to shopping cart button" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </Container>
    )
}














