import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

export default function Feldenkrais() {

    const [history, setHistory] = useState(false)
    const [explained, setExplained] = useState(true)
    const [index, setIndex] = useState(false)
    const [press, setPress] = useState(false)
    const [user, setUser] = useState(false)
    const [free, setFree] = useState(false)
    const [article, setArticle] = useState(false)
    const [price, setPrice] = useState(false)

    const setFalse = () => {
        setExplained(false)
        setHistory(false)
        setIndex(false)
        setPress(false)
        setUser(false)
        setFree(false)
        setArticle(false)
        setPrice(false)
    }

    const clickExplained = () => {
        setFalse()
        setExplained(true)
    }

    const clickHistory = () => {
        setFalse()
        setHistory(true)
    }

    const clickIndex = () => {
        console.log('+++++++++++++++++')
        setFalse()
        setIndex(true)
    }

    const clickPress = () => {
        setFalse()
        setPress(true)
    }

    const clickUser = () => {
        setFalse()
        setUser(true)
    }

    const clickFree = () => {
        setFalse()
        setFree(true)
    }

    const clickArticle = () => {
        setFalse()
        setArticle(true)
    }

    const clickPrice = () => {
        setFalse()
        setPrice(true)
    }

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Card border='dark'>
                        <Image
                            class="img-fluid"
                            className="feldenkrais"
                            src='Feldenkrais.jpg' fluid
                            alt='feldenkrais'
                        />
                        <h3 className='text-center'>The Feldenkrais Method</h3>
                        <br></br>
                        <div class='text-center'>
                            <Button variant='dark' className='text-center' style={{ width: '80%' }} >
                                The Method Explained
                            </Button>
                            <br></br><br></br>
                            <Button variant='dark' onClick={(clickHistory)} style={{ width: '80%' }}>
                                History of the Lessons
                            </Button>
                            <br></br><br></br>
                            <Button variant='dark' onClick={(clickIndex)} style={{ width: '80%' }}>
                                A List of the Lessons
                            </Button>
                            <br></br><br></br>
                            <Button variant='dark' onClick={(clickPress)} style={{ width: '80%' }}>
                                Press Quotes
                            </Button>
                            <br></br><br></br>
                            <Button variant='dark' onClick={(clickUser)} style={{ width: '80%' }}>
                                User Quotes
                            </Button>
                            <br></br><br></br>
                            <Button variant='dark' onClick={(clickPrice)} style={{ width: '80%' }}>
                                Price & Purchase
                            </Button>
                            <br></br><br></br>
                            <Button variant='dark' onClick={(clickFree)} style={{ width: '80%' }}>
                                Listen to a Free Lesson
                            </Button>
                            <br></br><br></br>
                            <Button variant='dark' onClick={(clickArticle)} style={{ width: '80%' }}>
                                Runner's World Article
                            </Button>
                            <br></br><br></br>
                            <Button variant='dark' onClick={(console.log('buy now'))} style={{ width: '80%' }}>
                                Buy Now
                            </Button>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <h1 className='text-center'>The Feldenkrais Lessons:</h1>
                    <h1 className='text-right'>Awareness Through Movement</h1>
                    <br></br>
                    <h3 className='text-center'>A 48 lesson home study course for $48</h3>
                    <div className='text-right'>
                        <Button variant='dark'>
                            Buy Now
                    </Button>
                    </div>
                    {explained ? <Card>
                        <Card.Title><h1 className='text-center'>The Method Explained</h1></Card.Title>
                        <Card.Text>
                            The Feldenkrais Method is about moving well, really well.
                            It's about being sensitive to your body and having the ability to choose effortless movement over struggle. It's about awareness and mental flexibility. It was created by the physicist Moshe Feldenkrais, a master teacher, someone really good at creating the ideal conditions for learning or unlearning for that matter.
                            Sometimes what is needed is to let go of the old restrictions we've placed on ourselves. Poor use of the body can happen because we learned poorly in the beginning (it is, after all, rather hit and miss as we're growing up) or a result of restrictions we adopted because they made sense at the time. If you hurt yourself your body tightens up to protect the damaged location.
                            The brain puts that holding pattern on automatic. Problem is, when the injury heals, the holding pattern may remain long past its usefulness.
                        </Card.Text>
                        <Card.Text>
                            Moshe Feldenkrais was a bodyworker. He touched people, made their brain aware of what they were doing poorly and showed them a better way.
                            He called this Functional Integration. But he also created a collection of floor exercises that a group could do, learning situations that did not require any hands on guidance. He called these exercises Awareness Through Movement. But they're not exercises in the way you did things in gym class. They're discovery environments, lessons.
                            These Feldenkrais Lessons are typically done lying on the floor. This is so old habits can more easily be altered--fighting gravity is core old habit. They're very gentle movements designed to make you aware and help you choose easier more graceful ways of doing things. I created a course of what I thought were the 48 central lessons of what Moshe was teaching.
                        </Card.Text>
                        <Card.Text>
                            Included in these pages you'll find a list of the lessons, quotes from both the press and users of the lessons, a sample free feldenkrias lesson, and a few words about the price history behind the lessons. If you have any questions, feel free to drop me a note at Bruce at BruceTHolmes.com.
                        </Card.Text>
                    </Card> : null}
                    {history ? <Card>
                        <Card.Title><h1 className='text-center'>History of the Lessons</h1></Card.Title>
                        <Card.Img src='Feldenkrais.jpg' fluid></Card.Img>
                        <Card.Text>
                            The 48 Feldenkrais Lessons were created over a couple of years by taping lessons live in the classes I was running back in the late 1970s.
                            The first Volume of 24 lessons were published on cassettes in 1980. Those lessons are typically about 40 minutes long.
                            The last 24 lessons of Volume II came out a couple of years later and averaged about 30 minutes in length. The price for the two volumes was $176.
                            I had people asking for a Volume III, but felt I'd pretty well covered things and decided that was enough.
                        </Card.Text>
                        <Card.Text>
                            A couple of decades ago I enhanced the sound and converted the files to mp3 digital format. This allowed me load all the files onto a single CD which cut production costs considerably and allowed my to drop the price.
                            Of course the CD had to be shipped to people which when going overseas could really bump up the price. And I've had a real education in the ways of the tax man. And unfortunately the CD seems to be going the way of the cassette. The last three computers I've purchased don't even have CD players. So I've bowed to the future, and we'll be selling the mp3 files as downloads from now on. Which frankly solves a lot problems. You click. You pay. You click. In a few minutes you've got the lessons.
                        </Card.Text>
                        <Card.Text>
                            And these days you can get the lessons for a dollar a lesson.
                        </Card.Text>
                        <Card.Text>
                            These are audio only lessons. Some people wish they could have them in video format, but that would be contrary to the nature of the lessons. This is not about imitating someone else. The lessons ask you to close your eyes and go internal, to feel what is happening in your body, how you fit against the ground, what does it feel like to do a movement? And you will be able to follow the instructions.
                        </Card.Text>
                        <Card.Text>
                            "I've just finished working my way through all 48 lessons. Brilliant! Really great teaching and the clarity of explanation of a physical movement is so impressive. I recommend you whenever there's an opportunity. Thanks" Dr. Matthew Selman, Clinical Psychologist, Newcastle, United Kingdom
                        </Card.Text>
                        <Card.Text>
                            When the cassettes came out, I was about to leave for Tel Aviv to spend a month watching Moshe work with clients. So I took a copy of that first volume with me and gave it to him. A few days later he reported he'd been listening to the tapes, "Very, very good indeed."
                        </Card.Text> 
                    </Card> : null}
                    {index ? <Card>
                     <Card.Title><h2 className='text-center'>A List of the 48 Feldenkrais Lessons</h2></Card.Title>
                        <Card.Img src='Feldenkrais.jpg' fluid></Card.Img>
                        <Row>
                         <Col sm={6}>
                            <Card.Text>
                        1. Standing Turning <br></br>
                                2. Flexors <br></br>
                                3. Extensors <br></br>
                                4. Posture <br></br>
                                5. Pelvic Clock <br></br>
                                6. Heel Circles <br></br>
                                7. Shoulder Hip Clocks <br></br>
                                8. Knees Falling <br></br>
                                9. Stomach To Sitting <br></br>
                                10. Lifting Hip <br></br>
                                11. Connecting Feet Hands <br></br>
                                12. Lifting Arm <br></br>
                                13. Lengthening Thru Spine <br></br>
                                14. Breathing <br></br>
                                15. Stretching Sides <br></br>
                                16. Snow Angels <br></br>
                                17. Sitting Turning <br></br>
                                18. Stretching Legs <br></br>
                                19. Freeing Neck <br></br>
                                20. Hamstrings Hipjoints <br></br>
                                21. Lifting Head <br></br>
                                22. Feldenkrais Crawl <br></br>
                                23. Rotating Foot <br></br>
                                24. Foot To Head
                            </Card.Text>
                         </Col>
                         <Col sm={6}>
                             <Card.Text>
                            25. Knees Falling To Side <br></br>
                                26. Rolling Head <br></br>
                                27. Sitting Tilting Pelvis <br></br>
                                28. Drumming With Your Knees <br></br>
                                29. Praying <br></br>
                                30. Sitting Turning <br></br>
                                31. Rubber Band <br></br>
                                32. Hand To Chin <br></br>
                                33. Rolling Side To Back <br></br>
                                34. Eyes <br></br>
                                35. Magic Ankles <br></br>
                                36. Rocking <br></br>
                                37. Rolling Fists <br></br>
                                38. Flexing Breathing <br></br>
                                39. Hands Inverted <br></br>
                                40. Tilting Legs <br></br>
                                41. Swivel Legs <br></br>
                                42. Face Mouth <br></br>
                                43. Holding Feet <br></br>
                                44. Shoulders <br></br>
                                45. Hugging Yourself <br></br>
                                46. Picking The Grapes <br></br>
                                47. Lifting Head, Tilting Legs <br></br>
                                48. Mapping The Body <br></br>
                            </Card.Text>
                         </Col>
                     </Row>    
                    </Card> : null}
            {
                press ? <Card>
                    <Card.Title className='text-center'><h1>Press Quotes for</h1><h3>The Feldenkrais Lessons: Awareness Through Movement</h3></Card.Title>
                    <Card.Text>
                        "The Feldenkrais Lessons, a 24 cassette, 48 lesson series developed by Chicago based practitioner Bruce Holmes, is excellent. Consolidated from a course that Holmes conducts, this series is an actual workshop that you can do over two month’s time. The course includes theory as well as exercise and moves at an easy pace. The directions are clear and simple, the lessons fascinating and a pure joy to do. The series has our highest recommendations." New Age Magazine <br></br> <br></br>
                    "I have used them many times over and have recommended them to yoga students, teachers, bodywork therapists of all kinds - all of whom have similar results. The exercises produce results that take many more hours, days or even years of learning through other methods. I have listened to other Feldenkrais tapes and have found your instructions to be by far the clearest to follow while in keeping with the discovery principle so central to this process. Others lose me. Best Wishes." <br></br>
                    Don Stapleton, Kripalu Yoga Institute <br></br> <br></br>
                    "...The voice is soothing, gentle, confidence-inspiring. It belongs to Bruce Holmes, a practitioner and teacher of Feldenkrais's work. This bit of explanation is part of a cassette tape, which is part of a series, now in two volumes of 24 lessons each, that is the best teaching aid we've heard or seen yet.
                    The lessons were recorded during actual workshops that Bruce Holmes taught, and you can hear his easy interaction with the students; how he involves them in the dialogue with their own bodies; how he encourages them gently and corrects them softly; how he unselfconsciously slips occasionally or changes his mind; and how the entire class sometimes disolves into laughter. Bruce Holmes must be fun to learn from."
                    The Stroking Times <br></br> <br></br>
                    "Very, very good indeed." Moshe Feldenkrais
                </Card.Text>
                </Card> : null
            }
            {
                user ? <Card>
                    <Card.Title><Card.Title className='text-center'><h1>User Quotes for</h1><h3>The Feldenkrais Lessons: Awareness Through Movement</h3></Card.Title></Card.Title>
                    <Card.Text>
                        "I've just finished working my way through all 48 lessons on your CD. Brilliant! Really great teaching and the clarity of explanation of a physical movement is so impressive. I recommend you whenever there's an opportunity. Thanks"
                    <br></br>Dr. Matthew Selman, Clinical Psychologist, Newcastle, United Kingdom <br></br><br></br>
                    "I've been doing your tapes almost daily since Feb. and all I can say is a thousand thank-yous. I really, at age 53, have a brand new body! It has been just what I needed so badly and had been searching for. I had been getting so stiff and tired and sore, even with exercise, and healthy eating, etc. I knew I didn't move right, but didn't know how to change.
                    And now every moment is a joy. It is fluid and graceful and effortless to go through daily life. Some of the specific changes are: my back- it always bothered me about 2/3 up, a lot of pain and tension. Chiropractors helped, but it never lasted. It was always sore to the touch and a couple of vertebrae stuck out. Now it is completely strong and comfortable, no matter what I do, and feels so good! A miracle. All my life my knees have cracked whenever i squatted down- now very rarely. I had a chronically sore shoulder-now almost perfect. I had a large callous on the ball of one foot that was really starting to bother me-it's almost gone.
                    I feel so flexible and limber now. Sometimes in the middle of a tape I feel such a wave of gratitude to Dr. Feldenkrais and his genius, and for what he has given me and the thousands of others he has helped. Thanks so much for your tapes and part in all this help!"
                    <br></br>Edith Spencer, Greenwich, Connecticut <br></br><br></br>
                    "I can't tell you how much I've enjoyed and benefitted from the Feldenkrais tapes. You did a beautiful job on them. I have done the whole set twice now, in the less than a month since I've gotten them, and the more I do the deeper my appreciation for Moshe, for you, for life. I did yoga for fifteen years, and taught it for ten. I am trained in a variety of approaches to body therapy including creative movement, sacred dance, bio-energetics, Lomi Body-Work, and polarity, and I have had a private practice in psychophysical therapy for ten years. I mention all that to give weight to my feeling that your tapes are fantastic, wonderful, superb, magnificent, and fun."
                    <br></br>John Robbins, Victoria, Canada <br></br><br></br>
                    "This is the first exercise program of many that I've attempted that I stick with, and even look forward to. I think this is due to the variety involved day-to-day, the pleasurable feelings of doing them, and how good I feel afterwards emotionally."
                    <br></br>Wendy MacDonald, British Columbia <br></br><br></br>
                    "They have gradually worked out pain and stiffness I have had for at least ten years. I am 66 years old-and after working through your tapes six times I feel 66 years young."
                    <br></br>Emma Nagel, Dallas, Texas <br></br><br></br>
                    "Bought your CD months ago. Things got busy. Only did a handful of lessons. Liked them so much, signed up for a 3 hr workshop in NYC. Was so disappointed, your lessons were actually much better and easier to follow. Thank you for this most valuable resource."
                    <br></br>Noreen Hernandez, Highland Lakes, New Jersey <br></br><br></br>
                    "I think that the entire set is terrific! I have been devoting an hour a day to the exercises for the last five or six months and the results are fantastic. I had a problem with numbness in the toes and ball of my right foot that had been getting progressively worse over a period of years (it started when I was about 53 years old and I am 63 now). The results seem to be that I am getting the feeling back in the toes and ball of the foot gradually. The toes on both feet are gradually spreading more and more. My posture has improved substantially-chest lifted, head on straighter, stomach tighter-and I get a kick out of people constantly telling me how young I look.
                    I certainly appreciate your producing the tapes. They are extremely well done: good timing, excellent voice, and a nice quiet relaxed quality that includes a little humor. I really enjoy listening to them, no matter how many times I hear them. You have done a great service for the Feldenkrais movement! If you ever need an endorsement for any purpose , let me know."
                    <br></br>Frank Pieper, Minneapolis, MN <br></br><br></br>
                    "I would like to write and add my words of praise for the gifts you have given through your tapes. I am an exercise physiologist and have worked several years with traditional and non-traditional exercise methods as a teacher and student. Your tapes added a dimension I did not know was there. I will be forever grateful for the value I have gained as an exerciser and as a teacher. Specifically, I've opened up new worlds for my running through increased pelvic motion. Also, my dancing has improved 100%! I've been able to pass much of this knowledge on to my students and open up new possibilities for them to move and exercise in a more relaxed confident manner. Techincally, Bruce, I also congratulate you. The tapes are very clear and easy to follow for everyone, professional to beginner. They are also pleasent to listen to, I will definitely recommend them to my student and fellow professionals."
                    <br></br>George Hetzel, Coronado, California <br></br><br></br>
                    "Your tapes have meant so much to me, I decided I wanted to write to you. I am now walking in a completely different manner. In the past, I was always afraid I might trip and fall; now, when I walk or move, I feel as though I'm floating.
                    This is such a precious gift for someone who has always thought of herself as awkward. I feel more graceful than I ever believed I could, and this has helped me relate to my world in a much more positive way.
                    The tapes are clear, well put together, and best of all, non-judgemental and encouraging in tone. I'm very glad I own them. Thank you."
                    <br></br>G.A., Evanston, Illinois <br></br> <br></br>
                    "I can't thank you enough for putting the audio tapes of your Feldenkrais classes on a CD!
                    I was a wrestler at Oregon State University, I graduated this spring. For about three years of my time wrestling in college I had extreme pain in my hips, knees, back, and neck. Wrestling had always been my passion, but it became impossible to enjoy, and actually depressed me with how incapable I was of reaching my full potential. I got to a point where I was incapable of walking without a bad limp.
                    Nearly defeated going into my senior year, I considered quitting wrestling because I couldn't handle putting my body through the abuse of daily wrestling practice. Instead, I simply changed my thinking and desperately searched the internet for something that could give me any relief. Because believe me, I had tried every form of physical therapy I was aware of. Then, I somehow stumbled across Moshe Fedenkrais and the method he developed. I knew it was exactly what I needed! I had terrible movement patterns. I had most likely always moved inefficiently, but it had worsened over the many injuries I incurred throughout my wrestling career, and finding ways for my body to compensate while still wresting. I looked at a lot of Feldenkrais instructor reviews before I chose to order your CD, and I couldn't be happier that I picked yours!
                    I must have finished the whole CD my first time through in less than a week! I went from hardly being able to walk, being so frustrated, and down right depressed. To having a complete breakthrough in my wrestling and overall body movement. I could have easily quit wrestling and never known what could have been, but I ended up becoming a Pac-12 champion this year, and finished top 12 in the country at the National tournament. It's all thanks to you Bruce!
                    My only regret is not discovering the Feldenkrais method, and you, sooner! I know I could have been a National Champion. I still have so much recovery to make with my body before I feel I am moving at my best. But before I found your CD's the image I had of myself at age 40 was a decrepit broken old man, because I had no idea how to fix my dysfunction. Now I've rid myself of pain almost entirely and have such a bright outlook because I no longer have pain doing basic every day tasks.
                    I just felt like I needed to let you know how much I appreciate your knowledge as a Feldenkrais instructor. I feel like I know you in a way, I have some of my favorite lessons nearly memorized from how many times I've heard you speak them!
                    You're awesome Bruce! Although we've never met, I appreciate all you have done for me!  Sincerely your fan,
                    <br></br>Alex Elder, Salem, Oregon <br></br><br></br>
                    "To this day it is hard for me to believe that two concentrated days with you in the Feldenkrais Workshop stopped back pain that three years of medicine could not stop. I do not ever remember being so relaxed and comfortable as I was at the end of the second workshop day. What has amazed me the most, however, was that I continued to feel relaxed and have continued on the most part without any pain! I have enjoyed and benefitted from the use of the tapes."
                    <br></br>Ginger Cook, Houston, Texas <br></br>
                    "Incorporating Feldenkrais with yoga has increased my flexibility and improved my yoga postures. As I get more and more addicted to the Feldenkrais method, I find my yoga classes (and me!) changing greatly, with accelerated improvement for all of us. You did a wonderful job on the cassettes. Thank you."
                    <br></br>Ruth Hetzel, Evansville, Indiana <br></br><br></br>
                    "...Many of the cassettes help my eyes. When I had my detached retina operation the eye refuse to manufacture fluid. It has slowly resumed function but many of the gentle head movements actually cause my eyes to relax and become more fluid... I'm sure I'm a Feldenkrais student for life."
                    <br></br>Judy Lipke, Lombard, Illinois <br></br><br></br>
                    "I've been really amazed by how good (balanced, comfortable) my body has felt after doing even a single side of your tapes. When I was listening almost daily I felt good all the time. Now, whenever I feel the need I listen to one of the tapes and whatever stress or back pain I've been experiencing as a result of a limb length discrepancy and scoliosis leaves me. My body feels organized in a new way it doesn't as a result of the other things I've tried-dance, Tai Chi, yoga. As a result, I've recommended the tapes to several friends and consider them a godsend."
                    <br></br>E.J., Chicago, Illinois <br></br><br></br>
                    "For anyone hoping to understand and use Feldenkrais's work, the tapes are a tremendous advanage. The material is concise, orderly, and represents the most effective method of learning the gentlest and most profound of movement therapies."
                    <br></br>Barrett L. Dorko, LPT, Cuyahoga Falls, Ohio. Ohio Falls Orthopaedic Surgeons <br></br><br></br>
                    "...they've shown me how to relax and ever since I've noticed that I never have pain in my lower back..."
                    <br></br>P.B. Ottawa, Ontario <br></br><br></br>
                    "...I'm able to define definite changed in my stature, my head stands taller, my back and neck straighter, and my shoulders aren't hunched up towards my head."
                    <br></br>G.K., Kalamazoo, Michigan <br></br><br></br>
                    "Have been using your cassettes of Feldenkrais Awareness Through Movement exerices and am writing you to tell you how excellent they are.
                    Several years ago I attended a weekend workshop taught by Moshe Feldenkrais. Within two weeks of that experience I lost 30 lbs. of weight and a further 20 lbs. within 3 months. Although I had to purchase a complete new wardrobe to fit my body, the feeling of well-being and the change in my self image more than compensated for the cost. Your cassettes present the exercises most clearly and are easy to follow."
                    <br></br>R.M., Vancouver, British Columbia <br></br><br></br>
                    "I had the funniest experience the other day. I had my physical with the same doctor I have it with every year, and he could not believe it. I am 1/2 an inch taller than before. He kept measuring me, looked at the chart from last year and the year before and finally asked what I am doing lately (he knew I teach yoga). So I told him that I am doing Feldenkrais exercises. He could not believe that the spine can stretch out if the muscles are relaxed, but I proved it. Normally they tell you that you are shrinking with age, now at 72 I am growing. Ha! My times in swimming in the Senior Olympics went up too, my jogging feels even easier than ever, through the Hamstring and Hipjoint exercises the stride gets longer. Bruce, you are just beautiful having done this fantastic job with the cassettes!"
                    <br></br>Ruth Bender, Avon, Connecticut <br></br><br></br>
                    "I have been using your cassettes and find they help me tremendously in my work as an actress. My work has become much more calm and truthful. The Feldenkrais method is very valuable to performers."
                    <br></br>Marilyn Kay Caskey, New York, New York <br></br><br></br>
                    "My bursitis-which I have had for two years in my left shoulder is mostly gone-apparently due to doing these exercises. I find the relaxed quality of your voice, with the clarity of directions you give as part of the effectiveness which leaves me feeling more clear headed & in control of my body..."
                    <br></br>B.J., Denver, Colorado <br></br><br></br>
                    I have been thinking about trying to contact you for several years to tell you how much your Feldenkrais lessons have meant to me over the years and finally decided to do it. While I was browsing your web site, I read what you said about not winning first prize with your music. While your music may not be winning first place, your Feldenkrais lessons are first place with me. I can speak with authority because I have about 18 other sets of Feldenkrais lessons by numerous well known teachers. Yours are hands down the best. I like all of the other Feldenkrais material I have very much, but you are much more personable, engaging, and thorough than any of the other teachers.
                    Wow, what a value. Your work is the single most effective self help I have found in 40 years. That includes many thousands of dollars worth of tapes, CD's, books and workshops covering everything, and I can add psychotherapy to that. That is the best value anybody will ever find for self help.
                    It has been very comforting to have you with me on my journey. I started doing the exercises again a while ago and just finished #38. I feel and learn something new every time I do them. Thank you for being there.
                    All the best to you. Very Kind Regards,
                    <br></br>Bill Jackson <br></br><br></br>
                    Thanks so much, my CD (plus the bonus music one :) arrived safely a few weeks ago. I am not as diligent as I'd like to be, but I am REALLY enjoying the process! I am astounded at how differently I walk, how differently I carry myself after each session! Thank you for offering this amazing program! Blessings,
                    <br></br>Diane Korol <br></br><br></br>
                    </Card.Text>
                </Card> : null
            }
            {
                free ? <Card>
                    <Card.Title><h1>Listen to a Free Feldenkrais Lesson</h1></Card.Title>
                </Card> : null
            }
            {
                article ? <Card>
                    <Card.Title className='text-center'><h1>Moshe's Healing Touch</h1></Card.Title>
                    <Card.Text className='text-right'>From Runner's World <br></br>by Bruce Holmes</Card.Text>
                    <Card.Text>
                        It seems these days I relate everything to the running. Much of what I experience seems to flow from or relate back to it. It was the running that created my fascination with the writings of Moshe Feldenkrais, and the running added a further concern.
                </Card.Text>
                    <Card.Text>
                        The technical term for my problem is chondromalacia of the knee, which simply means softness or deterioration of the cartilage. Unfortunately, giving something a name doesn’t necessarily help one deal with the situation. Whenever I got over 50 miles a week my knees would fall apart on me. I can remember occasions when I could hardly walk.
                </Card.Text>
                    <Card.Text>
                        I went to the medical community for help. You know, a podiatrist, who sent me to an orthopedist, who sent me to a physical therapist… The people in the know were of the following learned opinion: I was suffering from that dreaded condition: “floating kneecap.” At some point in the future orthotics would probably be helpful, buy my most pressing need was quadriceps exercises. And if they didn’t do the job, well, there was this simple operation which they evidently do all the time.
                </Card.Text>
                    <Card.Text>
                        The quadriceps exercises resulted in some very strong quadriceps, almost wrecked my back and didn’t do a thing for my running. (See note at end.) In fact, things were getting worse. The condition started cropping up at ever-lower mileages. On a couple of occasions I noticed a soft, furtive voice whispering sweetly in my ear, “Look, you’ve got hospitalization insurance. An operation wouldn’t cost a thing. You’d only be on your back a few days. They do it all the time. Your worries would be over.” But the operation never happened, and therein lies a tale.
                </Card.Text>
                    <Card.Text>
                        “The Way of Moshe” rhymes, though perhaps that sounds uncomfortably spiritual. The work is more commonly referred to as the Feldenkrais exercises. But when you’ve been around the old man for a while, you’re liable to get mystical about the whole thing and start waxing poetic. The “old man” is a short, rotund, twinkling, 72-year-old Israeli by the name of Moshe Feldenkrais, probably the wisest, funniest, most fascinating man I’ve ever known.
                </Card.Text>
                    <Card.Text>
                        He is the author of a unique therapy based on the vast capacity for learning which makes our species so uncommon but which also allows us to learn incorrectly. We can become creatures of habit, misusing ourselves, reacting to fresh demands with wired-in responses that are often inefficient and sometimes harmful.
                </Card.Text>
                    <Card.Text>
                        The Feldenkrais work has had an enormous effect on the way I run and on the way I live my life. For anyone trying to use his or her body intelligently it is a system of thought worth considering.
                </Card.Text>
                    <Card.Text>
                        The easiest place to begin might be with Moshe’s background. His doctorate was in physics, and he was a black-belt judo master, father of the judo clubs of France and author of a number of books on the subject. Even with these initial works you can see the cross-pollination, the laws of physics being applied to the operations of the body.
                </Card.Text>
                    <Card.Text>
                        Then there was a knee injury that was to prove fateful. The doctors gloomily suggested surgery and refused to be optimistic about the results. Moshe didn’t like the odds and set out to find a solution on his own. He immersed himself in neurophysiology, anatomy, learning theory, biochemistry, psychology, anthropology, whatever seemed even vaguely applicable. The resultant gestalt even reflects Moshe’s study of Zen with Dr. Suzuki. And he came up with a solution of sorts. He taught himself how to use the knee correctly and, lo and behold, the body was able to heal itself.
                </Card.Text>
                    <Card.Text>
                        The understandings and conclusions he had reached were presented in a book, The Body and Mature Behavior. Now, more than 25 years later, it is referred to as a pioneering work, but at the time it was largely ignored. So Feldenkrais put such concerns behind him and went back to being a physicist. Except it didn’t end there. Friends came to him with ailments, the word spread.
                </Card.Text>
                    <Card.Text>
                        Finally, Moshe gave up his life’s work and at the age of 50 became a “quack.” Can you imagine the poor man’s Jewish mother whose wonderful son the physicist suddenly gave it all up for some mysterious process clearly not sanctioned by the medical world? And while Feldenkrais now uses the word “quack” with great delight, one senses that it wasn’t always so. He is a proud man and there were difficult uphill years before his work began to be recognized by the academic and medical communities.
                </Card.Text>
                    <Card.Text>
                        Yet it all seems so obvious in retrospect. Our musculature does not function except as directed by the nervous system. When learning a sport we don’t train our bodies so much as our minds. The arm doesn’t learn how to hit a tennis ball properly. Instead the brain learns a complex series of neural firings in a specific pattern and time frame.
                </Card.Text>
                    <Card.Text>
                        The way we hold ourselves or move is a wide array of neural impulses that is part of the brain’s normal functioning (a state which includes a complex interweave of emotions, thought, sensory impressions, spatial and temporal orientation). Change the way you move and what you’ve really changed is the nature of the mind.
                </Card.Text>
                    <Card.Text>
                        In the midst of all the difficulties I was having with my knees, the Humanistic Psychology Institute was arranging for Dr. Feldenkrais to come to America to do a three-year training program in functional integration therapy. To date he had only trained a handful of associates and it was time to leave a legacy. As I applied for admission I couldn’t help remembering the story of Feldenkrais and the infamous knee injury. Maybe I’d find an answer to my own problems.
                </Card.Text>
                    <Card.Text>
                        The summer of 1975 turned out to be one of the most satisfying of my life. Sixty-five of us gathered in San Francisco for the first three months of the training. We spent the mornings rolling around on the floor doing the Feldenkrais exercises: easy, gentle explorations in awareness; learning the ways in which we limit ourselves and going beyond.
                </Card.Text>
                    <Card.Text>
                        “People use a mere 10% of their capacity,” Moshe was fond of saying. I suppose at times we must have looked like a gaggle of apprentice acrobats, delighting in moments of improved flexibility until Moshe brought us back to earth. “It doesn’t matter, “ he would cry. “It is a little present, but it is not the point. Was Newton flexible? No one knows and no one cares. Flexibility is irrelevant. What we are after is flexible minds.”
                </Card.Text>
                    <Card.Text>
                        Before, during and after the exercises Moshe would lecture and crack jokes, insisting that unless we enjoyed ourselves we wouldn’t learn well. In the afternoons there was the table work. We had to become sensitized to the point where by touching another body we could feel what had gone wrong and with our hands help someone experience a more optimal way of functioning.
                </Card.Text>
                    <Card.Text>
                        “It’s like dancing,” Moshe once explained, beaming as he waltzed an imaginary partner about. “If you take a friendly girl who can dance, and she likes you and wants you to dance, she takes you by her hand and suddenly you can dance exactly like anybody else. The two become one body, moving together. We have to establish that two-way human contact which is of the most delicate nature, so that the person feels you will guide him where he can’t go himself.”
                </Card.Text>
                    <Card.Text>
                        I’d had that experience myself. When learning a folk dance with a partner who was truly confident in her movements, suddenly I’d be dancing beautifully without really being able to explain what I was doing.
                </Card.Text>
                    <Card.Text>
                        Moshe’s understanding of the nervous system has applications ranging from scoliosis (curvature of the spine), to the rehabilitation of stroke victims, to multiple sclerosis (no, it can’t cure ms, but it can help people struggling with the disease to move easier), to (the wait was not in vain) helping athletes perform better. Which brings us finally to chondromalacia of the knees and my own experience of Feldenkrais.
                </Card.Text>
                    <Card.Text>
                        A few days into the training I sat down beside Dr. Feldenkrais, introduced myself, asked him to forgive the intrusion, and launched into a detailed narrative of the floating kneecap and my odyssey through the medical community. As I talked his countenance grew ever more contemptuous and impatient until he finally cut me off.
                </Card.Text>
                    <Card.Text>
                        “Nonsense, nonsense. Your knees hurt because you don’t know how to run. Your feet are wrong. You move your knees incorrectly. Your adductors are tight. Your pelvis doesn’t rotate. Your back is stiff. In fact, you have no movement at all between your first and second lumbar vertebrae.”
                </Card.Text>
                    <Card.Text>
                        I was quickly going into shock. My faults seemed endless. And how the hell could he know all that. He made it seem a miracle I wasn’t in a wheelchair. He ended his cataloging with a mournful, “Weak quadriceps,” as he glanced to the heavens. Sometimes it seemed as if the stupidity of the world was too much for the poor man to bear.
                </Card.Text>
                    <Card.Text>
                        So I was changed. My back was slowly loosened, and I started working on rotating my hips. One day it was explained to me that I was doing a hook to the outside with my left knee every time I brought it forward. On my run that night I focused every ounce of my attention on that knee, observing as uncritically as possible its position each time I pulled it through.
                    <br></br>“There’s the arc.”
                    <br></br>“Better.”
                    <br></br>“Too much inside.”
                    <br></br>“Ah, that’s it.”
                    <br></br>By the end of the run I could tell to the centimeter whether the knee was coming through straight or not. And I had discovered a powerful tool. Awareness.
                </Card.Text>
                    <Card.Text>
                        By sensing, examining, experiencing my stride, I could rid it of the extraneous. One of the central precepts of the Feldenkrais exercises is that if you pay attention to a movement, the tonus and quality will improve. “Attention, attention, attention,” the Zen master wrote when asked for wisdom. Both meditation and the Feldenkrais work can be defined as the removal of the habitual from one’s life.
                </Card.Text>
                    <Card.Text>
                        On another occasion one of the Feldenkrais assistants became fascinated with my feet and commented, “Look, you have these incredibly high arches and your leg bones are directed down through the outside edges of your feet, which is where you bear the weight. You know you hold yourself like that.”
                <br></br>“Me? Surely the way my feet are built isn’t my fault.”
                <br></br>“Sure, who else? You hold your feet in an arch. Without the tightness it would be much lower. For some reason you’ve learned to hold your feet like that. Here, lie down.”
                </Card.Text>
                    <Card.Text>
                        And so the mysteries began. I understand now what was done, but at the time it seemed utterly strange. For the next 30 minutes my feet were pulled, prodded, cajoled and generally shown the folly of their ways. More accurately, my nervous system was re-educated.
                </Card.Text>
                    <Card.Text>
                        When I stood up it was quite unnerving. They weren’t my feet. The arches were normal, the leg bones rested squarely over the middle of the feet. Walking felt strange and even a little unsteady, quite as if I was doing it wrong.
                </Card.Text>
                    <Card.Text>
                        Later that week while I was out running I re-experienced the original attitude that went with the high arch. Suddenly I was young again, imagining myself running like an Indian: strong, indomitable, tireless. I had gotten it in my head that Indians ran pigeon-toed, so there I was, cupping my feet to the inside, pulling my arches up.
                </Card.Text>
                    <Card.Text>
                        The results of all this were impressive. My knee problem vanished. I’ve increased my mileage considerably without a trace of difficulty. I’m running faster than I ever did before. Last and probably least, my shoe size went from a 9-1/2 to a 10-1/2 as the feet flattened out.
                </Card.Text>
                    <Card.Text>
                        I’ve come to the conclusion that correct style is important. I watch the mistakes my friends make and I’m tempted to say something. (So far I’ve kept my mouth shut, preferring slow friends to fast enemies.)
                </Card.Text>
                    <Card.Text>
                        A high back-kick simply wastes time and energy.
                </Card.Text>
                    <Card.Text>
                        Leaping a foot off the ground with each stride leaves you out of contact for longer periods of time and needless work is being done to attain that useless elevation.
                </Card.Text>
                    <Card.Text>
                        How can your quadriceps contract freely to lift your knees if the hamstrings opposite them are doing overtime holding you up, trying to keep your forward lean from turning into a dive?
                </Card.Text>
                    <Card.Text>
                        Lead with the hips and let your torso rest upright over the legs.
                </Card.Text>
                    <Card.Text>
                        Try rotating your hips. Don’t worry about what the neighbors will think. A little swish can help send the knees forward and might even add an easy inch to each step. On the other hand, this can be overdone. If your elbows are flaring wide to the side, your pelvis will have to over-rotate. You don’t want this, either.
                </Card.Text>
                    <Card.Text>
                        And don’t force yourself to a longer stride. If your foot lands with your leg fully extended, you’ll be braking against your forward momentum with each footfall. A shorter stride can be more efficient. Land with the knee above the foot.
                </Card.Text>
                    <Card.Text>
                        I guess the best suggestion is just to become aware of what you’re doing.
                </Card.Text>
                    <Card.Text>
                        The summer of ’75 was an amazing experience for me. The running seemed effortless. I was surrounded by 65 of the nicest people I’d ever met. And always there was Moshe, making us laugh, putting us through the exercises, scowling at our ineptness, telling us stories, performing minor miracles with his hands. In the end I came to love the old man, his goodness and his faults. I came away with a philosophy of life and a glimmering of what it’s all about. And an awful lot of studying to do.
                </Card.Text>
                    <Card.Text>
                        A current note on strong quads
                </Card.Text>
                    <Card.Text>
                        They've done research lately that shows you really can ease or eliminate knee pain by strenthening ALL the muscles of the upper leg and hips—front, sides, back, butt. The one exercise I still think has the potential to aggravate the problem is the leg extensions I was prescribed back when. But I've run across a better version of the quad exercise worth passing on. Don't do a full range of motion. Straighten the leg against resistance, hold it there a few seconds, drop the leg 6 inches and again hold for a few seconds, then extend again. This way you avoid multiple reps in the range where you aggravate the tenderness.
                </Card.Text>
                </Card> : null
            }
            {
                price ? <Card>
                    <Card.Title className='text-center'><h1>Price & Purchase</h1></Card.Title>
                    <Card.Text>
                        This is new for us. We've switched to downloads. I used to ship out a CD with the files on it. Took a week or two to get where it was going. There were ever rising shipping costs. There were wails heard from clear across the seas when the local goverments insisted on collecting a 40% tax for shipping something in from the United States. (Our bosum buddies in England were the worst.) The last three computers I've bought don't have CD players. Windows 10 refused to recognize CDs made on previous operating systems. The world moves on.
                </Card.Text>
                    <Card.Text>
                        Now you click (the buy now button over to the left). You pay using PayPal.
                </Card.Text>
                    <Card.Text>
                        Then you'll return to a modified version of this website's homepage. If you look on the center of the page you'll find instructions to click again. Do so.
                </Card.Text>
                    <Card.Text>
                        A funny little symbol will float over to you download folder. You'll wait a few minutes. You'll have your lessons. It's a better system than waiting a week. They'll show up in your Download directory (or wherever you've chosen for such things). Just create a new directory somewhere on your computer and copy the files from the zip directory into the newly created directory. Another bonus of this system, if you lose track of the lessons or your disc crashes. You won't be charged all over again. If I have a record that you've bought the lessons, I'll simply arrange for a fresh download.
                </Card.Text>
                    <Card.Text>
                        If you need the lessons in some other format, write and let us know and we'll try and find a solution. But that will entail an extra charge for the medium (think USB drive) and the mailing cost.
                </Card.Text>
                    <Card.Text>
                        I will mention that we're just transitioning (December 2018) to this new approach. But if you have any problem just email Bruce@BruceTHolmes.com. Tell me what happened, and I'll roll into action. I have backup procedures I can turn to.
                </Card.Text>
                    <Card.Text>
                        If you want to explore the Feldenkrais Method and the genius of Moshe Feldenkrais from the comfort of your own home, this is the most cost effective method you'll ever find of doing so. I even have some of the old CDs if that's what you'd prefer.
                </Card.Text>
                </Card> : null
            }  
                </Col>                                                                                                                                                                                                                                                                                                               
            </Row>                                                                                                                                      
        </Container>
    )
}