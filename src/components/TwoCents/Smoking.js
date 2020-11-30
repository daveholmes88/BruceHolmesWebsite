import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function Smoking() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />
                <Col>
                    <h1>Smoking</h1>
                    <div className='text-center'>
                        <p>A cigarette addiction will cost you 1.5 million dollars over the course of you lifetime.</p>
                        <p>It will limit the people who want to hang out with you. Nonsmokers will avoid you.</p>
                        <p>It will rob you of your wind and endurance.</p>
                        <p>It will ennable a wide variety of diseases.</p>
                        <p>It will leave you chained to an addiction.</p>
                        <p>Even when you're not smoking, your body will reek of nicotine.</p>
                        <p>There is a very good chance it will kill you.</p>
                        <p>Remember, life's an intelligence test. And this is not a tough one.</p>
                        <p>Is there any way on earth you would consider becoming a smoker?</p>
                        <p>Seriously?</p>
                        <p>Just don't start.</p>
                        <h4>Kissing a smoker is like licking out an ashtray.</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}