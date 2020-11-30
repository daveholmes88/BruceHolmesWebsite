import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ShoppingIndex from './ShoppingIndex'

export default function Shopping() {

    return (
        <Container>
            <Row>
                <ShoppingIndex />
                <Col>
                    <h1>Shipping Charges, Directions</h1>
                    <p>When I'm sending out a single CD, I typically use First Class Mail. The Post Office has never lost one of my shipments and the delivery time is excellent, usually a few days or less. If I'm sending a book out, I'll use media mail because it's so much cheaper than parcel post. Even then delivery is fairly quick.</p>
                    <p>Shipping & Handling to the United States and its territories is $4, no matter how much you order.</p>
                    <p>For Canada the rate is $10.</p>
                    <p>For all other Foreign Shipping the price is $15. (I apologize for that. On this date, January 27, 2013, the international rates just doubled. I'm dumbfounded, but First Class Mail is still the cheapest option I've found.)</p>
                    <p>All sales are guaranteed. If you're not happy with your purchase, your money will be refunded. All of it.</p>
                    <p>Transactions are handled by PayPal. With PayPal you always have the option of paying with a credit card; just look for that option on the screen - it's there. PayPal has solid security in place. If you wish to buy more than one of an item, you'll be able to modify the quantity in the cart. If you have any difficulty you can email me at:</p>
                    <p>Bruce (symbol for at) BruceTHolmes.com</p>
                    <p>If you would be more comfortable paying by check, you can always send me a check at:</p>
                    <p>Bruce Holmes, 1115 Mulford Street, Evanston, IL 60202-3318</p>
                </Col>
            </Row>
        </Container>
    )
}