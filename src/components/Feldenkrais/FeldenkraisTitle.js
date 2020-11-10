import React from 'react'
import { Button } from 'react-bootstrap'

export default function FeldenkraisTitle() {

    return (
        <div>
            <h1 className='text-center'>The Feldenkrais Lessons:</h1>
            <h1 className='text-right'>Awareness Through Movement</h1>
            <br></br>
            <h3 className='text-center'>A 48 lesson home study course for $48</h3>
            <div className='text-right'>
                <Button variant='dark'>
                    Buy Now
                    </Button>
            </div>
        </div>
    )
}