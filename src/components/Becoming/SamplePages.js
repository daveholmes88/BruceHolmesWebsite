import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function SamplePages() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                    <h3 className='text-center'>Sample Pages</h3>
                    <Image
                        alt='sample1'
                        src='/Becoming/BecomingSample1.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample2'
                        src='/Becoming/BecomingSample2.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample3'
                        src='/Becoming/BecomingSample3.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample4'
                        src='/Becoming/BecomingSample4.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample5'
                        src='/Becoming/BecomingSample5.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample6'
                        src='/Becoming/BecomingSample6.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample7'
                        src='/Becoming/BecomingSample7.jpg'
                        fluid='true'
                    />
                </Col>
            </Row>
        </Container>
    )
}