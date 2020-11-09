import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import FeldenkraisIndex from './FeldenkraisIndex'
import FeldenkraisTitle from './FeldenkraisTitle'

export default function PricePurchase() {

    return (
        <Container>
            <Row>
                <FeldenkraisIndex />
                <Col>
                    <FeldenkraisTitle />
                    <Card>
                        <Container>
                            <Card.Title className='text-center'><h1>Price & Purchase</h1></Card.Title>
                            <Card.Text>
                                This is new for us. We've switched to downloads. I used to ship out a CD with the files on it. Took a week or two to get where it was going. There were ever rising shipping costs. There were wails heard from clear across the seas when the local goverments insisted on collecting a 40% tax for shipping something in from the United States. (Our bosum buddies in England were the worst.) The last three computers I've bought don't have CD players. Windows 10 refused to recognize CDs made on previous operating systems. The world moves on.
                </Card.Text>
                            <Card.Text>
                                Now you click (the buy now button over to the left). You pay using PayPal.
                </Card.Text>
                            <Card.Text>
                                Then you'll return to a modified version of this website's homepage. If you look on the center of the page you'll find instructions to click again. Do so.
                </Card.Text>
                            <Card.Text>
                                A funny little symbol will float over to you download folder. You'll wait a few minutes. You'll have your lessons. It's a better system than waiting a week. They'll show up in your Download directory (or wherever you've chosen for such things). Just create a new directory somewhere on your computer and copy the files from the zip directory into the newly created directory. Another bonus of this system, if you lose track of the lessons or your disc crashes. You won't be charged all over again. If I have a record that you've bought the lessons, I'll simply arrange for a fresh download.
                </Card.Text>
                            <Card.Text>
                                If you need the lessons in some other format, write and let us know and we'll try and find a solution. But that will entail an extra charge for the medium (think USB drive) and the mailing cost.
                </Card.Text>
                            <Card.Text>
                                I will mention that we're just transitioning (December 2018) to this new approach. But if you have any problem just email Bruce@BruceTHolmes.com. Tell me what happened, and I'll roll into action. I have backup procedures I can turn to.
                </Card.Text>
                            <Card.Text>
                                If you want to explore the Feldenkrais Method and the genius of Moshe Feldenkrais from the comfort of your own home, this is the most cost effective method you'll ever find of doing so. I even have some of the old CDs if that's what you'd prefer.
                </Card.Text>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}