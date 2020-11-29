import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import ShoppingIndex from './ShoppingIndex'

export default function TShirts() {

    return (
        <Container>
            <Row>
                <ShoppingIndex />
                <Col>
                    <h1>TShirts</h1>
                    <Row>
                        <Col sm={8}>
                            <div className='text-center'>
                                <Image
                                    src='/Music/TShirts1.jpg'
                                    alt='lifeShirts'
                                    fluid='true'
                                />
                                <h1>Life T-Shirts</h1>
                                <h2>$12</h2>
                                <h1>NEW PAYPAL BUTTON</h1>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='text-center'>
                                <Image
                                    src='/Music/OldKingReelShirt.jpg'
                                    fluid='true'
                                    alt='okrshirt'
                                />
                                <h1>Old King's Reel T-Shirt Black/Gold</h1>
                                <h2>$12</h2>
                                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="NKPFBHXTR5UE8" />
                                    <table>
                                        <tbody><tr><td><input type="hidden" name="on0" value="Sizes" />Sizes</td></tr><tr><td><select name="os0">
                                            <option value="Small">Small </option>
                                            <option value="Medium">Medium </option>
                                            <option value="Large">Large </option>
                                            <option value="X-Large">X-Large </option>
                                            <option value="2XL">2XL </option>
                                            <option value="3XL">3XL </option>
                                            <option value="4XL">4XL </option>
                                        </select> </td></tr>
                                        </tbody></table>
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}