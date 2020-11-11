import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import ContactIndex from './ContactIndex'

export default function Contact() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('')
    const [interest, setInterest] = useState('general')
    const [website, setWebsite] = useState('')
    const [comments, setComments] = useState('')

    const handleSubmit = () => {
        console.log('yayyyyyyyyyyyyy')
    }

    console.log(interest)
    return (
        <Container>
            <Row>
                <ContactIndex />
                <Col>
                    <h1 className='text-center'>Join the Mail List</h1>
                    <h4 className='text-center'>You will only hear from me if something important is happening, and I will never sell my mail list.</h4>
                    <br></br>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type='text' placeholder='123 Main St' value={address1} onChange={(e) => setAddress1(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control type='text' placeholder='Apartment, studio, floor' value={address2} onChange={(e) => setAddress2(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>City</Form.Label>
                                <Form.Control type='text' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>State</Form.Label>
                                <Form.Control type='text' placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Zip/Postal Code</Form.Label>
                                <Form.Control type='text' placeholder='Zip/Postal Code' value={zip} onChange={(e) => setZip(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Country</Form.Label>
                                <Form.Control type='text' placeholder='United States' value={country} onChange={(e) => setCountry(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Your Website</Form.Label>
                                <Form.Control type='text' placeholder='yourwebsite.com' value={website} onChange={(e) => setWebsite(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Interests</Form.Label>
                                <Form.Control as='select' value={interest} onChange={(e) => setInterest(e.target.value)} custom >
                                    <option value='general'>General</option>
                                    <option value='feldenkrais'>Feldenkrais</option>
                                    <option value='music'>Music</option>
                                    <option value='triathlon'>Triathlon</option>
                                    <option value='science-fiction'>Science Fiction</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Comments</Form.Label>
                                <Form.Control as='textarea' rows={3} value={comments} onChange={(e) => setComments(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Button variant='dark' onClick={handleSubmit}>
                            Join The Mail List
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}