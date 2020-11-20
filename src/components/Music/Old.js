import React from 'react';
import { Container } from 'react-bootstrap'
import ReactPlayer from "react-player"

export default function Old() {

    return (
        <Container>
            <iframe src="https://open.spotify.com/embed/album/66HCXkQJea6QObCtr6Dpuk" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <ReactPlayer url='https://www.youtube.com/watch?v=pDOJTLH36CU' />
        </Container>
    )
}
