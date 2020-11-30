import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { AudioPlayerControlSprite, AudioPlayer, type TrackType } from 'react-audio-player-pro';
import reactAudioPlayerProStyle from 'react-audio-player-pro/dist/style.css';


import OldIndex from './OldIndex'

export default function Old() {

    const audioTrackList: Array<TrackType> = [
        {
            src: '/Music/OldSongs/OldKingsReel.mp3',
            content: "1. The Old King's Reel",
        },
        {
            src: '/Music/OldSongs/OneLove.mp3',
            content: '2. One Love To Last',
        },
        {
            src: '/Music/OldSongs/FieldsOfWheat.mp3',
            content: '3. Fields Of Wheat',
        },
        {
            src: '/Music/OldSongs/Marathon.mp3',
            content: '4. Marathon',
        },
        {
            src: '/Music/OldSongs/GodsRules.mp3',
            content: "5. God's Rule",
        },
        {
            src: '/Music/OldSongs/WaterIsWide.mp3',
            content: '6. The Water is Wide',
        },
        {
            src: '/Music/OldSongs/WhenTheWindsReturn.mp3',
            content: '7. When the Winds Return',
        },
        {
            src: '/Music/OldSongs/Wishes.mp3',
            content: '8. Wishes',
        },
        {
            src: '/Music/OldSongs/SheIsBetter.mp3',
            content: '9. She Is Better These Days',
        },
        {
            src: '/Music/OldSongs/Orgy.mp3',
            content: '10. The Orgy Song',
        },
        {
            src: '/Music/OldSongs/GreatLife.mp3',
            content: '11. Great Life',
        },
        {
            src: '/Music/OldSongs/NotTheNightgown.mp3',
            content: '12. Not The Nightgown',
        },
        {
            src: '/Music/OldSongs/LifeIsHard.mp3',
            content: '13. Life Is Hard',
        },
        {
            src: '/Music/OldSongs/Illinois.mp3',
            content: '14. The Illinois 7th Regiment',
        },
    ]

    return (
        <Container>
            <Row>
                <OldIndex />
                <Col>
                    <Image
                        src='/Music/BHolmes600dpiOKR.jpg'
                        alt="okr"
                        fluid='true'
                    />
                    <br></br><br></br>
                    <Card border='dark'>
                        <>
                            <AudioPlayerControlSprite />
                            <AudioPlayer
                                trackList={audioTrackList}
                                className="LifePlayer"
                                defaultState={{
                                    isMuted: false,
                                    activeIndex: 0,
                                    isShuffleOn: false,
                                    isTrackListOpen: true,
                                    repeatingState: 'none',
                                }}
                            />
                        </>
                    </Card>
                </Col>
                <Col>
                    <div className='text-center'>
                        <p>
                            <span class='quote'>Bruce has delivered a beautiful CD with great songs and beautiful music.</span>
                            <br></br>
                            Freddy Celis, Rootstime
                        </p>
                        <p>
                            <span class='quote'>Great stuff. Like it a lot!!!!!</span>
                            <br></br>
                            Martin van der Laan, Radio Compagnie
                        </p>
                        <p>
                            <span class='quote'>A very cool CD.</span>
                            <br></br>
                            Kevin Elliott, WEFT
                        </p>
                        <p>
                            <span class='quote'>Deep feeling and always inspiring performances. I enjoyed it from start to finish, and I found great music in it, always accompanied by intelligent lyrics.</span>
                            <br></br>
                            Remo Ricaldone, Susa Onda Radio, Italy
                        </p>
                        <h3>Buy it Now: $10</h3>
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="UKYJ2GW856ZE2" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                        <p>or</p>
                        <h3>CD & T-shirt Bundle for $14</h3>
                        <Image
                            src='/Music/OldKingReelShirt.jpg'
                            fluid='true'
                            alt='okrshirt'
                        />
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="YSD645NSTBC9N" />
                            <table>
                                <tbody><tr><td><input type="hidden" name="on0" value="Comes with a t-shirt for $4 more" />Comes with a t-shirt for $4 more</td></tr><tr><td><select name="os0">
                                    <option value="Small">Small </option>
                                    <option value="Medium">Medium </option>
                                    <option value="Large">Large </option>
                                    <option value="XL">XL </option>
                                    <option value="2XL">2XL </option>
                                    <option value="3XL">3XL </option>
                                    <option value="4XL">4XL </option>
                                </select> </td></tr>
                                </tbody>
                            </table>
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
