import React, { useState } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'

export default function Becoming() {

    const [showTc1, setShowTc1] = useState(false)

    return (
        <Container>
            <Button>
                Buy Now
            </Button>
            <br></br>
            <h4>This is the book I wish I had when I was learning to call.</h4>
            <img
                alt='becomingCover'
                src='BecomingCover.jpg'
            />
            <h3>Table of Contents</h3>
            <img
                alt='tc1'
                src='BecomingTOC1-650.jpg'
                onClick={() => setShowTc1(true)}
            />
            <Modal
                show={showTc1}
                onHide={() => setShowTc1(false)}
            >
                <Modal.Header closeButton >
                    <Modal.Title>Table of Contents Page 1</Modal.Title>
                </Modal.Header>
                <img src='BecomingTOC1-650.jpg' />
            </Modal>
            <h3>Sample Pages</h3>
            <img
                src='BecomingSample1.jpg'
            />
            <h3>Quotes</h3>
            <p>
                "Every time I took a caller seminar, the information was great and every caller was willing to share their knowledge; but I always felt like I was starting in the middle.  I’d leave the class frustrated and seriously doubting I would continue.
                When I bought Becoming and began digesting the material, it gave me a starting place, laying out a background that I think is often assumed by an experienced caller. It allowed me to take what I’d been hearing in the classes I’d attended and connect the dots.
                Becoming is more than a resource book. It organizes not only the calls, but every aspect of calling, so a foundation can be laid out and built upon. Becoming allows you to turn the pages frontward and often backwards in order to chew on the concepts. Until there is order, not mush.
                Becoming encouraged me and helped me change my attitude from "I don't think I can do this" to "I think I can do this!"  Thank you, Bruce, for your foresight and your insights."
            </p>
            <p>
                Judy Wong-Zaleske, West Dundee, Illinois
            </p>
            <h3>How To Order</h3>
            <Button>
                Buy Now
            </Button>
        </Container>
    )
}