import React from 'react'
import { Container } from 'react-bootstrap'

export default function FeldenkraisTitle() {

    return (
        <Container>
            <h1 className='text-center'>The Feldenkrais Lessons:</h1>
            <h1 className='text-right'>Awareness Through Movement</h1>
            <br></br>
            <h3 className='text-center'>A 48 lesson home study course for $48</h3>
            <div className='text-right'>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            </div>
        </Container>
    )
}