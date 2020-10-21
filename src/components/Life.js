import React from 'react';
import { Container } from 'react-bootstrap'
import ReactPlayer from "react-player"

export default function Life() {

    return (
        <Container>
            <iframe src="https://open.spotify.com/embed/album/46ByEzMc85j4DG1NOlzFKi" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <ReactPlayer url='https://www.youtube.com/watch?v=u0FpVF2xrZ4' />
        </Container>
    )
}