import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import MovementIndex from './MovementIndex'

export default function MovementQuotes() {

    return (
        <Container>
            <Row>
                <MovementIndex />
                <Col>
                    <h1>Movement Quotes</h1>
                    <br></br>
                    <div className='text-center'>
                        <p><span class='quote'>To me, if life boils down to one thing, it's movement. To live is to keep moving. </span> <br></br>Jerry Seinfeld</p>
                        <p><span class='quote'>A vigorous five-mile walk will do more good for an unhappy but otherwise healthy adult than all the medicine and psychology in the world. </span><br></br>
                            Paul Dudley White</p>
                        <p><span class='quote'>I think exercise tests us in so many ways, our skills, our hearts, our ability to bounce back after setbacks. This is the inner beauty of sports and competition, and it can serve us all well as adult athletes.</span>
                            <br></br>Peggy Fleming</p>
                        <p><span class='quote'>Leave all the afternoon for exercise and recreation, which are as necessary as reading. I will rather say more necessary because health is worth more than learning.</span>
                            <br></br>Thomas Jefferson</p>
                        <p><span class='quote'>Quit worrying about your health. It will go away.</span>
                            <br></br>Robert Orben</p>
                        <p><span class='quote'>Take care of your body. It's the only place you have to live.</span>
                            <br></br>Jim Rohn</p>
                        <p><span class='quote'>If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.</span>
                            <br></br>Hippocrates</p>
                        <p><span class='quote'>Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.</span>
                            <br></br> John F. Kennedy</p>
                        <p><span class='quote'>The first wealth is health.</span>
                            <br></br>Ralph Waldo Emerson</p>
                        <p><span class='quote'>The human body is the best picture of the human soul.</span>
                            <br></br>Ludwig Wittgenstein</p>
                        <p><span class='quote'>The reason I exercise is for the quality of life I enjoy.</span>
                            <br></br>Kenneth H. Cooper</p>
                        <p><span class='quote'>To enjoy the glow of good health, you must exercise.</span>
                            <br></br>Gene Tunney</p>
                        <p><span class='quote'>True enjoyment comes from activity of the mind and exercise of the body; the two are ever united.</span>
                            <br></br>Wilhelm von Humboldt</p>
                        <p><span class='quote'>I will always listen to my coaches. But first I listen to my body. If what they tell me suits my body, great. If my body doesn't feel good with what they say, then always my body comes first.</span>
                            <br></br>Haile Gebrselassie</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}