import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TwoCentsIndex from './TwoCentsIndex'

export default function WindowsMac() {

    return (
        <Container>
            <Row>
                <TwoCentsIndex />

                <Col>
                    <h1>Windows Vs. Mac</h1>
                    <p>I grew up on Microsoft operating systems. I programmed for them and knew them well. When Vista came along I thought it was time to get a new computer so I splurged and bought a top-of-the-line laptop with Vista on it. Blew about $3000 on the computer and latest Microsoft software. The following year was a complete and total disaster. Vista kept crashing. Every other month I would get told I would have to reinstall Vista. When you reinstall a Windows operating system, you have to reinstall each of the programs. I spent endless hours typing in key codes and inserting disks. I twice lost databases. Huge databases full of important information. Except I'd made backups of the databases. Microsoft databases. Except Microsoft tech support explained they could not remount such databases. So while all the data was sitting there, you couldn't access it. I lost a year of my life trying to cope with all the insanity of it. Finally I went out and bought a Mac and started over.</p>
                    <p>Instantly the insanity ended. The Mac never crashes. After three years on the Mac Mini I moved up to the Mac Pro. So I've been on a Mac machine for six years now. I have not had a single crash. Not one. Solid as a rock. What used to be a daily occurance just isn't part of my life anymore. You have no idea what a miracle that seems. I no longer spend my days recovering from the latest computer foul-up. It was explained to me when I bought it that even if a problem develops and you have to reinstall the Mac operating system, you don't then have to reinstall all your software. Since the problem never crops up, I'll have to take their word for it. Because the durn Mac does NOT KNOW HOW TO CRASH (have I mentioned that already). I have become an Apple disciple. I will never buy another Windows computer again.</p>
                    <div style={{ width: '50%' }}>
                        <Image
                            src='/TwoCents/Apple.jpg'
                            align='left'
                            alt='apple'
                            className='picture'
                            fluid='true'
                        />
                    </div>
                    <div className='pull-right'>
                        <p>I'll tell you what else is cool about Apple. It's like stepping into a finer, cooler world of the future. Their packaging is cool. The graphics are classy. I even like their advertising. It's hard not to admire Apple. Plus if I type an item into my ToDo list on my Mac Pro, I find it sitting there in the ToDo list of my iPad when I go downstairs. That's true for my calendar, email, whatever. The iPhone also is part of this updating business. Yeah, I went out and bought one of those too. I've noticed this weird thing. I feel so dang grateful that I want to go out and spend money with Apple. That would explain the new Macbook Air I've got downstairs. And all the software that comes with an Apple device just plays well with all the other software. If I need to get somewhere I pull out my iPhone. I call up my address book and touch the address. Instantly there's a map of the location. Another touch and I'm getting directions to the place.</p>
                        <p>I'm feeling like lunch. I call up Siri. "Is there a Taco Bell nearby?" "Yes, there's a Taco Bell on Waukegan. 1.2 miles away. I can call them or offer directions." "Directions." "Turn right and head south on Ravine Way." I love science fiction and it's full of stories of computers that are quite human. Siri seems remarkably human. I feel rather greatful that I got to see it happen.</p>
                    </div>
                    <p>So much of modern technology sort of works or sounds good in theory. The Apple stuff really does work. And it's not that the hardware is so special, though it is. It's the software that comes with it. You've got most everything you need. Forget Microsoft Office. Equivalents come free with a new Mac. It's almost a miracle how well it all works. And the iOS devices get free updates. It's all effortless.</p>
                    <p>When I got the Mac I bought a program that would allow me to run my old Windows programs on the Mac. Except it's rather annoying when the Windows sesson takes over and I wouldn't recommend it. Just get Mac versions of things and put the Windows world behind you. Be forwarned that there are some specialty programs not available on the Mac. If one of those is essential to you, maybe Windows 7, 8 and 10 are more stable than Vista was. That's what Microsoft keeps saying. Oh, and my favorite monitor didn't work with the Mac Mini. Mystery why. Another one I had sitting around the house did. You may find little moments like that when switching. It's not totally painless.</p>
                    <p>Visually there are things I liked about Windows. I have had a couple of moments using the Mac where I went to do something and realized that I like the old Windows way better. But those few annoyances have disappeared with recent upgrades to the Mac OSX. And these days I know what peace of mind feels like. I recently experienced an urgent need to save a document I was working on. And then laughed at the old feeling. I haven't lost a document since I got a Mac. Things don't crash. Documents don't disappear. I'm in the Apple camp now. And it's heaven.</p>
                    <p>I will admit that I didn't make as much use of the iPhone as I should have. I just didn't like carrying it around all the time. These days I just leave the phone in a central spot in the house and access it through my Apple Watch (yeah, yeah, I got one of those too). The watch is a lot of fun. No regrets. In fact I'm finally getting more use out of my phone thanks to the watch.</p>
                    <p>Truth in advertising addendum: After I fell in love with Apple (and after writing this article) I bought Apple stock. I didn't write this article in order to boost the stock I owned. I bought the stock because I believe in the company. But I thought you ought to know.</p>
                </Col>
            </Row>
        </Container >
    )
}