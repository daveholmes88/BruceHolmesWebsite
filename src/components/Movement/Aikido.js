import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import MovementIndex from './MovementIndex'

export default function Aikido() {

    return (
        <Container>
            <Row>
                <MovementIndex />
                <Col>
                    <h1>Aikido</h1>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    src='/AikidoMe.jpg'
                                    alt='aikidoMe'
                                    fluid='true'
                                    align='left'
                                    className='picture'
                                />
                            </div>
                            <div className='pull-right'>
                                <p>Aikido is the "Way of Harmony with the Universe." It's possible to view such descriptions as mumbo-jumbo window dressing. The real reason most people study a martial art is in hopes of feeling more confident, more powerful, more secure. Forget harmony. Still, Aikido tries harder than most to appeal to our better natures. That's because the focus is on learning how to control an attack rather than destroying the attacker. That's also the humor of Aikido. As the instructor stands before his students, demonstrating on one of their own, he may talk of loving the attacker, but everyone in the class knows that the student is experiencing serious of levels of pain. As anyone who's studied the art knows, it doesn't feel all that loving when you're having it done to you.</p>
                                <p>I got involved for the same reason that others study the martial arts. I wanted to feel powerful. I'd seen a demonstration and the participants seemed indestructible. They wore the usual white gi's of a martial artist plus a black skirt (called a Hakama) which obscured their footwork. Someone would attack in the most ferocious manner, only to go flying through the air. When they landed on the mat, there was just the barest rustling of clothing as they rolled back up to standing. Only to attack again. It was quite impressive. I wanted to feel that good about myself.</p>
                                <p>But I was also drawn to the mumbo-jumbo: Aikido's loving attitude and its mystical elements. The mystery of Aikido is the concept of Ki, something akin to the Force in Star Wars. (Where do you think George Lucas got the idea?) Ki is an energy all around us, and that energy can make us strong.</p>
                            </div>
                        </Col>
                    </Row>
                    <p>There are quite convincing demonstrations you can do regarding Ki. The most common being the unbendable arm. If you've got a friend handy I could talk you through it. Stand with you arm extended out toward the side and pointed at the horizon. Now tense up your arm, make it tight, and have your friend see if they can bend it. It shouldn't be all that difficult. Now, have your friend back away for a moment. Stop tensing the arm. Imagine that a powerful current runs through the arm. The current cannot be bent. You are allowed to help the current keep the arm straight, you may use your strength, but you may not tense up. This is called "Extending Ki." Now have your friend bend the arm again. When imagined properly the arm will be much harder, if not impossible, to bend. In the parlance of Aikido, that's because you let the energy do the work for you.</p>
                    <p>Except that's not true. There is a much more scientific explanation. If you tense up the arm, you are tightening both sets of muscles, the triceps and the biceps. The triceps are trying to keep the arm straight, the biceps are trying to bend it. When someone attempts to bend your arm they have a secret, unwitting ally in your biceps. Of course they can bend it, your biceps are inadvertently helping. When you stop tensing and use the Ki metaphor, you only use the triceps, and you're not fighting yourself. You become stronger, much stronger. After a lifetime of looking for the magical and mystical, my conclusion is that Ki is not real. Maybe it's a helpful way to teach people to use their bodies better. I've been thrown in Aikido in ways that seemed magical. But as far as I can tell it was just impeccable timing and use of the body. If the concept of Ki can help teach that, all power to it.</p>
                    <p>Aikido uses two primary techniques. One is to join with an attack, subtly amplifying it and guiding it to somewhere other than your person. Attackers commonly go flying into the air at such moments. Another technique involves pain. There are ways you can twist a wrist such that it feels like your arm is being torn off. It isn't, but you'd have a hard time convincing the wrist being twisted of that. In effect, the pain is what allows you control the attacker without doing serious permanent damage.</p>
                    <p>So it's not an easy training. You will have to learn to deal with the pain of the pins. (Rethinking it as a stretch instead of something negative helps a little.) And you will have to learn to take the falls. In Aikido training you will alternate between the roles of attacker and defender. Being the defender is easy, you're just practicing the techniques your Sensei (Japanese for teacher) has shown you. It is the attacker who takes the grief. You'll need to learn how to be thrown into the mat, roll out of the fall and come back up to standing. It's an art in and of itself. You'll learn a lot from the moments when you're the one getting thrown, but you won't always enjoy it. Still, it's one of the great beauties of Aikido.</p>
                    <div className='text-center'>
                        <Image
                            src='/NUAikidoClub.jpg'
                            alt='aikidoClub'
                            fluid='true'
                        />
                        <p>Northwestern University Aikido Club 1980s</p>
                    </div>
                    <p>Studying a martial art is like stepping into another universe. Suddenly everything matters and the stakes are high. Not paying attention can have unpleasant results. You will have joined with ancient traditions. You will learn the etiquette of the dojo (training hall). You will wear a gi, learn to bow, practice attacking, practice with swords (wooden ones, but still very dangerous), learn a whole language of techniques (koten nage, sankyo), and learn to meditate. You will be changed by all this. You will become less tense, less fearful, more centered in your life. You will make friends you admire and be part of something special.</p>
                    <Row>
                        <Col>
                            <Image
                                src='/AikidoClass.jpg'
                                alt='aikidoMe'
                                fluid='true'
                                align='right'
                            />
                            <div className='pull-left'>
                                <p>You will also be tested, moving up through the various levels as you master various techniques. The truth is you will not be asked to take a test until you are ready to pass it. So this is not something to worry about. But the final moment of the black belt test is the four-on-one attack. You will kneel facing a line of four black belts who will bow to you and then leap as one to attack. You have to survive what will seem like the longest minute of your life if you want to count yourself amongst such people. This is called adding drama to your life, and is a good thing.</p>
                                <p>There are easier ways to feel more powerful. Buying a gun is quick and painless. But it won't change the way you feel about yourself. Aikido can do that.</p>
                                <p>Finally a shout out. Sometimes I get Christmas cards from old students from the club at Northwestern University. Would love to hear from any and all.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}