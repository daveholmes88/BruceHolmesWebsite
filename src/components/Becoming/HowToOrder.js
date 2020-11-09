import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function HowToOrder() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                    <Card>
                        <Container>
                            <Card.Title className='text-center'><h1>How To Order</h1></Card.Title>
                            <Card.Title className='text-center'>$35 plus S&H</Card.Title>
                            <Card.Title><h4>8.5x11" 189 Pages</h4></Card.Title>
                            <Card.Text>Wire sprial bound so it can lie flat</Card.Text>
                            <Card.Title><h2>USA: S&H = $4, total = $39</h2></Card.Title>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="63ECV6W4VGA7L" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            <br></br><br></br>
                            <Card.Title><h2>Canada: S&H = $17, total = $52</h2></Card.Title>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="EUM9QFA9352MC" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            <br></br><br></br>
                            <Card.Title><h2>Overseas: S&H = $24, total = $59</h2></Card.Title>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="GUUDYMEVUSW98" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            <br></br><br></br>
                            <Card.Text>
                                Or mail a check with your address and contact information to
                            <br></br>Bruce Holmes
                            <br></br>1115 Mulford St
                            <br></br>Evanston, IL 60202-3318
                        </Card.Text>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}