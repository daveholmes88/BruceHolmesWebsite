import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function Quotes() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                    <Card>
                        <Container>
                            <Card.Title>User Quotes</Card.Title>
                            <Card.Text>"I wish there had been a book like this when I started 25 years ago." <br></br>Glenn Wilson, Queensland, Australia</Card.Text>
                            <Card.Text>
                                "Clear and helpful! I would recommend to especially new callers like myself!"
                            <br></br>Connie Graham, Stanberry, Missouri
                            </Card.Text>
                            <Card.Text>
                                "Thanks so very much for your book. As a new caller this book has made all the difference for me. I especially appreciate the chapter 'Easy calls resolve'."
                            <br></br>Helen Tronstad, Bålsta Square Dancers, Stockholm, Sweden
                        </Card.Text>
                            <Card.Text>
                                "Firstly I want to say that I enjoyed your book and the "New Caller" market lacks this type of approach, so thank you… Keep up the good work, and I love the way you approach the exercises."
                            <br></br>Steve Turner, Accredited Caller Coach, Western Australia, Australia
                        </Card.Text>
                            <Card.Text>
                                "The caller school sent us a large document in preparation for the school.  I have been reading that too and find myself going back to your manual over and over to understand what they have said.  Yeah for your manual!!"
                            <br></br>Bobbi Nichol, Pensacola, Florida
                        </Card.Text>
                            <Card.Text>
                                “Thank you for your "Easy Calls Resolve". I really appreciate your additions to the book.
                                Like you, I have often been in a situation where I found it very difficult or maybe even impossible to get the dancers home because of the very limited number of calls they had learned. So I found this addition to your book very interesting.”
                            <br></br>Jan Wigh Nielsen, Hjoerring, Denmark
                        </Card.Text>
                            <Card.Text>
                                "Every time I took a caller seminar, the information was great and every caller was willing to share their knowledge; but I always felt like I was starting in the middle.  I’d leave the class frustrated and seriously doubting I would continue.
                                When I bought Becoming and began digesting the material, it gave me a starting place, laying out a background that I think is often assumed by an experienced caller. It allowed me to take what I’d been hearing in the classes I’d attended and connect the dots.
                                Becoming is more than a resource book. It organizes not only the calls, but every aspect of calling, so a foundation can be laid out and built upon. Becoming allows you to turn the pages frontward and often backwards in order to chew on the concepts. Until there is order, not mush.
                                Becoming encouraged me and helped me change my attitude from "I don't think I can do this" to "I think I can do this!"  Thank you, Bruce, for your foresight and your insights."
                            <br></br>Judy Wong-Zaleske, West Dundee, Illinois
                        </Card.Text>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}