import React from 'react'
import { Container, Row, Image, Col } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function DeathWithDignity() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Death With Dignity</h1>
                    <p>Both my parents died of cancer. Dad had a good death. Mom had what I can only describe as a horrific death.</p>
                    <div className='text-center'>
                        <Image
                            src='/TwoCents/HolmesFamily.jpg'
                            alt='HolmesFamily'
                            fluid='true'
                            align='center'
                        />
                    </div>
                    <br></br>
                    <p>Dad died from lymphoma. The doctors have seen this sort of cancer a lot with golfers. They use a lot of poison to keep the grass perfect. And Dad loved to golf. It took months for the disease to progress. Dad lived in southern California, and my brother and I lived in Illinois. We knew we were loosing Dad so we had plane tickets for a visit in a couple of weeks.</p>
                    <p>Then I got a phone call one evening. Dad was on the line. He said he wasn't going to make it. I started to say sure you will. But I suddenly realized Dad was saying goodbye. I needed to take him at his word. So we talked. I thanked him for being a wonderful dad, because he really was. I'd been lucky. It was a tearful but nice conversation that I'm so grateful I had. Then Dad said he'd better call my brother, and we said one last goodbye.</p>
                    <p>Dad died that night. Dad knew he was going to die, because he was going to end it. He was in a lot of pain. He was withering away. He didn't want another two weeks. He didn't want our last memory of him to be the skeleton he had become. He had planned in advance, and I believe there was a trip to Mexico to get what was needed. When the time came he took a pill. Mom lay on the bed beside him and they held hands. They both fell asleep. Mom woke in the middle of the night and Dad was gone.</p>
                    <p>Mom died of bladder cancer ten years later. We brought her back to Illinois so we could take care of her. She stayed with my brother. He took the night shifts. I came over during the day. It was a slow process. She finally stopped eating in hopes of ending it sooner. She was already just skin and bones, but the lack of food just made her ever more gaunt. I still remember how she looked and it's a memory I have trouble getting past to the more carefree days. She was on a hospice program and there were regular doses of morphine. But they weren't enough.</p>
                    <p>In the weeks before she died she several times begged me to kill her. And I couldn't bring myself to do it. If she had asked me to help her take a pill, I could have done that. But to hold a pillow over her face while her body struggled to breath. I couldn't imagine living with such a memory. So I watched her suffer. Looking back, I feel like I failed her. Because it was a horrible, awful death full of pain that dragged on for a long month.</p>
                    <p>People should have the right to end their life on their own terms. It's as simple as that. We shouldn't make it easy to end it. I don't want to see people who are depressed having an easy way out. But if someone is terminal, then how they go should be their decision. No one has the right to force them to suffer.</p>
                    <p>I don't normally experience anger in my life. But this makes me angry.</p>
                    <p>No one has the right to tell another human being that they have to suffer through weeks or months of agony.</p>
                    <p>The torture my mother endured should not happen to any of us.</p>
                    <p>I suppose the people who oppose the right to die think they're taking a moral stance. But all they are doing is forcing others to suffer. How is that moral? I should forgive them their ignorance. But they're interfering in other people's lives. And they know nothing.</p>
                </Col>
            </Row>
        </Container>
    )
}