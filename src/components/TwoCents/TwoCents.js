import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function TwoCents() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />
                <Col>
                    <h1>Two Cents</h1>
                    <p>I decided it would be fun to have a place where I could opinionate away. We'll see how this develops. Maybe in time pieces of wisdom will start to show up. There's something for everyone here.</p>
                    <p>You'll meet my son the Marine, a lovely intelligent hooker, a candidate for president (with a cruel past), my parents (and how they died), a red Prius and the wisest pundits I've run across. You'll also hear about my searches for magic and for a reliable computer.</p>
                    <p>If any of the topics on the left interest you, click away.</p>
                </Col>
            </Row>
        </Container>
    )
}