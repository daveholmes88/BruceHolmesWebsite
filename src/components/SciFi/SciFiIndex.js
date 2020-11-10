import React from 'react'
import { Col, Card, Image, Container } from 'react-bootstrap'

export default function SciFiIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Container>
                    <h2>Science Fiction</h2>
                    <a href='/SciFi/Anvil.html'><h3>Anvil of the Heart</h3></a>
                    <div>
                        <a href='/SciFi/AnvilQuotes.html'>Author Quotes</a>
                        <br></br>
                        <a href='/SciFi/AnvilFanQuotes.html'>Fan Quotes</a>
                        <br></br>
                        <a href='/SciFi/AnvilChap1.html'>First Chapter</a>
                        <br></br><br></br>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" name="AnvilPayPal" target="paypal" id="AnvilPayPal">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="9310939" />
                            <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            <img alt="Add to shopping cart button" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                        <br></br><br></br>
                        <a href='/SciFi/Switch.html'><h4>The Switch of Time</h4></a>
                        <Card.Text>A Short Story</Card.Text>
                        <br></br>
                    </div>
                </Container>
            </Card>
        </Col>
    )
}