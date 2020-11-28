import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function Folk() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Folk Dancing</h1>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    src='/Dance/FolkDancers.jpg'
                                    alt='ECDancers'
                                    fluid='true'
                                    align='left'
                                    className='picture'
                                />
                            </div>
                            <div className='pull-right'>
                                <p>I started folk dancing ages ago, and I still love it. Most of the different cultures of the world have danced. It is a way to be together, to share the day's happenings, to create a community. I've learned dances from the Balkans, from England and France and Germany and Turkey and Israel and Russia, from Mexico and Africa and Japan. I could go on with the litany. The music you dance to is from the villages where the dances were created. It is often wonderful, always fresh and fascinating. The movements of the dances are sometimes exultant, sometimes hypnotic, sometimes graceful, but more than anything they satisfy. There is a place in us that loves to move to music.</p>
                                <p>I wanted something to brighten up the page and found a picture from my days in a performing folk dance troupe. (That's me in the middle.) I should mention that normal folk dance groups don't use costumes.</p>
                                <p>My memories of starting are vague. A friend said she was going folk dancing. I do remember instantly thinking it sounded neat. At first, it's a bit intimidating. This is a community where people have invested some serious time in learning a skill. You'll see some pretty fancy footwork. But you can earn your place among them. Most groups start each evening with simple dances that are easy enough so you can follow along without a lot of coaching. There is usually time spent teaching some dances, so you can start building up a repertoire. But then the request dances begin and people start doing material they've learned previously. You will see dances that fly past at an amazing speed and require skill and competent footwork. I can still recall the exhilaration when I first mastered a dance I deemed difficult. In time it gets easier. You start realizing there are building blocks. After all there are only so many things you can do with your feet. You can stamp, you can hop, you can step. There are a few other moves, but the list is finite. After a while you know how to do a grapevine and when one shows up in a dance, all you have to do is link that up with the other building blocks in the dance. But this takes time. The first few weeks you're liable to feel a bit clumsy compared to everyone else. Dancing is a skill. You will learn and get better at it.</p>
                            </div>
                        </Col>
                    </Row>
                    <p>While you may feel out of your depth during the request dancing, you don't have to relegate yourself to the sidelines. If they're doing a dance you don't know, get behind the line and watch what they're doing. There's always a pattern. See if you can follow along. You'll make mistakes, but no one will care. Just keep trying. A lot of dances can be learned that way if you make the effort. One point of etiquette: If you don't know a difficult dance, don't jump into the line or circle. Follow along behind until you're sure you've got it. Trying to learn a dance within the line by bumping into the people around you isn't fair to them and makes your job tougher. Once you think you've got it, join the end of the line. (The beginning of the line is the leader, someone who knows the dance well. You certainly don't want to jump in at the front of the line.)</p>
                    <p>Folk dancing is not like art dance. It is not for viewing; it's for doing. The dances evolved over the years, often as a process the whole village participated in. They feel good. Oh, once and a while the dances are for viewing. Some of the men's dances are for showing off. Some of the women's dances are obviously designed to leave the men of the village full of yearning and aching hearts. But universally, the movements simply feel good.</p>
                    <p>Folk dancing is very different from the free-form gyrations of our dance clubs. There you will see many who feel awkward and self-conscious in their movements. Folk dancing allows you to learn a sublime, usually simple choreography and move in unison with your friends. If you love to create your own dance, more power to you. But if you'd prefer a little help in finding the perfect movement for the music, folk dancing can provide the answer.</p>
                    <p>You will meet people at folk dancing. You will make friends. After a few weeks you will feel a part of the community. You may even meet members of the opposite gender. I know more than a few marriages that started at folk dancing.</p>
                    <p>What the heck, I'll tell you my own story. I used to teach a folk dance group on Friday nights in Evanston. One night, many years ago, I wanted to teach a Russian couple dance called Karapyet. I needed a partner to help demonstrate the dance in the middle of the circle and asked if any of the women knew the dance. Someone I'd never seen before rather tentatively raised her hand. As I pulled her into the center I whispered, "Do you really know this." "Yes," she insisted. As I started the teaching she corrected me. "No, it starts on the other foot." Oops, she was right. I decided she really did know it. As I taught the dance I tried to find out more about her in little asides. It took the whole evening, but I finally got her to give me her phone number. We were married a few years later. That woman and I are no longer together, but we used to love telling that story. And I, obviously, still do. I've got three kids who owe their existence to folk dancing.</p>
                    <p>Maybe you'll have your own story someday. Even if you don't, you'll become a more graceful person, a better athlete. You'll learn to love the dance.</p>
                </Col>
            </Row>
        </Container >
    )
}