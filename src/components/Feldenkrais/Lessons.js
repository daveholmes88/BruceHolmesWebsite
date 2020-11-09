import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'

import FeldenkraisIndex from './FeldenkraisIndex'
import FeldenkraisTitle from './FeldenkraisTitle'

export default function Lessons() {

    return (
        <Container>
            <Row>
                <FeldenkraisIndex />
                <Col>
                    <FeldenkraisTitle />
                    <Card>
                        <Container>
                            <Card.Title><h2 className='text-center'>A List of the 48 Feldenkrais Lessons</h2></Card.Title>
                            <Card.Img src='Feldenkrais.jpg' fluid='true'></Card.Img>
                            <Row>
                                <Col sm={6}>
                                    <Card.Text>
                                        1. Standing Turning <br></br>
                                2. Flexors <br></br>
                                3. Extensors <br></br>
                                4. Posture <br></br>
                                5. Pelvic Clock <br></br>
                                6. Heel Circles <br></br>
                                7. Shoulder Hip Clocks <br></br>
                                8. Knees Falling <br></br>
                                9. Stomach To Sitting <br></br>
                                10. Lifting Hip <br></br>
                                11. Connecting Feet Hands <br></br>
                                12. Lifting Arm <br></br>
                                13. Lengthening Thru Spine <br></br>
                                14. Breathing <br></br>
                                15. Stretching Sides <br></br>
                                16. Snow Angels <br></br>
                                17. Sitting Turning <br></br>
                                18. Stretching Legs <br></br>
                                19. Freeing Neck <br></br>
                                20. Hamstrings Hipjoints <br></br>
                                21. Lifting Head <br></br>
                                22. Feldenkrais Crawl <br></br>
                                23. Rotating Foot <br></br>
                                24. Foot To Head
                            </Card.Text>
                                </Col>
                                <Col sm={6}>
                                    <Card.Text>
                                        25. Knees Falling To Side <br></br>
                                26. Rolling Head <br></br>
                                27. Sitting Tilting Pelvis <br></br>
                                28. Drumming With Your Knees <br></br>
                                29. Praying <br></br>
                                30. Sitting Turning <br></br>
                                31. Rubber Band <br></br>
                                32. Hand To Chin <br></br>
                                33. Rolling Side To Back <br></br>
                                34. Eyes <br></br>
                                35. Magic Ankles <br></br>
                                36. Rocking <br></br>
                                37. Rolling Fists <br></br>
                                38. Flexing Breathing <br></br>
                                39. Hands Inverted <br></br>
                                40. Tilting Legs <br></br>
                                41. Swivel Legs <br></br>
                                42. Face Mouth <br></br>
                                43. Holding Feet <br></br>
                                44. Shoulders <br></br>
                                45. Hugging Yourself <br></br>
                                46. Picking The Grapes <br></br>
                                47. Lifting Head, Tilting Legs <br></br>
                                48. Mapping The Body <br></br>
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}