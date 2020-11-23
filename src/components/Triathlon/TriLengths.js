import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TriathlonIndex from "./TriathlonIndex"

export default function TriLengths() {

    return (
        <Container>
            <Row>
                <TriathlonIndex />
                <Col>
                    <h1>Race Lengths</h1>
                    <div className='text-center'>
                        <p><b>Length of Triathlon Races</b></p>

                        <Image
                            src='/Triathlon/Table.jpg'
                            fluid='true'
                            alt='table'
                        />
                    </div>
                    <br></br>
                    <p>The Standard distance is sometimes called the International or Olympic distance just because it's used in the Olympics. But there is pressure on the Olympic Committee to create events that are exciting and television friendly (not too long in duration). So the Sprint distance may end up being the Olympic distance someday soon.</p>
                    <p>The Sprint swim is the distance most likely to be lowered. It is often done in a pool and having people do the full 750 meters creates a logistical nightmare. When you've got hundreds of people racing, you just can't get the athletes in and out of the pool quickly enough. The race would take all day. So you'll often see this distance shortened to something in the neighborhood of 450 yards.</p>
                    <p>Notice that it isn't a huge leap from the Standard swim length to the Half Ironman swim length. If you're comfortable with the Standard swim, can sit a bike for a couple of hours and can run 13 miles, it's not a big leap to move from Standard to Half Ironman.</p>
                </Col>
            </Row>

        </Container>
    )
}