import React from 'react'
import { Button } from 'react-bootstrap'

export default function BecomingTitle() {

    return (
        <div>
            <h1 className='text-center'>Becoming a Square Dance Caller</h1>
            <h4 className='text-right'>3rd Edition</h4>
            <div className='text-right'>
                <a href='/BecomingHowToOrder.html'><Button variant='dark'>Buy Now</Button></a>
            </div>
        </div>
    )
}