import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function Covid() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Covid</h1>
                    <p>This is a strange time we live in. Most days Joy and I stay at home except for our walks around the neighborhood. As we walk we check out our neighbor’s windows. It’s a community project started via email. Every few days the theme changes: silly faces, encouraging words, flowers, jokes. Here’s a collage one of my neighbors put together of random windows on the silly faces day.</p>
                    <div className='text-center'>
                        <Image
                            src='/TwoCents/COVID19Windows.jpg'
                            alt='faces'
                            fluid='true'
                        />
                        <p>Joy and I’s contribution is the one in the middle on the left.</p>
                    </div>
                    <p>The other day Joy made masks for both of us. A visit to get food is meticulously planned and when I return, shoes are removed at the door, I hurry downstairs careful not to touch anything, peel and head for the shower. Mail and packages are allowed to remain unopened for a day so any viruses present have a chance to die out. I’ve read reports of people being taken off to the hospital, not allowed visitors and then they’re suddenly gone. (Getting my will in proper order has become my top priority, just in case.) The scenes from hospitals are ghastly. I can’t imagine anything as courageous as going off to work in a hospital treating COVID-19 patients. There are retired medical people in their seventies volunteering to help by returning to service. I’m so glad I don’t have that choice before me. I worry I wouldn’t have the courage to step up.</p>
                    <p>I used to dream of being able to stop time and get caught up on all my work and projects. Well, time has stopped. The dances I was scheduled to call have been cancelled. I have no pressing preparations to attend to. I have no classes to teach. Joy and I are avid square dancers, and that was how we had fun. That’s just not possible anymore. I think it may be another year before such gatherings can start up again. Actually, we did have a sort of dance over Zoom the other night. It was fun seeing everybody again in their little boxes on the screens, but I wouldn’t call it a high-energy dance. If I don’t get the projects finished, I will have no one to blame but myself.</p>
                    <p>A few nights ago we watched Contagion, a film about a global pandemic. It was amazingly accurate regarding the issues we would face. But it got one thing wrong. It showed people turning feral as the rule of law collapsed. Instead all I see is kindness and people showing their best selves. I know there are some people rushing out to buy more guns. But the rest of us are betting on our neighbors.</p>
                    <p>I just wish Trump hadn’t thought it would be a lark to run for President. A lot of people are going to lose their lives because he didn’t take the warnings seriously and prepare for what was obviously headed our way. Sometimes who’s in charge matters. I actually believe that any farmer from Kansas would make a better president. (No, I’m not saying farmers are as foolish as our president. Farmers from Kansas work hard, know what they’re doing and have good hearts. I’d trust any one of them to have more integrity and a less infantile ego.)</p>
                    <p>Trump’s approach is, “Looks like by April, you know, in theory, when it gets a little warmer, it miraculously goes away.” In contrast, New Zealand's Prime Minister, Jacinda Ardern's put her country into total lockdown (except for the healthcare workers) for a period of 4 weeks. One woman has died, but they're doing extensive testing and the number of people contracting the virus has been going down. They think they’ll be able to eliminate the epidemic by the end of April. They’ll not be able to allow foreign visitors after that, so the tourism industry will suffer. But life will be able to go back to normal.*</p>
                    <p>With our approach, I don’t think this has any chance of ending until we have a vaccine or something that accomplishes the same thing as a vaccine. We can flatten the curve so that our hospitals don’t drown in the sick and dying. But until the virus works its way through our entire population, we’re still stuck in our homes, or out catching the virus.</p>
                    <p>These hotspots you read about can be traced back to social gatherings. There was a soccer game in northern Italy. People spent a couple of hours surrounded by others. People cheered and laughed and hugged. A week later all hell broke loose among the thousands who had attended. Some of the people in attendance that afternoon had the COVID-19. By the time they left the game, a lot of people had contracted it. And it spread rapidly from that beginning.</p>
                    <p>There was a funeral in Albany, Georgia in late February. About 100 people attended. They hugged, socialized, sang hymns and shed a few tears together. Except one of the mourners had contracted the disease and didn’t yet realize it. He died a week later. Soon over five hundred people in that community had tested positive and more funerals were being held.</p>
                    <p>So anyone who says we’ll be packing the churches by Easter is looney. A preacher asking his flock to worship together right now is not much better than a mass murderer trying to eliminate our religious neighbors. For the next year, I doubt if sporting events will be possible. Maybe I’m being too pessimistic. There is the possibility of a breakthrough that could end the pandemic by the fall. There's a lab at Oxford University that already thinks it has a vaccine and has begun testing. They might have something available by the fall. But there's normally a careful series of tests that are done before distributing a vaccine. The desire for a quick solution means some corners are being cut. I hope that doesn't come back to haunt us. Or perhaps someone will come up with a novel approach to fighting this, something never used before. But I worry this won't end quickly.</p>
                    <p>In the meantime, we’ll hear people trying to blame the virus on some scapegoat. All sorts of conspiracy theories will make the rounds. But it’s just life. Viruses happen all the time. And once in a while one comes along that has all the makings of a catastrophe for us. And then we learn why science matters. If you’re the praying sort, you might want to pray for the science nerds from high school to save our lives. (And if you didn’t pay attention in school, it’s never too late to learn. Science is fascinating stuff.)</p>
                    <p>But we’ll get through this somehow. I don’t think the apocalypse is imminent. In the words of a country song making the rounds, “I believe most people are good.”</p>
                    <p>April 10, 2020</p>
                    <p>* May 4 update: Number of new cases in New Zealand today, 0. This is what's possible when you have strong, intelligent leadership. They really are beating it. Australia is not far behind. The two countries are talking about an agreement that would allow tourism between their two countries in the months ahead if both can manage to irradicate the disease. In the USA yesterday the total number of new cases was 27,348. Total deaths so far in the USA, 69,168. More than twice the number of any other country. It didn't have to be like this.</p>
                </Col>
            </Row>
        </Container>
    )
}